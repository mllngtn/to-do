  
angular.module('app').controller("removeEvent", function($scope, weekService){

	$scope.days = weekService.days;

	$scope.delete = function(event, when) {
				
		angular.forEach($scope.days, function(day) { 	
					
			if (when == day.name) {
				
				console.log("veracious");
								
				var index = day.array.indexOf(event);
				day.array.splice(index, 1);
			} 	
		});
	};
});