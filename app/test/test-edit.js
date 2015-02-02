describe('eventEdit', function(){
	
	beforeEach(function (){
		
        Monday = {
  		  			name: "Monday",
   					array: [
						{ day: "Monday", text: "Do the washing up", time: "07:00" }, 
						{ day: "Monday", text: "Have some lunch", time: "12:00" }, 
						{ day: "Monday", text: "Practice harmonica", time: "" } 
					]
				}, 
				
		Tuesday = { name: "Tuesday", array: [ ]	 }
		
		module('app');
	 
	    inject(function($rootScope, $controller ) {
			  $scope = $rootScope.$new();
			   
			  ctrl = $controller('eventEdit', {
					  $scope: $scope,
			  });			   
		   
		  });
		  
  		$scope.days = [Monday, Tuesday];
												
		textEdit = "Eat some eggs"
		
		timeEdit = "13:00"
	 
 	});
	
	it('should update an event in an array', function () {
		
		eventEdit(textEdit, timeEdit);
		
		expect(Monday.array.length).toEqual(3);
		
		expect(Monday.array[1].text).toBe("Eat some eggs");
		
		expect(Monday.array[1].time).toBe("13:00");
				 
	});
		
});