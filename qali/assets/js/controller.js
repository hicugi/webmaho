// body
ngApp.controller('bodyCtrl' ,['$scope','$http','$sce','$routeParams' ,'$location' ,function($scope,$http,$sce,$routeParams,$location){

  // $scope & $root to sc & sr
  {

    var sc = $scope
      , sr = sc.$root;

    sr.w = window;
    window.app = sc.$root;
    window.$ = $;
  }

  // $root
  {

    app.nav = false;

    // apply
    sr.apply = function( fn ,t ){
      setTimeout(function(){
        sr.$apply(function(){ fn() });
      } ,t?t:100);
    }

    // trust src
    sr.trust = {

      item: ''

      ,get: function(v){ return $sce.trustAsResourceUrl(v); }
      ,url: function(v){ return $sce.trustAsResourceUrl(v); }
    }

    // youtube
    sr.youtube = function( v ,b ){

      var b = b != undefined ? 1 : 0;

      if( v == undefined )
        return template.empty;

      if( v.indexOf('?') == -1 ) v += '?';
      else v += '&';

      if( b ) v += 'autoplay=true';

      return $sce.trustAsResourceUrl( v );
    }
  }

  // change page
  {

    sr.location = {

      host: location.hostname
      ,path: ''

      ,to: function( u ){
        sr.apply(function(){
          $location.url(u);
        });
      }
    };

    sc.changePage = {

      location: function(){
        sr.apply(function(){

          var v = location
            , vpath = v.pathname.replace( /^\//g ,'' );

          if( vpath == '' ) vpath = '/';
          if( vpath.indexOf('.html') == -1 && vpath.substr(-1,1) != '/' ) vpath += '/';

          sr.location.path = vpath;
        });
      }

      ,nav: function(){
        sr.nav = false;
      }

      ,scroll: function(){
        $('html,body').animate({ scrollTop: 0 } ,300);
      }

      ,modals: function(){
        var d = $('.modal.show');
        if( d.length ) d.modal('hide');
      }

      ,cart: function(){
        sr.cart.active = false;
      }
    };

    sc.$on('$routeChangeStart', function(){

      sr.page = {};

      for( k in sc.changePage )
        sc.changePage[k]();
    });
  }

  // slider
  sr.slider = {

    // init
    init: function( v ,e ){

      var vstep = v.step ? v.step : 1;

      this[v.key] = {
        ix: 0
        ,length: v.items.length

        ,step: vstep
        ,stepMd: v.stepMd ? v.stepMd : vstep
        ,stepXs: v.stepXs ? v.stepXs : vstep
      };
    }

    // slide
    ,slide: function( k ,side ){

      var v = this[k]
        , np = v.ix
        , vstep = v.step
        , w = window.innerWidth;

      if( w < 768 ) vstep = v.stepXs
      else if( w < 992 ) vstep = v.stepMd

      if( side == 'next' ){
        
        np += vstep;
        if( np >= v.length ) np = 0;
      } else{
        
        np -= vstep;
        if( np < 0 ) np = vstep > 1 ? parseInt(v.length / vstep) * vstep : v.length-1;
      }

      v.ix = np;
      v.timeoutVal = 0;
    }

    ,getClass: function( k ,ix ){

      var v = this[k]
        , n = v.ix;

      if( !n ) return ix;

      return ix - n;
    }
  };

  // modal
  sr.modal = {

    show: function(k){

      // var d = $('.modal.show');

      // if( d.length ){

      //   d.modal('hide');

      //   setTimeout(function(){
      //     $(k).modal('show')
      //   } ,300);
      //   return 0;
      // }

      $('#modal-'+k).modal('show');
    }
    ,hide: function(){
      $('.modal.show').modal('hide');
    }
  }

  sr.query = function( url ,prm ){
    url = url.replace(BASE_PATH, '').replace( /^\/|\/$/ ,'' );
    prm = prm != undefined ? prm : {};

    if( prm.method == undefined )
      prm.method = 'GET';

    prm.url = url + '.json';
    prm.dataType = 'JSON';

    // headers
    {

      if( !prm.headers ) prm.headers = {};

      prm.headers['Content-Type'] = 'application/x-www-form-urlencoded';

      if( localStorage.usertoken )
        prm.headers['usertoken'] = localStorage.usertoken;

      if( localStorage.userlg )
        prm.headers['userlg'] = localStorage.userlg;
    }

    this.queryLast = prm;
    return $http( prm );
  }
  sr.queryData = function( vs ){

    var r = [];

    for( k in vs ){

      var v = vs[k];

      if( typeof(v) == 'string' )
        v = v.replace( /\&/g ,'\&' );

      r.push(k+'='+v);
    }

    return r.join('&');
  }
  sr.form = {

    check: function( vs ,fs ){

      var r = {};

      fs.required = fs.required.split(',');
      fs.phone = fs.phone.split(',');

      // required
      for( i=0; i < fs.required.length; i++ ){
        var k = fs.required[i];
        if( !vs[k] || !vs[k].length )
          r[k] = 'обязательное поле';
      }

      for( i=0; i < fs.phone.length; i++ ){
        var k = fs.phone[i];
        console.log(vs[k])
        if( !vs[k] || vs[k].replace(/\D/g,'').length != 11 )
          r[k] = 'некорректный телефон';
      }

      return r;
    }
  };

  // base
  {

    sr.base = {};

    sr.query('j/base').then(function(r){

      var d = r.data;

      sr.base = d;

      app.cart.parse(d.cart.items);
      app.cart.payments = d.cart.payments;
      app.cart.deliveries = d.cart.deliveries;

      if( d.usertoken )
        localStorage.setItem( 'usertoken', d.usertoken );
    });
  }

  // page
  {

    sr.page = {}
    sr.pageLoading = 1;

    sr.pageLgChange = function( lg ){

      if( lg ) localStorage.userlg = lg;

      sr.pagelg = localStorage.userlg ? localStorage.userlg : 'ru';
      localStorage.userlg = sr.pagelg;

      if( lg ){
        location.href = '/';
        sr.cart.remove();
      }
    }

    sr.pageGet = function(){

      var v = location.search.replace( /^\?/ ,'' );

      sr.pageLoading = 1;

      sr.query(
          'j/page'+location.pathname
          ,{ method: 'GET' ,data: v }
        )
        .then(function(r){

          r = r.data;

          if( !r.template ) r.template = 0;

          sr.page = r;
          sr.apply(function(){ sr.pageLoading = 0; } ,500);

          $('head title').html( r.title ? r.title : 'Qali' );
          sr.pageLgChange();
        });
    };

    sc.changePage.page = function(){
      sr.pageGet();
    }
  }

  // cart
  sr.cart = {

    active: false
    ,price: 0

    ,countries: ["Абхазия","Австралия","Австрия","Азад Кашмир","Азербайджан","Аландские острова","Албания","Алжир","Ангилья","Ангола","Андорра","Антигуа и Барбуда","Аргентина","Армения","Аруба","Афганистан","Багамские Острова","Бангладеш","Барбадос","Бахрейн","Белиз","Белоруссия","Бельгия","Бенин","Бермудские Острова","Болгария","Боливия","Бонэйр","Босния и Герцеговина","Ботсвана","Бразилия","Бруней","Буркина-Фасо","Бурунди","Бутан","Вануату","Ватикан","Великобритания","Венгрия","Венесуэла","Виргинские Острова (США)","Виргинские Острова (Великобритания)","Восточный Тимор","Вьетнам","Габон","Гаити","Гайана","Гамбия","Гана","Гваделупа","Гватемала","Гвиана","Гвинея","Гвинея-Бисау","Германия","Гернси","Гибралтар","Гондурас","Гонконг","Гренада","Гренландия","Греция","Грузия","Гуам","Дания","Джерси","Джибути","Доминика","Доминиканская Республика","ДНР","Египет","Замбия","Зимбабве","Израиль","Индия","Индонезия","Иордания","Ирак","Иран","Ирландия","Исландия","Испания","Италия","Йемен","Кабо-Верде","Казахстан","Острова Кайман","Камбоджа","Камерун","Канада","Катар","Кения","Кипр","Северный Кипр","Киргизия","Кирибати","Китайская Народная Республика","Китайская Республика","Кокосовые острова","Колумбия","Коморские Острова","Демократическая Республика Конго","Республика Конго","Корейская Народно-Демократическая Республика","Республика Корея","Республика Косово","Коста-Рика","Кот-д’Ивуар","Куба","Кувейт","Кука острова","Кюрасао","Лаос","Латвия","Лесото","Либерия","Ливан","Ливия","Литва","Лихтенштейн","ЛНР","Люксембург","Маврикий","Мавритания","Мадагаскар","Майотта","Макао","Македония","Малави","Малайзия","Мали","Мальдивы","Мальта","Марокко","Мартиника","Маршалловы Острова","Мексика","Микронезия","Мозамбик","Молдавия","Монако","Монголия","Монтсеррат","Мьянма","Мэн","НКР","Намибия","Науру","Непал","Нигер","Нигерия","Нидерланды","Никарагуа","Ниуэ","Новая Зеландия","Новая Каледония","Норвегия","Норфолк остров","Объединённые Арабские Эмираты","Оман","Пакистан","Палау","Государство Палестина","Панама","Папуа — Новая Гвинея","Парагвай","Перу","Питкэрн острова","Полинезия Французская","Польша","Португалия","ПМР","Пуэрто-Рико","Реюньон","Рождества остров","Россия","Руанда","Румыния","Саба","Сальвадор","Самоа","Самоа Американское","Сан-Марино","Сан-Томе и Принсипи","Саудовская Аравия","Сахарская Арабская Демократическая Республика","Свазиленд","Святой Елены, Вознесения и Тристан-да-Кунья острова","Северные Марианские Острова","Сейшельские Острова","Сенегал","Сен-Бартелеми","Сен-Мартен","Сен-Пьер и Микелон","Сент-Винсент и Гренадины","Сент-Китс и Невис","Сент-Люсия","Сербия","Сингапур","Синт-Мартен","Синт-Эстатиус","Сирия","Словакия","Словения","Соединённые Штаты Америки","Соломоновы Острова","Сомали","Судан","Суринам","Сьерра-Леоне","Таджикистан","Таиланд","Танзания","Тёркс и Кайкос","Того","Токелау","Тонга","Тринидад и Тобаго","Тувалу","Тунис","Туркмения","Турция","Уганда","Узбекистан","Украина","Уоллис и Футуна","Уругвай","Фареры","Фиджи","Филиппины","Финляндия","Фолклендские острова","Франция","Хорватия","ЦАР","Чад","Черногория","Чехия","Чили","Швейцария","Швеция","Шри-Ланка","Эквадор","Экваториальная Гвинея","Эритрея","Эстония","Эфиопия","Южная Осетия","Южно-Африканская Республика","Южный Судан","Ямайка","Япония"] 

    ,toggle: function( b ){
      this.active = !b ? !this.active : b;
    }
    ,animate: function(){

      var self = this;

      self.animateActive = 1;

      app.apply(function(){ self.animateActive = 0; } ,1000);
    }

    ,add: function( id ,data ){

      var self = this
        , data = data ? data : {}
        , vd = [ 'id='+id ];

      for( k in data )
        vd.push(k+'='+data[k]);

      app.query( 'j/pcart/add?'+vd.join('&')).then(function( r ){ self.parse(r.data); });
    }
    ,remove: function( id ){

      var self = this
        , u = 'j/pcart/remove'
      ;

      if( id ) u += '?id='+id;

      app.query(u).then(function( r ){ self.parse(r.data); });
    }

    ,form: {
      country: ''
    }
    ,deliver: 1
    ,payment: 1

    ,checkoutDone: 0
    ,checkout: function(){

      var self = this
        , is = this.items
        , d = [];

      for( i=0; i < is.length; i++ ){

        var v = is[i];

        d.push( 'product['+i+'][id]='+v.id );
        d.push( 'product['+i+'][count]='+v.count );
      }

      app.query( 'j/pcart/checkout' ,{ data: d.join('&') } ).then(function(r){
        self.parse(r.data);
        self.checkoutDone = 1;
      });
    }
    ,order: function(){

      var self = this
        , d = [];

      // forms
      for( k in this.form )
        d[k] = this.form[k];

      // deliver & payment
      d.deliver = this.deliver;
      d.payment = this.payment;
      d.price = this.price;

      if( !d.phone ){
        swal(localStorage.userlg == 'en' ? 'Error' : 'Ошибка', sr.base.cart_order_error ? sr.base.cart_order_error : "Заполните все обязатльные поля", 'error');
        return 0;
      }

      app.query( 'j/pcart/order' ,{ data: app.queryData(d) } ).then(function(r){
        self.parse([]);
        swal(localStorage.userlg == 'en' ? 'Thanks you' : 'Спасибо', sr.base.cart_order_success ? sr.base.cart_order_success : "Ваш запрос прошел успешно! \nМы вскоре с Вами свяжемся.", 'success');
      });
    }

    ,parse: function( is ){

      // parse
      {

        var r = 0;

        for( i=0; i < is.length; i++ ){
          var v = is[i];
          r += v.product.price * v.count;
        }

        this.price = r;
      }

      this.items = is;
      this.animate();
    }
  };

  // user
  sr.user = {

    init: function(){}

    ,signinForm: {}
    ,signin: function(){

      var self = this
        , data = self.signinForm;

      // check correct form
      {
        var r = sr.form.check( data ,{ required: 'phone,email,pass,repass' ,phone: 'phone' } );
        self.signinFormError = r;
      }

      if( !data ) return 0;

      // sr.query( 'j/user/signin' ,data ).then(function(r){
      //   console.log(r.data);
      // });
    }
  };

  // request
  sr.request = {

    forms: {
      name: ''
      ,phone: ''
    }
    ,required: [ 'phone' ]

    ,submit: function( title ){

      var self = this
        , data = this.forms
      ;

      // check data
      for( k in data ){

        var v = data[k];

        if( this.required.indexOf(k) > -1 && !v.length ){
          swal(localStorage.userlg == 'en' ? 'Error' : 'Ошибка', sr.base.request_error ? sr.base.request_error : "Заполните все обязатльные поля", 'error');
          return 0;
        }
      }

      if( title ) data.title = title;

      sr.query( 'j/request' ,{ data: sr.queryData(data) } )
        .then(function(r){

          r = r.data;

          if( r.error ){
            swal(localStorage.userlg == 'en' ? 'Error' : 'Ошибка', r.error, 'error');
            return 0;
          }

          self.forms.name = '';
          self.forms.phone = '';

          swal(localStorage.userlg == 'en' ? 'Thanks you' : 'Спасибо', sr.base.request_success ? sr.base.request_success : "Ваш запрос прошел успешно! \nМы вскоре с Вами свяжемся.", 'success');
          sr.modal.hide()
        });
    }
  };
}]);

// scroll
$(window).scroll(function(){

  var y = window.scrollY
    , d = $('.menu')
    , sc = 'fixed';

  if( y > 100 ) d.addClass(sc);
  else d.removeClass(sc);
});
