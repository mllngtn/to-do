describe('addEvent', function(){
	
	beforeEach(function (){
	 
    	 input = {day: "Monday", text: "Do the washing up", time: "18:00"};
		 
    	 badInput = {day: "", text: "Do the washing up", time: "18:00"};
		 	  		  
		 module('app');
	 
		 inject(function($rootScope, $controller ) {
			  $scope = $rootScope.$new();
			   
			  ctrl = $controller('addEvent', {
					  $scope: $scope,
					  input: input
			  });			   
		   
		  });
 	});
	

	it('should be called by addForm', function () {
		
		 
	});
	
	
	it('should place the user input from addForm into the correct day array, and should congratulate the user in such cases', function () {
		
		$scope.input = input;
		
		inputObj = [input];				
								
		$scope.addEvent( );
								
		angular.forEach($scope.days, function(day) { 
						
			if (day.name == 'Monday') {
				expect(day.array).toEqual(inputObj)
			} else return;
		});
		
		expect($scope.successMessage).toBe("Thank you! Monday's list has been updated");
		
	});
	
	it('should not pass any user input that does not specify a day, and should pass an error message in such cases', function () {
		
		$scope.input = badInput;
										
		$scope.addEvent( );
												
		angular.forEach($scope.days, function(day) { 
				expect(day.array).toEqual([ ])
		});	
		
		expect($scope.successMessage).toBe("Choose a day, you moron!");
		 
	});
		
});