app.directive('addCity', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/addCity.html',
    
    
link: function(scope, element, attrs) { 
  
  scope.addCity = function() { 
    alert("Add CIty");
  };
  
  scope.submitCity = function(){
	  
	  
  }
  
  
}
    
    
  };
});