var appNg = angular.module('app' ,[ 'ngSanitize' ,'ngRoute' ,'ngTouch' ]);

document.querySelectorAll('a[href="/"]').forEach((elm) => {
  elm.href = BASE_PATH;
});

// route config
appNg.config([
  '$routeProvider','$locationProvider'
  ,function($routeProvider, $locationProvider){

  $locationProvider.html5Mode({
    enabled: true
    ,requireBase: false
  });

    const routes = {
      '/': 'home.html',

      // single pages
      '/aboutus.html': 'aboutus.html',
      '/partners': 'partners.html',
      '/contacts.html': 'contacts.html',

      // catalog & products
      '/catalog/:catalog': 'catalog.html',
      '/catalog/:catalog/:category': 'catalog_category.html',
      '/catalog/:catalog/:category/:item': 'catalog_item.html',

      // news
      '/news': 'news.html',
      '/news/:item': 'news_inner.html',

      // articles
      '/articles': 'articles.html',
      '/articles/:item': 'articles_inner.html',

      // shares
      '/shares': 'shares.html',
      '/shares/:item': 'shares_inner.html',

      // recipes
      '/recipes': 'recipes.html',
      '/recipes/:item': 'recipes_inner.html',
    };

    for (const route in routes) {
      $routeProvider.when(route, { templateUrl: ['views', routes[route]].join('/') })
    }

  // select template
  $routeProvider
    .otherwise({ templateUrl: 'views/404.html' });
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
