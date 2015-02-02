
var app = angular.module('app', [ ]);  

app.service( 'weekService', [ '$rootScope', function( $rootScope ) {
	
   var week = {
	   	   
     days: [
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
     ],
	  
   }
 
   return week;
 }]);