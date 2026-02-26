var app = {

  init: function(){

    var self = this
      , fs = this.initList;

    $(document).ready(function(){

      for( i=0; i < fs.length; i++ ){

        var k = fs[i];

        if( self[k] != undefined && typeof(self[k]) == 'function' )
          self[k]();
      }
    });
  }
  ,initList: [ 'homeMapInit' ]

  ,nav: function( d ){

    var $d = $(d)
      , ds = $($d.attr('data-target') ? $d.attr('data-target') : 'nav')[0]
      , b = $(ds).hasClass('active');

    if( b ) $([ d ,ds ]).removeClass('active');
    else $([ d ,ds ]).addClass('active');
  }

  ,scrollInit: function(){
    this.scroll();
    $(window).scroll(function(){ app.scroll(); });
  }
  ,scroll: function(){

    var ns = {
        y: window.scrollY
        ,h: window.innerHeight
      }
      , fs = this.scrollFs;

    for( i=0; i < fs.length; i++ )
      fs[i]( ns );
  }
  ,scrollFs: []

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
  ,submit: function( d ){

    var self = this
      , d = $(d)
      , df = d.parents('form:first')
      , action = df.attr('action')
      , url = '/request.php?action='+action.replace( /^\/|\/$/ ,'' )
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

        if( self.submitSuccess[action] != undefined ){
          self.submitSuccess[action](r);
          return 0;
        }
      }
    });
  }
  ,submitSuccess: {

    callback: function(r){

      app.modalDom.modal('hide');

      setTimeout(function(){
        app.modal('modal-chose');
      } ,400);
    }

    ,order: function(){

      app.modalDom.modal('hide');

      setTimeout(function(){
        app.modal('modal-success');
      } ,400);
    }
  }

  ,form: false
  ,formSelector: 'input[type=hidden],input[type=text],input[type=password],input:checked,textarea'
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
      d.find('input[type=text],input[type=password],textarea').val('');
  }
  ,formCheck: function( d ){

    var dfs = d.find(this.formSelector);

    for( i=0; i < dfs.length; i++ ){

      var ds = $(dfs[i])
        , dg = ds.parents('.form-group')
        , vn = ds.attr('name')
        , v = ds.val();

      if( dg.length && ds.attr('required') != undefined && v == '' ){
        dg.addClass('has-error');
        dg.append('<div class="error-log">обязательная форма</div>');
      }
    }
  }

  ,pluginInit: function(){

    var self = this
      , ds = $('[plugin]');

    ds.each(function(){

      var d = $(this)
        , vn = d.attr('plugin');

      switch( vn ){

        case 'maskPhone':
          d.mask('+7 (999) 999-99-99');
          break;
      }
    });
  }

  ,homeMapInit: function(){

    this.homeMapOuterClick();

    $('#home-map a').each(function(){

      var d = $(this);

      d.append('<span class="active-marker"></span>' );
      d.find('span').click(function(){
        console.log(123)
        location.href = $(this).parent().attr('href');
      });
    });
  }
  ,homeMap: function( d ,v ,b ){

    var d = $(d)
      , dp = d.parents('#home-map')
      , dm = $('#home-map-modal')
      , dsb = $('.sidebar-select')
      , vl = v.list != undefined ? v.list.length : 0
      , sin = 'fadeIn'
      , sout = 'fadeOut';

    if( b == undefined ) dm.removeClass('v2');
    else dm.addClass('v2');

    // title
    dm.find('h2').html( v.title );

    // list & active-marker
    {

      var h = '' ,vc = 0 ,vv = 0;

      for( i=0; i < vl; i++ ){

        var vs = v.list[i];

        h += '<tr>'
            +'<td>'+vs.title+'</td>'
            +'<td><span style="width:'+(vs.city * 100)+'%"></span>'+vs.city+'</td>'
            +( vs.village != undefined ? '<td><span style="width:'+(vs.village * 100)+'%"></span>'+vs.village+'</td>' : '' )
          +'</tr>';

        vc += vs.city;

        if( vs.village != undefined )
          vv += vs.village;
      }

      dm.find('tbody').html(h);

      if( d.find('.active-marker').html() == '' )
        d.find('.active-marker').html(
          '<div>Город<span>'+( vc / vl ).toFixed(2)+'</span></div>'
          +( vv > 0 ? '<div>Село<span>'+( vv / vl ).toFixed(2)+'</span></div>' : '' )
        );
    }

    dp.find('>*').removeClass('active');
    d.parent().addClass('active').show();
    dm.removeClass('hide').removeClass(sout).addClass(sin);
    dsb.removeClass('hide');

    // problems
    if( v.problems == undefined ) return 0;

    // title
    dsb.find('h2').html( v.name );

    // list
    {

      var h = '';
      for( i=0; i < v.problems.length; i++ ){

        var vv = v.problems[i];

        h += '<tr><td>'+(i+1)+'</td><td>'+vv.title+'</td><td>'+vv.value+'</td><td>'+vv.title2+'</td><td>'+vv.value2+'</td></tr>';
      }

      dsb.find('tbody').html(h);
    }

    $('.sidebar-home').removeClass(sin).addClass(sout);
    dsb.addClass(sin).removeClass(sout);
  }
  ,homeMapHide: function(){

    var sin = 'fadeIn'
      , sout = 'fadeOut'

    $('#home-map .active').removeClass('active');

    $('#home-map-modal').removeClass(sin).addClass(sout);
    $('.sidebar-home').removeClass(sout).addClass(sin);
    $('.sidebar-select').removeClass(sin).addClass(sout);
  }
  ,homeMapOuterClick: function(){
    $('body').click(function(e){

      var d = $(e.target)
        , k = '#home-map-modal'
        , dm = $(k);

      if( dm.css('display') == 'block' && !d.parents(k).length && d.attr('id') != k.replace('#' ,'') )
        app.homeMapHide();

      if( d.parents('#home-map').length && d.prop('tagName') == 'A' )
        location.href = $(this).attr('href');
    });
  }

  ,tab: function( d ,k ){

    var d = $(d)
      , dp = d.parents('ul:first')
      , ds = $(k);

    dp.find('li').removeClass('active');
    d.parents('li').addClass('active');

    ds.parent().find('>*').removeClass('active');
    ds.addClass('active');
  }
};
app.init();
