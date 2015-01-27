  
angular.module('app').controller("removeEvent", function($scope){
	
	$scope.delete = function(event, when) {
				
		angular.forEach($scope.days, function(day) {
					
			if (when == day.name) {
								
				var index = day.array.indexOf(event);
				day.array.splice(index, 1);
			} 	
		});
	};
	
});