var myApp =
	angular
		.module('myApp', ['ngSanitize' ,'ngTouch'])
		.directive('ngRepeat', function(){
			return function( scope ,element ,attrs ){
				// if( scope.$last )
				// 	app.body.change()
			};
		})
	;


myApp.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});