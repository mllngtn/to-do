app.controller('DragDropCtrl', function($scope, weekService) {
	
	var time = '';
	
	$scope.days = weekService.days;
	
 	$scope.handleDrop = function(item, bin) {	
		
		angular.forEach($scope.days, function(day) { 			
							
			angular.forEach(day.array,function(array) {
																		
				if (item == array.text) {
					
					time = array.time;	
										
					var index = day.array.indexOf(array);
					day.array.splice(index, 1);
										
				}				
			})	
				
		});	
			
		angular.forEach($scope.days, function(day) { 			
				
			if (bin == day.name) {
								
				day.array.push({day:day, text:item, time:time});
			}	
			
		});
  	}
});