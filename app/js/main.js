
angular.module('app', []);

angular.module('app').controller("MainController", function($scope){
    
	var $scope = $scope;
	
	$scope.title = 'To Do List';
	
	$scope.successMessage = '\xA0';
					
	$scope.days =  [
		
		{
			name: "Monday",
			array: [ ]
		},
		
		{ 
			name: "Tuesday",
			array: [ ]
		},
		
		{ 
			name: "Wednesday",
			array: [ ]
		},
		
		{ 
			name: "Thursday",
			array: [ ]
		},
		
		{ 
			name: "Friday",
			array: [ ]
		},
		
		{ 
			name: "Saturday",
			array: [ ]
		},
		
		{ 
			name: "Sunday",
			array: [ ]
		},
				
	];
	
	$scope.new = {};
	
	$scope.today = '';
		
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
			
	$scope.delete = function(event, when) {
				
		angular.forEach($scope.days, function(day) {
					
			if (when == day.name) {
								
				var index = day.array.indexOf(event);
				day.array.splice(index, 1);
			} 	
		});
	};
		
});
