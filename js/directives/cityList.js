app.directive('cityList', function(){
  return {
    restrict:'E',
    scope: {
      	info: '='
    },
    templateUrl: "js/directives/cityList.html"
  };
});