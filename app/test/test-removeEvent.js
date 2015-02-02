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
								
		$scope.userDelete(days.array[1], when);
						
		expect(days.array.length).toEqual(2);
		
		expect(days.array[0].text).toBe("Do the washing up");
		
		expect(days.array[1].text).toBe("Practice harmonica");
		 
	});

});