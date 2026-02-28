var oBody = {

	position: 0
};

$(window).scroll(function(){

	var t = $('body')
		, tbp = oBody.position
		, tp = t.scrollTop()
		, th = $('.navhead')
		, thp = th.css('position')
		, iSpeed = 150;

	if( th.find('.item-logo-text').css('display') == 'none' ){

		if( tbp < 2 && thp == 'fixed' )
			th.css('position' ,'absolute');

		if( tbp > 2 && thp == 'absolute' )
			th.css('position' ,'fixed');
	}

	window.oBody.position = tp;
});