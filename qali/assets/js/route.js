var ngApp = angular.module('app' ,[ 'ngSanitize' ,'ngRoute' ,'ngTouch' ]);

// route config
ngApp.config([
  '$routeProvider','$locationProvider'
  ,function($routeProvider, $locationProvider){

  $locationProvider.html5Mode({
    enabled: true
    ,requireBase: false
  });

  var t = window.templates ? window.templates : {};

  function ftemplate( k ){
    var r = BASE_PATH + '/assets/views/'+k+'.html';
    if( t[k] ) r += '?'+t[k];
    return r;
  }

  // select template
  $routeProvider

    // home
    .when( '/' ,{ templateUrl: ftemplate('home')  } )

    // projects
    .when( '/projects' ,{ templateUrl: ftemplate('projects')  } )
    .when( '/projects/:category' ,{ templateUrl: ftemplate('projects')  } )
    .when( '/projects/:category/:project' ,{ templateUrl: ftemplate('projects_item')  } )

    // blog
    .when( '/blog' ,{ templateUrl: ftemplate('blog')  } )
    .when( '/blog/:article' ,{ templateUrl: ftemplate('blog_item')  } )
    .when( '/aboutus.html' ,{ templateUrl: ftemplate('blog_item')  } )
    .when( '/courses' ,{ templateUrl: ftemplate('blog')  } )
    .when( '/courses/:article' ,{ templateUrl: ftemplate('blog_item')  } )

    // services
    .when( '/services' ,{ templateUrl: ftemplate('services')  } )
    .when( '/services/:item' ,{ templateUrl: ftemplate('services_item')  } )

    // shop
    .when( '/shop' ,{ templateUrl: ftemplate('shop')  } )
    .when( '/shop/:category' ,{ templateUrl: ftemplate('shop')  } )
    .when( '/shop/:category/:item' ,{ templateUrl: ftemplate('shop_item')  } )

    // cart
    .when( '/cart' ,{ templateUrl: ftemplate('cart')  } )

    .when( '/contacts.html' ,{ templateUrl: ftemplate('contacts')  } )

    .otherwise({ templateUrl: ftemplate(404) });
}]);

// filters
{

  // ng-repeat | range
  ngApp.filter('range' ,function(){
    return function(input, total){
      total = parseInt(total);
      for( var i=0; i<total; i++ ) input.push(i);
      return input;
    };
  });

  // cut text
  ngApp.filter('cut' ,function(){
    return function( value ,max ,wordwise ,tail ){

      if( !value ) return '';

      max = parseInt( max ,10 );
      if( !max || value.length <= max ) return value;

      value = value.substr(0, max);

      if( wordwise ){

        var lastspace = value.lastIndexOf(' ');

        if( lastspace != -1 ){

          if( value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',' )
            lastspace = lastspace - 1;

          value = value.substr(0, lastspace);
        }
      }

      return value + (tail || ' â€¦');
    };
  });

  // setPhone
  ngApp.filter('setPhone', function(){
    return function( v ) {
      if( !v ) return '';
      r = v.replace(/[\D]/g ,'').replace(/^8{1}/,7);
      return '+'+r;
    };
  });

  // length
  ngApp.filter( 'length' ,function(){
    return function(vs){

      if( typeof(vs) == 'string' ) return vs.length;

      var r = 0;
      for( k in vs ) r++;
      return r;
    };
  });

  // replace
  ngApp.filter('replace' ,function(){
    return function( v ,vfr ,vto ){
      return v.replace(vfr ,vto);
    };
  });

  // int
  ngApp.filter('int', function(){
    return function( v ,b ){

      var r = parseInt(v);

      if( r === NaN ) r = 0;
      if( r < +v && b ) r++;
      return r;
    };
  });

  // pluginInit
  ngApp.directive( 'plugin' ,function(){
    return function( scope ,el ,atr ){

      el = el[0];

      // list
      switch( atr.plugin ){

        // maskPhone
        case 'maskPhone':

          el.addEventListener('focus', function( e ) {
            if( e.target.value == '' )
              e.target.value = '+7 (___) __-__-__';
          });

          el.addEventListener('blur', function( e ) {
            if( e.target.value == '+7 (___) __-__-__' )
              e.target.value = '';
          });

          el.addEventListener('input', function( e ) {

            var x = e.target.value.replace( /\+7\s/ ,'' ).replace(/\D/g, '').replace(/^7{,1}/ ,'').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
              , v = !x[1] ? '+7 (___) __-__-__' : '+7 ';

            v += x[1] ? '(' + x[1] : '';
            v += x[2] ? ') '+x[2] : '';
            v += x[3] ? '-'+x[3] : '';
            v += x[4] ? '-'+x[4] : '';

            e.target.value = v;
          });
          break;
      }
    };
  });
}
