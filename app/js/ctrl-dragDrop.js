app.controller('DragDropCtrl', function($scope, weekService, updateFunctions) {
	
	time = '';
			
	$scope.days = weekService.days;
	
	$scope.removeFromArray = updateFunctions.removeFromArray;
	
	$scope.addToArray = updateFunctions.addToArray;
	
 	$scope.handleDrop = function(item, bin) {	
		
		angular.forEach($scope.days, function(day) { 			
							
			angular.forEach(day.array,function(array) {
																		
				if (item == array.text) {
					
					time = array.time;	
					
					removeFromArray(day, array);
															
				}				
			})	
		});	
			
		angular.forEach($scope.days, function(day) { 			
				
			if (bin == day.name) {
				
				$scope.successMessage = "Thank you! " + bin + "'s list has been updated";
				
				event = {day:day, text:item, time:time};
				
				addToArray(day, event);
												
			}	
		});
  	}
});