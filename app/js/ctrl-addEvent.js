app.controller("addEvent", function($scope, weekService, updateFunctions){
	
	$scope.days = weekService.days;
			
	$scope.successMessage = '\xA0';
	
	$scope.input = { };
	
	$scope.addToArray = updateFunctions.addToArray;
						
	$scope.addEvent = function( ){	
				
		var hasMatched;
		
		angular.forEach($scope.days, function(day, userInput) {
																											
				if ($scope.input.day == day.name) {
					
					userInput = $scope.input;
					
					addToArray(day, userInput);
															
					$scope.successMessage = "Thank you! " + $scope.input.day + "'s list has been updated";
					
					$scope.input = {};

					hasMatched = 'YES';
					
				}
				
				if (!hasMatched) { 
					$scope.successMessage = "Choose a day, you moron!";
				}	
		});
	};
	
});