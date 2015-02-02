  
app.controller("removeEvent", function($scope, weekService, updateFunctions){

	$scope.days = weekService.days;
	
	$scope.removeFromArray = updateFunctions.removeFromArray;
	
	$scope.userDelete = function(event, when) {
				
		angular.forEach($scope.days, function(day) { 	
					
			if (when == day.name) {
				
				removeFromArray(day, event);
												
			} 	
		});
	}; 
});