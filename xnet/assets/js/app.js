var app = {

  init: function(){
    var self = this;

    for( k in self )
      if( typeof(self[k]) === 'function' && k.match(/Init$/) )
        (function(){ self[k]() })( k );
  }

  ,setHeight: function( k ){

    var d = $(k);

    if( !d.length ) return 0;

    var h = d.height()
      , ds = d.find('>*')
      , b = h > 0 ? 1 : 0
      , sc = 'active';

    if( b ) h = 0;
    else h = ds.height() * ds.length;

    if( h > 0 ) d.addClass(sc);
    else d.removeClass(sc);

    d.height(h);
  }

  // form
  ,form: false
  ,formInput: ''
  ,formSelector: 'input[type=hidden],input[type=text],input[type=number],input[type=date],input[type=email],input[type=tel],input[type=password],input:checked,textarea,select'
  ,formData: function( d ){
    var dfs = d.find(this.formSelector)
      , r = {};

    for( i=0; i < dfs.length; i++ ){

      var ds = $(dfs[i])
        , vn = ds.attr('name')
        , v = ds.val();

      if( vn == undefined || vn == '' ) continue;

      r[vn] = v;
    }

    return r;
  }
  ,formClear: function( d ,b ){

    d.find('.has-error').removeClass('has-error');
    d.find('.error-log').remove();

    if( b != undefined )
      d.find('input[type=text],input[type=number],input[type=date],input[type=tel],input[type=email],input[type=password],textarea').val('').change();
  }
  ,formCheck: function( d ){

    var dfs = d.find(this.formSelector);

    for( i=0; i < dfs.length; i++ ){

      var ds = $(dfs[i])
        , dg = ds.parents('.form-group')
        , vn = ds.attr('name')
        , va = ds.attr('required')
        , v = ds.val();

      if( dg.length && va != undefined ){

        var ve = 'обязательная форма'
          , b = 0;

        if( v != '' && vn == 'phone' && v.replace( /[^\d]/g ,'' ).length != 11 ){
          ve = 'некорректный телефон';
          b = 1;
        }
        if( v == '' ) b = 1;

        if( !b ) break;

        dg.addClass('has-error');
        dg.append('<div class="error-log">'+ve+'</div>');
      }
    }
  }
  ,formClass: function(){
    $('input[type=text],textarea,select').change(function(){

      var $d = $(this);

      if( $d.val() != '' ) $d.addClass('notempty');
      else $d.removeClass('notempty');
    }).change();
  }

  // query
  ,query: function( url ,prm ){

    prm = prm != undefined ? prm : {};

    Object.assign( prm ,{
      url: url
      ,dataType: 'JSON'
    } );

    if( prm.method == undefined )
      prm.method = 'POST';

    this.queryLast = prm;
    $.ajax(prm);
  }
  ,queryLast: {}
  ,submit: function(event){
    event.preventDefault();

    var self = this
      , df = $(event.target)
      , url = df.attr('action')
      , data = {};

    self.form = df;

    this.formClear( df );
    this.formCheck( df );
    if( df.find('.has-error').length ) return 0;

    data = this.formData(df);

    this.query( url ,{
      data: data
      ,success: function(r){
        app.formClear( df ,true );

        if( self.submitSuccess[url] != undefined ) {
          self.submitSuccess[url](r);
          return 0;
        }

        if( window.swal ) {
          swal('Спасибо', 'Ваш запрос прошел успешно!', 'success');
          self.submitSuccess._after(r);
        }
      }
      ,error: function(r) {
        app.formClear( df ,true );

        if( self.submitError[action] != undefined ) {
          self.submitError[url](r);
          return 0;
        }
        
        if( window.swal )
          swal('Ошибка', 'Что то пошло не так...', 'error');
      }
    });
  }
  ,submitSuccess: {
    _after: function() {
      app.modalHide('.modal-wrapper');
    }
  }
  ,submitError: {
  }

  // plugin
  ,pluginInit: function(){
    $('[plugin]').each(function(){

      var d = $(this)
        , vn = d.attr('plugin');

      if( app.pluginList[vn] != undefined )
        app.pluginList[vn]( d );
    });
  }
  ,pluginList: {
    maskPhone: function( d ){

      // d.mask('+7 (999) 999-99-99');

      d[0].addEventListener('focus', function( e ) {
        if( e.target.value == '' )
          e.target.value = '+7 (___) __-__-__';
      });

      d[0].addEventListener('blur', function( e ) {
        if( e.target.value == '+7 (___) __-__-__' )
          e.target.value = '';
      });

      d[0].addEventListener('input', function( e ) {

        var x = e.target.value.replace( /\+7\s/ ,'' ).replace(/\D/g, '').replace(/^7{,1}/ ,'').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
          , v = !x[1] ? '+7 (___) __-__-__' : '+7 ';

        v += x[1] ? '(' + x[1] : '';
        v += x[2] ? ') '+x[2] : '';
        v += x[3] ? '-'+x[3] : '';
        v += x[4] ? '-'+x[4] : '';

        e.target.value = v;
      });
    }
  }

  // tab
  ,switchTab: function(event){
    event.preventDefault();

    var target = $(event.target),
      key = target.attr('href'),
      keyTarget = target.attr('data-target');

    $(keyTarget).hide();
    $(keyTarget+key).show();
  }

  // modal
  ,modalShow: function(event){
    if( event.preventDefault !== undefined ) {
      event.preventDefault();
    }
    
    var selector = (event.currentTarget && event.currentTarget.getAttribute('data-target')) || event;
    var modal = $(selector);

    modal.css({ display: 'flex' }).animate({ opacity: 1 }, 300);
    $(document.body).addClass('modal--active');
  }
  ,modalHide: function(event){
    if( event.preventDefault ) {
      event.preventDefault();
    }

    var selector = (event.currentTarget && event.currentTarget.getAttribute('data-target')) || event;
    var modal = $(selector);

    modal.animate({ opacity: 0 }, 300,
      function(){
        modal.hide()
        $(document.body).removeClass('modal--active');
      }
    );
  }

  // place
  ,placeInit: function() {
    if( !places || !places.length ) return;
    
    let place = +localStorage.getItem('place');
    if( !place ) {
      this.modalShow('#modalSelectCity');
    } else {
      this.placeSelect(place);
    }

    const container = $('#select-city__container');
    for( var i=0; i < places.length; i++ ) {
      let item = places[i];
      container.append('<li><button onClick="app.placeSelect('+item.MIGX_id+')">'+item.city+'</button></li>');
    }
  }
  ,placeSelect: function(id) {
    localStorage.setItem('place', id);
    this.placeInsert(id);

    this.modalHide('#modalSelectCity');
    
    // header > address > hide dropdown
    let dropdown = $('.header__address-dropdown');
    console.log(dropdown)
    if( dropdown.length ) {
      dropdown.removeAttr('style');

      let class_name = 'w--open';
      let dropdown_open = dropdown.find(`.${ class_name }`);
      if( dropdown_open.length ) {
        dropdown_open.removeClass(class_name);
      }
    }
  }
  ,placeInsert: function(id) {
    let item = places.find(v => +v.MIGX_id === +id);

    [ 'phone', 'address', 'map' ].forEach(key => {
      let value = item[key];
      
      let el = $(`.place--${ key }`);
      if( el.length ) {
        el.html(value);

        if( key === 'phone' ) {
          el.attr('href', '+'+value.replace(/\D/g, '').replace(/^8{1}/, 7));
        }
      }

      let el_src = $(`.place--${ key }-src`);
      if( el_src.length ) {
        el_src.attr('src', value);
      }
    });
  }
};
app.init();