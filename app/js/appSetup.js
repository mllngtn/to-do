
angular.module('app', [ ]);

angular.module('app').controller("dataCtrl", function($scope){
    	
	$scope.title = 'To Do List';
						
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
					
});