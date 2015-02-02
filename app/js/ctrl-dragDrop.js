app.directive('draggable', function( ) {
  return function(scope, element) {
    // this gives us the native JS object
    var el = element[0];
    
    el.draggable = true;
    
    el.addEventListener(
      'dragstart',
      function(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('Text', this.id);
        this.classList.add('drag');
        return false;
      },
      false
    );
    
    el.addEventListener(
      'dragend',
      function(e) {
        this.classList.remove('drag');
        return false;
      },
      false
    );
  }
});

app.directive('droppable', function( ) {
  return {
    scope: {
      drop: '&',
      bin: '='
    },
    link: function(scope, element) {
      // again we need the native object
      var el = element[0];
      
      el.addEventListener(
        'dragover',
        function(e) {
          e.dataTransfer.dropEffect = 'move';
          // allows us to drop
          if (e.preventDefault) e.preventDefault();
          this.classList.add('over');
          return false;
        },
        false
      );
      
      el.addEventListener(
        'dragenter',
        function(e) {
          this.classList.add('over');
          return false;
        },
        false
      );
      
      el.addEventListener(
        'dragleave',
        function(e) {
          this.classList.remove('over');
          return false;
        },
        false
      );
      
      el.addEventListener(
        'drop',
        function(e) {
          // Stops some browsers from redirecting.
          if (e.stopPropagation) e.stopPropagation();
          
          this.classList.remove('over');
          
          var binId = this.id;
          var item = document.getElementById(e.dataTransfer.getData('Text'));
          this.appendChild(item);
          // call the passed drop function
          scope.$apply(function(scope) {
            var fn = scope.drop();
            if ('undefined' !== typeof fn) {            
              fn(item.id, binId);
            }
          });
          
          return false;
        },
        false
      );
    }
  }
});



app.controller('DragDropCtrl', function($scope, weekService) {
	
	var time = '';
	
	$scope.days = weekService.days;
	
 	$scope.handleDrop = function(item, bin) {	
		
		angular.forEach($scope.days, function(day) { 			
							
			angular.forEach(day.array,function(array) {
																		
				if (item == array.text) {
					
					time = array.time;								
					
					var index = day.array.indexOf(event);
					day.array.splice(index, 1);
					
					console.log('has gone' + time);
					
				}				
			})	
				
		});	
			
		angular.forEach($scope.days, function(day) { 			
				
			
			if (bin == day.name) {
				
				//time = day.array.time;
				
				day.array.push({day:day, text:item, time:time});
				
				console.log('has arrived' + time);

			}	
			
		});
  	}
});