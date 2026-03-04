<?php
if ($modx->context->get('key') === "mgr") return;

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers: *');

define("IMAGE_URL", 'http://' . $_SERVER['HTTP_HOST'] . '/assets/image/');

$uri = preg_replace("/\?+.*$/", '', $_SERVER['REQUEST_URI']);
$fileName = preg_replace("/^\/|\/$/", "", $uri);

$path = MODX_BASE_PATH . "json/";
$file = $path . $fileName . ".php";

http_response_code(400);
$result = [
  "error" => "module not found"
];

// check dir/index.php file
$dirIndexFile = str_replace('.php', '', $file) . '/index.php';
if (is_file($dirIndexFile)) $file = $dirIndexFile;

if ($_SERVER['HTTP_HOST'] === "api.sheber.localhost") {
  $result['file'] = $file;
  $result['dirIndex'] = $dirIndexFile;
}

if (is_file($file)) {
  $result = [];
  http_response_code(200);
  include MODX_BASE_PATH . "json/_.php";
  include $file;
}

die(json_encode($result));