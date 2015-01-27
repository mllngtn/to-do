
angular.module('app').controller("addEvent", function($scope){
	
	$scope.successMessage = '\xA0';
	
	$scope.new = {};
				
	$scope.addEvent = function(){		
		
		var hasMatched;
		
		angular.forEach($scope.days, function(day) {
						
				if ($scope.new.day == day.name) {	
					day.array.push($scope.new);
					$scope.successMessage = "Thank you! " + $scope.new.day + "'s list has been updated";
					$scope.new = {};
					hasMatched = YES;
					
				}
				
				if (!hasMatched) {
					$scope.successMessage = "Choose a day, you moron!";
				}	
		});
	};
	
});