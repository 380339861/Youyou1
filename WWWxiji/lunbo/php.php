<?php
header("Access-Control-Allow-Origin:*"); 
$method = "GET";
$url = "http://120.76.205.241:8000/product/wzhouhui?kw=护肤&apikey=C6DCNhFwKMqHf0Z0jqummsktJiBM35s3QFq15hoBoepKQaZBHH2IQOakedjj5h5y";
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
echo (curl_exec($curl));
?>

