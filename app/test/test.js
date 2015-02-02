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


describe('removeEvent', function(){
	
	beforeEach(function (){
	 
        days = {
  		  	name: "Monday",
   			array: [
				{
					day: "Monday", text: "Do the washing up", time: "07:00"
				}, 
				{
					day: "Monday", text: "Have some lunch", time: "12:00"
				}, 
				{
					day: "Monday", text: "Practice harmonica", time: ""
				} 
			]
   		},
						 	  		  
		 module('app');
	 
		 inject(function($rootScope, $controller ) {
			  $scope = $rootScope.$new();
			   
			  ctrl = $controller('removeEvent', {
					  $scope: $scope,
			  });			   
		   
		  });
 	});
	

	it('should remove a specific event - and only that event - when called upon', function () {
		
		$scope.days = [days];					
						
		when = days.array[1].day;
								
		$scope.delete(days.array[1], when);
						
		expect(days.array.length).toEqual(2);
		
		expect(days.array[0].text).toBe("Do the washing up");
		
		expect(days.array[1].text).toBe("Practice harmonica");
		 
	});

});
