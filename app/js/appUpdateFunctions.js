app.service( 'updateFunctions', [ '$rootScope', function( $rootScope ) {

	addToArray = function(day, userInput) {
			day.array.push(userInput);
	}
	
	removeFromArray = function(day, event) {
			var index = day.array.indexOf(event);
			day.array.splice(index, 1);
	}

}]);