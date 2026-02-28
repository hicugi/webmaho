/*body controller*/
{
	myApp.controller('ctrlBody'
		,['$scope','$sce','$http','$compile'
		,function($scope,$sce,$http,$compile){


		// functions
		{

			$scope.log = function( e ){

				console.log(e);
			}

			$scope.bodyScroll = function( e ,e2 ){

				var t = $('html,body')
					, ts = $(e).length != 0 ? $(e).offset().top : +e;

				if( e2 != undefined )
					ts += parseInt(e2);

				t.animate({ scrollTop: ts } ,500);
			}


			$scope.lastPost = false;
			$scope.sendPost = function( e ){

				var t = $(e);

				if( t.length == 0 ){

					$scope.log('sendPost: '+e+' is undefined');
					return;
				}

				var tForm = t.find('form[action]').length != 0 ? t.find('form[action]:first') : t
					, sAction = tForm.attr('action');

				if( sAction == undefined ){

					$scope.log('sendPost: action is undefined');
					return;
				}

				var tForms = tForm.find('[data-form]').find('input[type=hidden],input[type=text],input[type=password],input[type=checkbox]:checked,input[type=radio]:checked,textarea,select')
					, data = [ {} ];

				for( i=0; i < tForms.length; i++ ){

					var ts = $(tForms[i]);
					data[0][ ts.attr('name') ] = ts.val();
				}

				$scope.lastPost = tForm;
				$http.post( sAction ,data )
					.success(function( res ){

						$scope.fromPost.generate( res );
					});
			}

			$scope.fromPost = {

				log: function( e ){

					$scope.log('fromPost.'+e);
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

				,formClear: function( e ){

					var t = $scope.lastPost
						, arr = t || t.length ? t.find('[data-form]') : false;

					if( !arr ) return;

					for( i=0; i < arr.length; i++ ){

						var t = $(arr);

						t
							.removeClass('has-error')
							.find('.data-log').html('');


						if( e == 'full' ){

							t.find('input[type=text],textarea').val('');
							t.find(':checked').prop('checked' ,false);
						}
					}
				}
				,formActions: function( sFrom ,vals ){

					if( vals == undefined ){

						$scope.log( 'fromPost.'+sFrom+': keys is undefined' );
						return;
					}


					var t = $scope.lastPost;

					if( !t || t.length == 0 ){

						$scope.log( 'fromPost.'+sFrom+': last post is undefined' );
						return;
					}


					this.formClear();

					for( k in vals ){

						var tk = sFrom == 'formEmpty' ? vals[k] : k
							, ts = t.find("[data-form] [name='"+tk+"']")
							, tp = ts.length == 1 ? ts.parents('[data-form]:first') : false;

						if( !tp || !tp.length || ( sFrom == 'formEmpty' && ts.val() != '' ) ) continue;

						var tv = sFrom == 'formEmpty' ? 'форма не заполнена' : vals[k];

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

				,message: function( e ){

					if( e == undefined ){

						this.log( '.message: str is undefined' );
						return;
					}


					var t = $('#modal-message');

					if( t.length ){

						t.modal('show').find('.message').html( e );
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
			}


			$scope.aPlugins = {

				log: function( e ){

					$scope.log( 'aPlugins.'+e );
				}

				,maskphone: function(){

					if( $().mask == undefined ){

						this.log('maskphone: mask plugin is undefined');
						return;
					}

					$('[pluginMaskPhone]').each(function(){

						$(this).mask('+7 (000) 000 0000').removeAttr('pluginMaskPhone');
					});
				}
			}
			$scope.bodyChange = function(){

				var arr = $scope.aPlugins;

				for( k in arr ){

					if( k == 'log' ) continue;

					arr[k]();
				}
			}


			$scope.modalCallback = function( action ,vals ){

				var t = $('#modal-callback')
					, th = t.find('.hidevalues')
					, str = '';

				if( vals != undefined )
					for( k in vals )
						str += '<input type="hidden" name="'+k+'" value="'+vals[k]+'"/>';

				t.find('[name=type]').val( action );
				th.html( str );
				t.modal('show');
			}
		}

		const httpGet = (params) => {
			return $http({ ...params, url: BASE_PATH + '/' + params.url + '.json' });
		}


		// site
		{
			$scope.nSite = [];

			httpGet({
				url: 'json/site'
				,method: 'JSON'
			}).success(function(data){

				data.map = location.host.indexOf('.dev') == -1 ? $sce.trustAsResourceUrl( data.map ) : '';
				$scope.nSite = data;
			});
		}


		// how we work
		{
			$scope.nHowWW = [];

			httpGet({
				url: 'json/howww'
				,method: 'JSON'
			}).success(function(data){

				$scope.nHowWW = data;
			});
		}


		// portfolio
		{
			$scope.nPortfolio = {

				count: 0
				,page: 1
				,max: 4
				,items: []
			};

			httpGet({
				url: 'json/portfolio'
				,method: 'JSON'
			}).success(function(data){

				$scope.nPortfolio.count = data.length;
				$scope.nPortfolio.items = data;
			});
		}


		// design mobile
		{
			$scope.nDesignMobile = [];

			httpGet({
				url: 'json/design-mobile'
				,method: 'JSON'
			}).success(function(data){

				$scope.nDesignMobile = data;
			});
		}


		// pacs
		{
			$scope.nPacs = [];

			httpGet({
				url: 'json/pacs'
				,method: 'JSON'
			}).success(function(data){

				$scope.nPacs = data;
			});
		}


		// team
		{
			$scope.nTeam = [];

			httpGet({
				url: 'json/team'
				,method: 'JSON'
			}).success(function(data){

				$scope.nTeam = data;
			});
		}


		// reviews
		{
			$scope.nReviews = [];

			httpGet({
				url: 'json/reviews'
				,method: 'JSON'
			}).success(function(data){

				for( i=0; i < data.length; i++ )
					data[i].video = $sce.trustAsResourceUrl( data[i].video );

				$scope.nReviews = data;
			});
		}
	}]);
}
