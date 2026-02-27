var app = angular.module('app' ,[ 'ngSanitize' ,'ngRoute' ,'ngTouch' ])

for( k in template )
  template[k] = template[k]+'?'+templateTime;

// route config
{
  app.config([
    '$routeProvider','$locationProvider'
    ,function($routeProvider, $locationProvider){

    $locationProvider.html5Mode({
      enabled: true
      ,requireBase: false
    });

    $routeProvider.otherwise({ templateUrl: template.empty });
  }]);
}

// filters
{

  // range
  {
    app.filter('range' ,function() {
      return function(input ,len) {

        len = parseInt(len);

        for( i=0; i < len; i++ )
          input.push(i);

        return input;
      };
    });
  }

  // setPhone
  {
    app.filter('setPhone', function () {
      return function( v ) {

        if( !v ) return '';
        return v.replace(/\(|\)|\s|\-/g ,'');
      };
    });
  }

  // indexOf
  {
    app.filter('indexOf', function () {
      return function( v ,k ) {

        if( !v ) return '';
        return v.indexOf(k);
      };
    });
  }

  // length
  {
    app.filter('length', function () {
      return function( vs ) {

        var r = 0;

        if( vs )
          for( k in vs )
            r++;

        return r;
      };
    });
  }

  // seperate
  {
    app.filter('seperate', function () {
      return function( v ,k ) {

        var r = ''
          , b = false;

        if( v && k )
          for( i=0; i < v.length; i++ ){

            var vv = v[i];

            if( ['<' ,'>'].indexOf(vv) != -1 || b ) r += vv;

            if( vv == '<' ){ b = true; continue; }
            if( vv == '>' ){ b = false; continue; }
            if( b ) continue;

            r += '<'+k+'>'+vv+'</'+k+'>';
          }

        return sr.trust.html(r);
      };
    });
  }
}

