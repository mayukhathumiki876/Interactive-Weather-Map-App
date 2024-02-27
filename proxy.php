<?php
  // put your API key here:
  $appid = "be7beea9d47243589eab28067c0ed94d";

  header("Content-type: application/json\n\n");
  $params = $_SERVER['QUERY_STRING'];
  $host = "https://api.openweathermap.org/data/2.5/weather?$params&APPID=$appid&units=imperial";
  $ch = curl_init($host);
  curl_exec($ch);
  curl_close($ch);
?>
