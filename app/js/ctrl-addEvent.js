angular.module('app').controller("addEvent", function($scope, weekService){
	
	$scope.days = weekService.days;
			
	$scope.successMessage = '\xA0';
	
	$scope.input = {};
						
	$scope.addEvent = function(){	
				
		var hasMatched;
		
		angular.forEach($scope.days, function(day) {
													
				if ($scope.input.day == day.name) {	
																				
					day.array.push($scope.input);
					$scope.successMessage = "Thank you! " + $scope.input.day + "'s list has been updated";
					$scope.input = {};

					hasMatched = YES;
					
				}
				
				if (!hasMatched) {
					$scope.successMessage = "Choose a day, you moron!";
				}	
		});
	};
	
});