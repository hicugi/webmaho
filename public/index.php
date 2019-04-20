<?php

$f = './'.preg_replace( "/^\/|\/$/" ,'' ,$_SERVER['REQUEST_URI'] ).'.html';
$f = is_file($f) ? $f : './index.html';
if( !is_file($f) ) die('hey there');

$r = file_get_contents($f);

// filemtime
if( preg_match_all( '/((src|href)\=\")(.*?)\?filemtime/' ,$r ,$vs ) )
	foreach( $vs[0] as $v ){

		$v = preg_replace( '/^(.*?)\"|\?filemtime$/' ,'' ,$v );
		if( is_file($v) )
			$r = str_replace( $v.'?filemtime' ,$v.'?'.filemtime($v) ,$r );
	}

die($r);
