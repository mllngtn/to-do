describe('dragging and dropping an event into a new array', function(){
	
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
			   
			  ctrl = $controller('dragDropCtrl', {
					  $scope: $scope,
			  });			   
		   
		  });
		  
  		$scope.days = [Monday, Tuesday];
						
  		item = Monday.array[1].text;

  		bin = 'Tuesday';
				  
 	});
	

	it('should remove the event - and only that event - from its previous array', function () {
						
		$scope.handleDrop(item, bin);
					
		expect(Monday.array.length).toEqual(2);
		
		expect(Monday.array[0].text).toBe("Do the washing up");
		
		expect(Monday.array[1].text).toBe("Practice harmonica");
				 
	});
	
	it('should add the event - and only that event - into its new array', function () {
							
		$scope.handleDrop(item, bin);
											
		expect(Tuesday.array.length).toEqual(1);
		
		expect(Tuesday.array[0].text).toBe("Have some lunch");
	
	});

});
