app.service('forecast', ['$http', function($http) { 
  // use php to avoid CORS
  this.getForecast = function( key ){
	  return $http.get('http://localhost/forecast/forecastCall.php?latlong='+key);
  }    
}]);


