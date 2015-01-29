describe("An AngularJS test suite", function () {
	
	it('should have tests', function () {
	
		expect(true).toBe(true);
		
	});
	
});

describe('addEvent', function(){
	

	it('should be called by addForm', function () {
		
		
		
	});
		
	
});


/*describe('addEvent', function(){

 	 var $scope, ctrl, ctrl2, days;
	 
	 beforeEach(function (){
		 
	     input = [
	 		  { day : 'Monday' }, 
	 		  { task : 'Do the washing up' },
	 	  ];
		  		  
		 module('app');
		 
		 inject(function($rootScope, $controller, _$timeout_) {
			   $scope = $rootScope.$new();
			   
			   ctrl = $controller('addEvent', {
			           $scope: $scope,
			  		   input: input
			   });			   
			   
		 });
	 });
	 
	 it('should place the user input from addForm into the correct array in dataCtrl.days', function() { 
	 
		 	$scope.input = input;
			
			$scope.days = days;
				 
	 		$scope.addEvent();
									
			angular.forEach($scope.days, function(day) { 
				
				if (day.name == 'Monday') {
					expect(day.array).toBe(input)
				} else return;
			
			});
			
	 
	 });
});

/*

describe('addEvent', function(){

    beforeEach(module('app'));
	
	var createController;

	var scope = {};
  	  
	beforeEach(inject(function ($controller) {
	  
	  createController = function() {
	
		  return $controller('addEvent', {
			  '$scope': scope 
		  });
	  };
	  	  
	controller = createController();
	  
	  
	}));
	  	
    input = [
		  { day : 'Monday' }, 
		  { task : 'Do the washing up' },
	  ];
		
	it('should place the user input from addForm into the correct array in dataCtrl.days', inject(function(addEvent) { 	
		
		scope.input = input;
		
		scope.addEvent(input);
								
  	   	expect(scope.input).toBe(input); 
		
		angular.forEach(scope.days, function(day) { 
				
			if (day.name == 'Monday') {
				expect(day.array).toBe(input)
			} else return;
			
		});
		
  	}));
	
});

/*
describe("Address Wizard : ", function () {

  beforeEach(module('app'));
  beforeEach(module('app.services'));

  var address = {};
  address.addressLine1 = "1";
  address.addressLine2 = "2";
  address.addressLine3 = "3";
  address.city = "london";
  address.postcode = "wr2";

  it('formats pickup address', inject(function (Booking, AddressWizard) {

    Booking.pickup = address;

    expect(AddressWizard.formatAddress(Booking.pickup)).toEqual({
      addressLine1 : '1 2 3',
      city : 'london',
      postcode : 'wr2'
    });

  }));

  it('formats dropoff address', inject(function (Booking, AddressWizard) {

    Booking.dropoff = address;

    expect(AddressWizard.formatAddress(Booking.dropoff)).toEqual({
      addressLine1 : '1 2 3',
      city : 'london',
      postcode : 'wr2'
    });

  }));

}); 
*/
