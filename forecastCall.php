<?php
  $uri = "https://api.forecast.io/forecast/";
  $apiKey = "f0dbe3df02bda6b2a413d06e9e349105";
  $latlong = $_GET['latlong'];

  $resp = file_get_contents($uri . $apiKey . "/" . $latlong);
  header('Content-Type: application/json');
  echo $resp;
?>