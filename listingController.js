angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
    	var newCode, newName, newAddress, newLat, newLon;
    	//these elements are inside a form inside a div
    	//expecting to only get one element
    	newCode = document.getElementsByName("newCode")[0].value;
    	newName = document.getElementsByName("newName")[0].value;
    	newAddress = document.getElementsByName("newAddress")[0].value;
    	newLat = document.getElementsByName("newLat")[0].value;
    	newLon = document.getElementsByName("newLon")[0].value;
    	//adds the new element in the listing (not the one in JSON format)
    	$scope.listings.push({"code": newCode, "name": newName, "coordinates": { "latitude": newLat, "longitude": newLon }, "address": newAddress });
    };
    $scope.deleteListing = function(index) {
    	$scope.listings.splice(index, 1); //this modifies the array. Second parameter specifies how many elements to remove
    };
    $scope.showDetails = function(index) {
    	//Had to make this an array so I could use <br> tag to display a new line
    	//Adding \n was not displaying properly on HTML
    	$scope.detailedInfo = [$scope.listings[index].name];
    	//check if there is an address
    	if($scope.listings[index].address != null) {
    		$scope.detailedInfo.push("Address: " + $scope.listings[index].address);
    	}
    	//check if there are coordinates
    	if($scope.listings[index].coordinates != null) {
    		$scope.detailedInfo.push("Coordinates: " + $scope.listings[index].coordinates.latitude + ", " + $scope.listings[index].coordinates.longitude);
    	}
    };
  }
]);