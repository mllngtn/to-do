
angular.module('app', []);

angular.module('app').controller("MainController", function($scope){
    
	var vm = this;
	
	vm.title = 'To Do List';
	
	vm.successMessage = '\xA0';
					
	vm.days = [
		
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
	
	vm.new = {};
	
	vm.today = '';
		
	vm.addEvent = function() {		
		
		var hasMatched;
		
		angular.forEach(vm.days, function(day) {
						
				if (vm.new.day == day.name) {	
					day.array.push(vm.new);
					vm.successMessage = "Thank you! " + vm.new.day + "'s list has been updated";
					vm.new = {};
					hasMatched = YES;
					
				}
				
				if (!hasMatched) {
					vm.successMessage = "Choose a day, you moron!";
				}	
		});
	};
			
	vm.delete = function(event, when) {
				
		angular.forEach(vm.days, function(day) {
					
			if (when == day.name) {
								
				var index = day.array.indexOf(event);
				day.array.splice(index, 1);
			} 	
		});
	};
		
});
