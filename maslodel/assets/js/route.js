var appNg = angular.module('app' ,[ 'ngSanitize' ,'ngRoute' ,'ngTouch' ]);

// route config
appNg.config([
  '$routeProvider','$locationProvider'
  ,function($routeProvider, $locationProvider){

  $locationProvider.html5Mode({
    enabled: true
    ,requireBase: false
  });

  if( !window.templates )
    window.templates = {};

  // select template
  $routeProvider
    .when( '/' ,{ templateUrl: '/views/home.html?'+( templates.home ? templates.home : 0 ) })

    // single pages
    .when( '/aboutus.html' ,{ templateUrl: '/views/aboutus.html?'+( templates.aboutus ? templates.aboutus : 0 ) })
    .when( '/partners' ,{ templateUrl: '/views/partners.html?'+( templates.aboutus ? templates.aboutus : 0 ) })
    .when( '/contacts.html' ,{ templateUrl: '/views/contacts.html?'+( templates.contacts ? templates.contacts : 0 ) })

    // catalog & products
    .when( '/catalog/:catalog' ,{ templateUrl: '/views/catalog.html?'+( templates.catalog ? templates.catalog : 0 ) })
    .when( '/catalog/:catalog/:category' ,{ templateUrl: '/views/catalog_category.html?'+( templates.catalog_category ? templates.catalog_category : 0 ) })
    .when( '/catalog/:catalog/:category/:item' ,{ templateUrl: '/views/catalog_item.html?'+( templates.catalog_item ? templates.catalog_item : 0 ) })

    // news
    .when( '/news' ,{ templateUrl: '/views/news.html?'+( templates.articles ? templates.articles : 0 ) })
    .when( '/news/:item' ,{ templateUrl: '/views/news_inner.html?'+( templates.articles ? templates.articles : 0 ) })

    // articles
    .when( '/articles' ,{ templateUrl: '/views/articles.html?'+( templates.articles ? templates.articles : 0 ) })
    .when( '/articles/:item' ,{ templateUrl: '/views/articles_inner.html?'+( templates.articles_inner ? templates.articles_inner : 0 ) })

    // shares
    .when( '/shares' ,{ templateUrl: '/views/shares.html?'+( templates.shares ? templates.shares : 0 ) })
    .when( '/shares/:item' ,{ templateUrl: '/views/shares_inner.html?'+( templates.shares_inner ? templates.shares_inner : 0 ) })

    // recipes
    .when( '/recipes' ,{ templateUrl: '/views/recipes.html?'+( templates.recipes ? templates.recipes : 0 ) })
    .when( '/recipes/:item' ,{ templateUrl: '/views/recipes_inner.html?'+( templates.recipes_inner ? templates.recipes_inner : 0 ) })
    .otherwise({ templateUrl: '/views/404.html' });
}]);

// filters
{

  // ng-repeat | range
  appNg.filter('range' ,function(){
    return function(input, total){
      total = parseInt(total);
      for( var i=0; i<total; i++ ) input.push(i);
      return input;
    };
  });

  // cut text
  appNg.filter('cut' ,function(){
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
  appNg.filter('setPhone', function(){
    return function( v ) {
      if( !v ) return '';
      r = v.replace(/\(|\)|\s|\-/g ,'');
      return r;
    };
  });

  // pluginInit
  appNg.directive( 'pluginInit' ,function(){
    return function( scope ,el ,atr ){

      // list
      switch( atr.pluginInit ){

        // maskPhone
        case 'maskPhone':

          if( $().mask == undefined ){

            console.log('plugin.mask undefined');
            break;
          }

          el.mask('+7 (999) 999-9999');
          break;
      }

      // remove attr
      el.removeAttr('plugin-init');
    };
  });

  // int
  appNg.filter('int', function(){
    return function( v ,b ){

      var r = parseInt(v);

      if( r === NaN ) r = 0;
      if( r < +v && b ) r++;
      return r;
    };
  });
}