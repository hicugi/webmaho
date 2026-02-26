// body
appNg.controller('bodyCtrl' ,['$scope','$http','$sce','$routeParams' ,'$location' ,function($scope,$http,$sce,$routeParams,$location){

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

    sr.nav = false;

    // apply
    sr.apply = function( fn ,t ){
      setTimeout(function(){
        sr.$apply(function(){ fn() });
      } ,t?t:100);
    }

    // trust src
    sr.trust = {
      get: function(v){ return $sce.trustAsResourceUrl(v); }
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

    // scroll to
    sr.scrollTo = function( k ,v ){

      var np = 0;

      if( v ) v = +v >= 0 ? +v : $(v).offset().top;

      $(k).animate({ scrollTop: np } ,300);
    }

    // location
    sr.location = {

      host: location.hostname
      ,path: ''

      ,to: function( u ){ $location.url(u); }
    };

    sr.arrLen = function( n ){

      var r = [];

      for( i=0; i < n; i++ )
        r.push( i );

      return r;
    };
  }

  // query
  sr.query = function( url ,prm ){

    url = url.replace( /^\/|\/$/ ,'' );
    prm = prm != undefined ? prm : {};

    if( location.hostname == 'localhost' )
      url = 'http://maslodel.localhost/'+url;

    if( prm.method == undefined )
      prm.method = 'POST';

    prm.url = url;
    prm.dataType = 'JSON';

    // headers
    {

      if( !prm.headers ) prm.headers = {};

      prm.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    this.queryLast = prm;
    return $http( prm );
  }

  // change page
  {

    sc.changePage = {

      nav: function(){
        sr.apply(function(){ sc.nav = false; });
      }

      ,location: function(){
        sr.apply(function(){
          var v = location;
          sr.location.path = v.pathname.replace( /^\/|\/$/g ,'' );
        });
      }

      ,scroll: function(){
        sr.scrollTo('html,body' ,0);
      }
    };

    sc.$on('$routeChangeStart', function(){
      for( k in sc.changePage )
        sc.changePage[k]();
    });
  }

  // get phone
  sr.getPhone = function( v ){
    return '+7'+v.replace( /^\+{0,1}[0-9]{1}|\s|\(|\)|\-/g ,'' );
  }
  sr.getPhones = function( v ){

    var vs = v.split("\n")
      , r = [];

    for( i=0; i < vs.length; i++ ){
      var v = vs[i];
      r.push('<a href="tel:'+this.getPhone(v)+'">'+v+'</a>');
    }

    return r.join("\n");
  }
  sr.map = {

    list: {}
    ,google: 0

    ,get: function( k ,k2 ){

      if( location.hostname == 'localhost' )
        return 0;

      $('.map iframe').attr('src' ,'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.8725529711505!2d76.83801471577165!3d43.25409278616386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369f7287e6d9b%3A0x389c1827fd6d38bf!2sRyskulov+Ave+276%2C+Almaty!5e0!3m2!1sen!2skz!4v1520303015713');
      return 0;

      var self = this;

      if( !this.google ){
        $('body').append('<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBiF2BQwQ65szvY-hxRwLZ33utfzRoFZmI"></script>');
        this.google = 1;
      }

      setTimeout(function(){

        var d = $(k)
          , v = app.page[k2];

        if( !v || !d.length || !window.google ){
          sr.map.get( k ,k2 );
          return 0;
        }

        if( self.list[k] ) return 0;
        self.list[k] = true;

        var v = JSON.parse(v)
          , map = new google.maps.Map( d[0] ,{
              zoom: 16
              ,center: new google.maps.LatLng( v[0], v[1] )
              ,scrollwheel: false
            })
          , marker = {};

        if( !v[2] ) return 0;

        var vs = v[2];

        for( i=0; i < vs.length; i++ ){

          var vm = vs[i];

          marker[i] = new google.maps.Marker({
            position: new google.maps.LatLng(vm[1], vm[2])
            ,map: map
            ,title: vm[0]
            ,icon: {
              url: 'assets/css/imgs/ico-location.png'
              ,size: new google.maps.Size(32,48)
              ,origin: new google.maps.Point(0,0)
              ,anchor: new google.maps.Point(0,33)
            }
          });
        }
      } ,1000);
    }
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
        if( np < 0 ) np = v.length-1;
      }

      v.ix = np;
    }

    ,getClass: function( k ,ix ){

      var v = this[k]
        , n = v.ix;

      for( i=0; i < v.length*2; i++ ){
        if( i <= ix ) continue;
        if( n > v.length-2 ) n = -1;
        n++;
      }

      return n;
    }

    ,modal: function( vs ){

      this.modalImages = [];
      var its = this.modalImages;

      for( i=0; i < vs.length; i++ ){

        var v = vs[i]
          , rv = {};

        for( k in v )
          if( k.match(/^[a-z]/) )
            rv[k] = v[k];

        its.push(rv);
      }

      this.init({ key: 'modalSlider' ,items: its });
      $('#modal-slider').modal('show');
    }
  };

  // modal
  sr.modal = {

    show: function( k ){
      return $('#modal-'+k).modal('show');
    }
    ,hide: function( k ){
      $(( k ? k : '.modal' )+'.show').modal('hide');
    }

    ,callback: function(v){

      var d = this.show('callback');

      if( !v ) return 0;

      d.find('[name=title]').val(v);
    }
  }

  // base
  sr.base = {

    init: function(){
      this.getVars();
    }

    ,getVars: function(){

      var self = this;

      sr.query( 'j/base' ,{ method: 'JSON' } ).then(function(r){

        if( !r.data ) return 0;

        var vr = r.data;

        for( k in vr )
          self[k] = vr[k];
      });
    }
  };
  sr.base.init();

  // page
  {

    sr.page = {}
    sr.pageLoading = 1;

    sr.pageGet = function(){

      var v = location.search.replace( /^\?/ ,'' );

      sr.page = {};
      sr.pageLoading = 1;

      sr.query(
        'j/page'+location.pathname
        ,{
          method: 'JSON'
          ,data: v
        }).then(function(r){

        r = r.data;

        sr.page = r;
        sr.pageLoading = 0;

        $('head title').html( r.title ? r.title : 'Maslodel' );
      });
    };

    sc.changePage.getPage = function(){
      sr.pageGet();
    }
  }

  sr.pluginInit = function(){
    setTimeout(function(){
      hg.pluginInit();
    } ,300);
  }
}]);
