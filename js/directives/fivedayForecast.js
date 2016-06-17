app.directive('fivedayForecast', function(){
  return {
    restrict:'E',
    scope: {
      	info: '='
    },
    templateUrl: "js/directives/fivedayForecast.html"
  };
});