// attr
{

  // plugin-init
  {
    app.directive( 'pluginInit' ,function(){
      return function( scope ,el ,atr ) {

        // list
        switch( atr.pluginInit ){

          // maskPhone
          case 'maskPhone':

            if( $().mask == undefined ){

              console.log('plugin.mask undefined');
              break;
            }

            el.mask('+7 (999) 999 99 99');
            break;

          // map
          case 'map':

            if( google == undefined ) break;

            var map = new google.maps.Map( el[0] ,{

                zoom: 16
                ,center: new google.maps.LatLng(43.228293, 76.899614)

                ,scrollwheel: false

                ,styles: [ { "featureType": "all", "elementType": "geometry.fill", "stylers": [ { "weight": "2.00" } ] }, { "featureType": "all", "elementType": "geometry.stroke", "stylers": [ { "color": "#9c9c9c" } ] }, { "featureType": "all", "elementType": "labels.text", "stylers": [ { "visibility": "on" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#f2f2f2" } ] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 } ] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [ { "color": "#eeeeee" } ] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "color": "#7b7b7b" } ] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#46bcec" }, { "visibility": "on" } ] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#c8d7d4" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#070707" } ] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [ { "color": "#ffffff" } ] } ]
              })
              , marker = new google.maps.Marker({
                  position: new google.maps.LatLng(43.228225, 76.898933)
                  ,map: map
                  ,title: sc.site.address
                  ,icon: {
                      url: 'assets/img/contacts/marker.png'
                      ,size: new google.maps.Size(26,33)
                      ,origin: new google.maps.Point(0,0)
                      ,anchor: new google.maps.Point(0,33)
                    }
                });

            //FIRST POLYLINE SNAP TO ROAD
            var mapPolyline = [
                new google.maps.LatLng( 43.225158, 76.896360 )
                ,new google.maps.LatLng( 43.225486, 76.899976 )
                ,new google.maps.LatLng( 43.228293, 76.899614 )
                ,new google.maps.LatLng( 43.228293, 76.899614 )
            ];

            var mapTraceChileTrip = new google.maps.Polyline({
                path: mapPolyline,
                strokeColor: '#ffed00',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            var service1 = new google.maps.DirectionsService()
              , mapTraceChileTrip
              , snap_path1 = [];

            mapTraceChileTrip.setMap(map);

            for( i=0; i < mapPolyline.length-1; i++ )
              service1.route(
                {
                  origin: mapPolyline[i]
                  ,destination: mapPolyline[i+1]
                  ,travelMode: google.maps.DirectionsTravelMode.DRIVING
                }
                ,function(result, status) {
                  if( status == google.maps.DirectionsStatus.OK ){
                      snap_path1 = snap_path1.concat(result.routes[0].overview_path);
                      mapTraceChileTrip.setPath(snap_path1);
                  } else
                    alert("Directions request failed: "+status);
                }
              );
        }
      };
    });
  }
}

// controllers
{

  // body
  app.controller('bodyCtrl'
    ,['$scope','$http','$sce','$routeParams','$location'
    ,function($scope,$http,$sce,$routeParams,$location){

    // base vars
    {

      var sc = $scope
        , sr = sc.$root;

      window.sc = sc;
      window.sr = sr;

      sc.template = template;
    }

    sr.log = function(v){ console.log(v); }

    // device
    sr.device = navigator.userAgent.replace(/\)|\(/g ,'').split(' ');

    // apply
    sc.apply = function(fn){
      setTimeout(function(){
        sc.$apply(function(){ fn() });
      } ,70);
    }

    // $root vars
    {

      sr.editContent = function( e ){

        // if e is resource
        {
          if( e.pagetitle != undefined ){

            var v = e;

            // replace [] to <span></span>
            {

              var keys = ['pagetitle' ,'longtitle' ,'introtext' ,'description'];

              for( k2 in keys ){

                var k3 = keys[k2]
                  , vv = v[k3];

                if( vv == undefined || typeof(vv) != 'string' || vv.indexOf('[') == -1 ) continue;

                while( vv.indexOf('[') != -1 ){
                  vv = vv.replace('[' ,'<span>');
                  vv = vv.replace(']' ,'</span>');
                }

                v[k3+'Base'] = vv;
                v[k3] = $sce.trustAsHtml(vv);
              }
            }

            // convert to trust html
            if( v.content != undefined && typeof(v.content) == 'string' )
              v.content = $sce.trustAsHtml( v.content );

            // childs
            {
              if( v.childs != undefined && v.childs.length )
                for( kk in v.childs )
                  v.childs[kk] = $scope.editContent( v.childs[kk] );
            }

            // index to /
            {
              if( v.id == 1 )
                v.uri = '/';
            }

            return v;
          }
        }

        // if e is array
        if( typeof(e) == 'array' )
          for( k in e )
            e[k] = this.editContent( e[k] );

        return e;
      }

      sr.scrollTo = function( k ){

        var t = typeof(k) == 'string' ? $( k.replace( /^\/|\/$/g ,'' ) ) : []
          , v = +k >= 0 ? +k : 0;

        if( t.length )
          var v = t.offset().top;

        $('html,body').animate({ scrollTop: v } ,500);
      }
    }

    // change page
    {

      sr.changePage = function(){
        setTimeout(function(){

          sr.animate.start();

          sr.pagec.get();
          sc.apply(function(){
            sr.nav = false;
          });
        } ,300);
      }

      sc.$on('$routeChangeStart', function(){ sr.changePage(); });
    }

    // site
    $http.get('json/site.json').success(function(data){

      // update values
      data.childs = sr.editContent(data.childs);
      sc.site = data;
      sr.loading = false;

      // pages
      {

        var vs = {};

        for( i=0; i < data.childs.length; i++ ){

          var v = data.childs[i];

          vs[ v.alias ] = v;
        }

        sc.pages = vs;
      }
    });

    // trust
    sr.trust = {
      html: function( v ){ return $sce.trustAsHtml(v); }
    }

    // page
    sr.pagec = {

      get: function(){

        // uri
        {

          var v = location.pathname.replace(BASE_PATH, '').replace( /^\/|\/$/g ,'' );
          if( v == '' ) v = 'home';
        }

        sc.page = false;
        sr.loading = true;

        if( localStorage.alias != undefined )
          v = localStorage.alias;

        // if( location.host.indexOf('localhost') != -1 )
          v = 'json/'+( v.replace( /\//g ,'_' ).replace('.html' ,'') );

        $http.get(v+'.json').success(function(data){

          // update values
          data = sr.editContent(data);

          // head/title
          if( data.pagetitle != undefined )
            $('head title').html( data.pagetitle );

          sc.page = data;
          sr.loading = false;

          // id
          {

            v = data.alias;

            if( data.parent == 3 )
              v = 'project';

            sc.page.mainId = v;
          }

          // template
          {

            v = data.alias;

            switch( data.parent ){

              case 3: v = 'portfolio_more'; break;
            }
          }

          sc.page.template = v;
          setTimeout(function(){ scrollFn(); } ,300);
        });
      }
    }

    // slider
    sr.slider = {

      // init
      init: function( v ,e ){

        if( !v ) return;

        var key = v.key != undefined ? v.key : false
          , iil = v.items.length
          , il = v.limit
          , imax = v.max ? v.max : 1;

        // limit
        {
          if( il ){

            il /= iil;
            var i = parseInt(il);

            il = il > i ? i+1 : i;
            il++;
          } else il = iil;
        }

        // insert
        {
          this[key] = {

            items   : v.items
            ,cout   : iil
            ,limit  : il
            ,unlim  : v.unlim
            ,to     : 'next'
          };
        }

        // set active
        {

          var is = this[key].items;

          if( is.length )
            for( i=0; i < imax; i++ )
              is[i].active = true;

          is[ is.length-1 ].activep = true;
          is[ is.length > 1 ? imax : 0 ].activen = true;
        }
      }

      // slide
      ,slide: function( k ,side ){

        // get value
        {

          var t = this[k]
            , tis = t.items
            , ip = 0;

          for( i=0; i < tis.length; i++ ){

            if( tis[i].activep != undefined )
              delete tis[i].activep;
            if( tis[i].activen != undefined )
              delete tis[i].activen;

            if( tis[i].active ){

              ip = i;
              delete tis[i].active;
            }
          }
        }

        // get pos
        {
          switch( side ){
            case 'next': ip = tis[ip+1] ? ip+1 : 0; break;
            case 'prev': ip = tis[ip-1] ? ip-1 : tis.length-1; break;
            default:

              if( +side == NaN ) return;
              else ip = +side;
          }
        }

        // set value
        {

          t.side = side;
          tis[ip].active = true;

          var il = tis.length-1;

          tis[ ip > 0 ? ip-1 : il ].activep = true;
          tis[ ip < il ? ip++ : 0 ].activen = true;
        }
      }
      ,next: function(k){

        this.slide( k ,'next' );
      }
      ,prev: function(k){

        this.slide( k ,'prev' );
      }

      ,pos: function(k){ return this.list[k].pos; }
      ,posb: function(k){ return this.list[k].posb; }
      ,to: function(k){ return this.list[k].to; }

      ,getClass: function( k ,ip ){

        var r = ''
          , ts = this.list[k];

        if( ts.pos != ip ) return r;

        // return ts.to == 'next' ? 'i-next' : 'i-prev';
        return 'active';
      }
    };

    // form
    sr.form = {

      form: $('form:first')
      ,log: function( m ){ sr.log('from.'+m); }

      ,query: function( action ,data ){

        var arr = data
          , data = new FormData();

        for( k in arr ) data.append( k ,arr[k] );

        $http.post( action ,data ,{
          transformRequest: angular.identity
          ,headers: { 'Content-Type': undefined }
        } )
          .success(function( res ){

            sr.form.generate( res );
          });
      }

      ,setForm: function( e ,t ){

        setTimeout(function(){

          var t = typeof(e) == 'string' ? $(e) : $(e.currentTarget).parents('form');

          sr.form.form = t;
        } ,150);

        return this;
      }
      ,sendPost: function( e ){

        var t = $(e.currentTarget);

        if( t.length == 0 ){

          this.log('sendPost: '+e+' is undefined');
          return;
        }

        var tForm = t.parents('form:first').length != 0 ? t.parents('form:first') : t
          , action = tForm.attr('action');

        if( action == undefined ){

          this.log('sendPost: action is undefined');
          return;
        }

        var tForms = tForm.find('.data-form').find('input[type=hidden],input[type=text],input[type=password],input[type=checkbox]:checked,input[type=radio]:checked,textarea,select')
          , data = [];

        for( i=0; i < tForms.length; i++ ){

          var ts = $(tForms[i]);
          data[ ts.attr('name') ] = ts.val();
        }

        this.form = tForm;
        this.query( action ,data );
      }

      ,generate: function( data ){

        if( data == undefined )
          return;

        var funcs = [];

        for( k in data ){

          if( this[k] == undefined ){

            $scope.log('fromPost: '+k+' is undefined');
            continue;
          }

          this[k]( data[k] );
        }
      }

      ,openModal: function( e ,ev ){

        var t = $(e.currentTarget)
          , tm = t.attr('data-target') != undefined ? $(t.attr('data-target')) : $('#modal-request');

        if( ( !t.length ) || !tm.length ){

          this.log('formModal: t or tm is undefined');
          return;
        }

        // get form values
        {

          var tForm = false;

          var tForm = t.parents('form:first')
            , tForms = tForm.length ? tForm.find('input,textarea,select') : false
            , tmHideForms = tm.find('.data-form-hide')
            , v = t.attr('data-type') != undefined ? t.attr('data-type') : 'Заявка на вызов';

          tm.modal('show');
          tm.find('input[type=text]').val('');
          tm.find('[name=type]').val( v );
          tmHideForms.removeClass('.data-form').hide();
        }

        this.form = tm.find('form');
        this.formClear();

        // type
        {

          var ts = tm.find('[name=type]');
          ev == undefined ? 'Заявка на звонок' : ev;
          ts.val( ev );
        }

        if( tForms ){

          // insert values
          for( i=0; i < tForms.length; i++ ){

            var ts = $(tForms[i])
              , tn = ts.attr('name')
              , tv = ts.val();

            if( tv == '' ) continue;

            tm.find('[name="'+tn+'"]').val( tv );
          }
        }

        // extra values
        var keys = t.attr('data-keys') != undefined ? t.attr('data-keys').split(',') : false

        if( keys )
          for( i in keys ){

            var k = keys[i]
              , ts = tm.find('[name="'+k+'"]');

            if( !ts.length ) continue;

            ts.parent().addClass('data-form').show();
          }
      }

      ,formClear: function( e ){

        if( this.captcha != undefined )
          this.captcha();

        var t = this.form
          , arr = t || t.length ? t.find('.data-form') : false;

        if( !arr ) return;

        for( i=0; i < arr.length; i++ ){

          var t = $(arr);

          t.removeClass('has-error');

          if( e == 'full' ){

            t.find('input[type=text],textarea').val('');
            t.find(':checked').prop('checked' ,false);
          }
        }
      }
      ,formActions: function( sFrom ,vals ){

        if( vals == undefined ){

          this.log( 'fromPost.'+sFrom+': keys is undefined' );
          return;
        }

        var t = this.form;

        if( !t || t.length == 0 ){

          this.log( 'formActions.'+sFrom+': last post is undefined' );
          return;
        }

        this.formClear();

        for( k in vals ){

          var tk = sFrom == 'formEmpty' ? vals[k] : k
            , ts = t.find(".data-form [name='"+tk+"']")
            , tp = ts.length == 1 ? ts.parents('.data-form:first') : false;

          if( !tp || !tp.length || ( sFrom == 'formEmpty' && ts.val() != '' ) ) continue;

          var tv = sFrom == 'formEmpty' ? 'обязательная форма' : vals[k];

          tp
            .addClass('has-error')
            .find('.data-log').html( tv );
        }
      }
      ,formEmpty: function( keys ){

        this.formActions( 'formEmpty' ,keys );
      }
      ,formError: function( forms ){

        this.formActions( 'formError' ,forms )
      }

      ,redirect: function( u ){ location.href = u; }
      ,message: function( e ){

        if( e == undefined ) return;

        var t = $('#modal-message');

        if( t.length ){

          sr.modal.show('modal-message');
          t.find('.message').html(e);
          return;
        }

        alert(e);
      }

      ,modalClose: function( e ){

        if( $().modal == undefined ){

          this.log( '.modalClose: modal plugin is undefined' );
          return;
        }

        var t = typeof(e) == 'string' ? e : '.modal'
          , ts = $(t);

        ts.modal('hide');
      }

      ,captcha: function( e ){

        return;

        var t = this.form;

        if( e != undefined ){

          this.captchaRes( e );
          return;
        }

        this.query( '/json/captcha' );
      }
      ,captchaRes: function( a ,e ){

        return;

        setTimeout(function(){

          var t = e != undefined ? $(e) : sr.form.form
            , tc = t.find('.captcha');

          if( tc.length == 0 ){

            sr.form.log( 'captcha: <img> is undefined' ,[ t ,tc] );
            return false;
          }

          var tci = tc.find('img')

          tci.attr( 'src' ,a.img );
          tc.find('input[type=hidden]').val( a.key );
        } ,150);
      }
    }

    // modal
    sr.modal = {

      req: function(v){

        var self = this;

        sr.afterClick(function(){

          var t = sr.lastClick;

          if( t == undefined || !t.length ) return;

          var tf = t.parents('form:first').length ? t.parents('form:first') : t
            , ts = t.attr('data-target') != undefined ? $(t.attr('data-target')) : $();

          t.find('[name=type]').val(v != undefined ? v : 'Обратный звонок');
          sr.form.form = ts.length ? ts : tf;

          self.show('modal-request');
        });
      }
      ,calc: function(){

        var self = this;

        sr.afterClick(function(){

          self.show('modal-calc');
        });
      }

      ,bactive: false
      ,active: function(k){

        if( k == undefined ) return this.bactive;

        return this.bactive == k;
      }

      ,aniamtedIn: 'fadeInDown'
      ,aniamtedOut: 'fadeOutUp'
      ,show: function(k){

        // clear form & start animate
        sc.apply(function(){

          sr.i = { animateCube: true };
        });

        var t = $('#'+k)

        if( !t.length ) return;

        var ts = t.find('.modal-content');

        if( !ts.hasClass('animated') )
          ts.addClass('animated');

        ts.removeClass(this.aniamtedOut).addClass(this.aniamtedIn);
        t.show();
        $('body').css('overflow' ,'hidden');
        t.find('.modal-bg').animate({ opacity: .5 } ,400);
      }
      ,hide: function(){

        var t = $('.modal');

        if( !t.length ) return;

        var ts = t.find('.modal-content');

        ts.removeClass(this.aniamtedIn).addClass(this.aniamtedOut);
        t.find('.modal-bg').animate({ opacity: 0 } ,400 ,function(){

          $('body').removeAttr('style');
          t.hide();
        });
      }
    };

    // animate
    sr.animate = {

      start: function(){

        if( AdobeEdge == undefined ) return

        var self = this;

        for( i=0; i < self.items.length; i++ )
          $('.'+self.items[i].key).removeClass('active');

        setTimeout(function(){
          for( i=0; i < self.items.length; i++ ){

            var v = self.items[i];

            if( sc.page.id == v.id )
              self.play(v.key);
          }
        } ,300 ,self);
      }
      ,play: function( v ){

        var t = AdobeEdge.getComposition(v);

        if( AdobeEdge == undefined || t == undefined || t.getStage == undefined )
          return;

        var ts = t.getStage();

        if( ts == undefined || ts.play == undefined ) return;

        $('.'+v).removeClass('active');

        var t = {
          sel: ts
          ,key: v
        };

        setTimeout(function(){
          $('.'+t.key).addClass('active');
          t.sel.play(0);
        } ,300 ,t);
      }

      ,items: []

      ,init: function( key ,k ,id ){

        if( AdobeEdge == undefined ) return;

        this.items.push({
          id: id
          ,key: key
        });

        var t = {
          fn: this
          ,k: k
          ,key: key
        };

        setTimeout(function(){
          t.fn[ t.k ]( t.key );
        } ,1000 ,t);
      }
      ,initAfter: function( k ,id ){

        if( sc.page == undefined || (id != undefined && sc.page.id != id) )
          return;

        $('.'+k).addClass('active');
      }
      ,sneaks: function( k ){

        AdobeEdge.loadComposition('assets/js/izum/sneaks' ,k ,{ scaleToFit: "width", centerStage: "horizontal", minW: "0px", maxW: "undefined", width: "550px", height: "400px" }, {dom: [ ]}, { dom: [ ], style: { '${symbolSelector}': { isStage: true, rect: [undefined, undefined, '550px', '400px'], fill: ["rgba(255,255,255,1)"] } } });

        this.initAfter( k ,1 );

        setInterval(function(){
          if( sc.page.id == 1 )
            sr.animate.play(k);
        } ,60000 ,k);
      }
      ,scared: function( k ){

        AdobeEdge.loadComposition( 'assets/js/izum/scared' ,k ,{ scaleToFit: 'none' ,centerStage: 'horizontal' ,minW: '0px' ,maxW: "undefined", width: "550px", height: "400px" }, {dom: [ ]}, { dom: [ ], style: { '${symbolSelector}': { isStage: true, rect: [undefined, undefined, '550px', '400px'], fill: ["rgba(255,255,255,1)"] } } });

        if( sc.page == undefined || sc.page.id == 2 )
          this.initAfter(k);
      }
      ,jump: function( k ){

        AdobeEdge.loadComposition('assets/js/izum/jump' ,k ,{ scaleToFit: "width", centerStage: "horizontal", minW: "0px", maxW: "undefined", width: "550px", height: "400px" }, {dom: [ ]}, {dom: [ ]});

        this.initAfter(k ,3);

        setInterval(function(){
          if( sc.page.id == 3 )
            sr.animate.play(k);
        } ,60000 ,k);
      }
      ,parachute: function( k ){

        var t = {
          self: this
          ,k: k
        };

        setTimeout(function(){

          if( sc.page.id == undefined || sc.page.id != 3 ) return;

          AdobeEdge.loadComposition('assets/js/izum/parachute' ,t.k ,{ scaleToFit: "none", centerStage: "horizontal", minW: "0px", maxW: "undefined", width: "550px", height: "400px" }, {dom: [ ]}, { dom: [ ], style: { '${symbolSelector}': { isStage: true, rect: [undefined, undefined, '550px', '400px'] } } });

          t.self.initAfter( t.k ,3 );

          var k = t.k;

          setInterval(function(){
            if( sc.page.id == 3 )
              sr.animate.play(k);
          } ,60000 ,k);
        } ,8000 ,t);
      }
      ,walk: function( k ){

        AdobeEdge.loadComposition('assets/js/izum/walk' ,k ,{ scaleToFit: "none", centerStage: "both", minW: "0px", maxW: "undefined", width: "550px", height: "400px" }, {dom: [ ]}, { dom: [ ], style: { '${symbolSelector}': { isStage: true, rect: [undefined, undefined, '550px', '400px'] } } });

        this.initAfter(k ,4);

        setInterval(function(){
          if( sc.page.id == 4 )
            sr.animate.play(k);
        } ,60000 ,k);
      }

      ,homePaper: function(){

        var t = {
          self: this
          ,items: sc.page.childs[0].images
        };

        setTimeout(function(){
          t.self.homePaperSlide( t.items ,0 );
        } ,300 ,t);
      }
      ,homePaperSlide: function( is ,i ){

        var t = {
          imgs: is
          ,pos: i
          ,self: this
        };

        setTimeout(function(){

          if( is[i+1] != undefined ){

            sc.apply(function(){
              sc.page.childs[0].imagePos = i;
            });
            t.self.homePaperSlide( is ,i+1 );
          }
        } ,70 ,t);
      }
    }

    // after click
    sr.afterClick = function(fn){
      setTimeout(function(){ fn() } ,50);
    }
  }]);

  // partners
  app.controller('partnersCtrl',['$scope',function($scope){

    $scope.prtns = {

      init: function( vs ,v ){

        var vv = [];

        for( i=0; i < vs.length; i++ )
          vv[i] = vs[i];

        v.items = vv;

        this.items.push(v);
      }
      ,items: []

      ,scroll: function(){

        var self = this;

        $scope.$apply(function(){
          for( i=0; i < self.items.length; i++ ){

            var t = self.items[i]
              , ipos = t.pos
              , imax = t.max
              , tis = t.items
              , n = 0;

            // active
            for( j=0; j < tis.length; j++ ){

              var ti = tis[j];

              delete ti.hide;

              if( ti.active != undefined )
                delete ti.active;

              if( j >= ipos*imax && j < (ipos*imax)+imax ){
                n++;
                ti.active = n;
              }
            }

            // pos
            {
              ipos = (ipos+1)*imax < tis.length ? ipos+1 : 0;
              t.pos = ipos;
            }
          }
        });
      }
    };

    setInterval(function(){ $scope.prtns.scroll(); } ,4500 ,$scope);
    setTimeout(function(){ $scope.prtns.scroll(); } ,500 ,$scope);
  }]);
}

// body click
$('body').click(function(e){

  if( sc != undefined )
    sr.lastClick = $(e.target);
});

// scroll
{

  window.scrollFn = function(){

    var w = window.innerWidth
      , h = window.innerHeight
      , y = window.scrollY;

    // header
    {

      var t = $('header.i-home');

      if( t.length ){

        if( y > h*3 && !t.hasClass('active') ) t.addClass('active');
        if( y < h && t.hasClass('active') ) t.removeClass('active');
      }
    }

    // footer
    {

      var t = $('footer');

      if( t.length ){

        if( y > $('body').height() - (h*1.1) ) t.addClass('active');
        else t.removeClass('active');
      }
    }

    // navUp
    {

      var t = $('.navUp');

      if( y > h ) t.addClass('active');
      else  t.removeClass('active');
    }

    // home paper
    {

      var t = $('#home .i-paper');

      if( t.length ){

        if( w > 992 ){

          var is = sc.page.childs[0].images
            , iph = t.height()
            , tis = t.find('div');

          if( y < h*2 ){

            t.css({ position: 'fixed' ,top: 0 });
            $('#home .i-text').css({ position: 'fixed' ,top: 0 });

            tis.hide();

            for( i=parseInt( (tis.length/100) * (y / (iph*2.6/100)) ); i >= 0; i-- )
              if( tis[i] != undefined ){
                $(tis[i]).show();
                break;
              }
          } else{

            t.css({ position: 'absolute' ,top: h*2 });
            $('#home .i-text').css({ position: 'absolute' ,top: h*2 });
          }

        } else
          t.removeAttr('style');
      }
    }

    // active-scroll
    {

      var y = y + ( h * 0.9 )
        , sel = 'active-scroll'
        , tis = $('['+sel+']');

      for( i=0; i < tis.length; i++ ){

        var ts = $(tis[i])
          , ty = ts.offset().top;

        if( ts.attr(sel) == 'true' )
          continue;

        if( y > ty && !ts.hasClass('active') ){

          ts.attr(sel ,'true').addClass('active');
          ts.attr(sel ,'false')
        }

        if( y < ty && ts.hasClass('active') ){
          ts.attr(sel ,'false').removeClass('active');
        }
      }
    }
  }

  $(window).scroll(function(){ scrollFn(); });
}
