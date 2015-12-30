var ckccApp = angular.module('ckccApp', []);

ckccApp.controller('ckccController', ['$scope', function($scope){

  	$scope.generateList = function() {
  		$.getJSON($scope.productURL) 
  		.done(function(data){
  			var capacity = $scope.capacity * 1000;
  			var item, variant, tempItem;
  			var allProducts = data.products;
  			var products = [];
  			var desiredProducts = [];
  			var leftOverProducts = [];
  			//Filter out the products to only include keyboards and computers
  			for (item in allProducts){ //I've tried both this and data.products
  				if (allProducts[item].product_type == "Keyboard" || allProducts[item].product_type == "Computer"){
  					for (variant in allProducts[item].variants){
  						tempItem = allProducts[item];
  						tempItem.variants[variant].title += " " + allProducts[item].title;
  						products.push(allProducts[item].variants[variant]);
  					}
  				}
  			}

  			/*Goal is to apply a greedy algorithm to generate a relatively
  			cost-effective list of items that we want to include. To achieve this
  			I sort the products by price/mass ratio and pick items sequentially
  			until we cannot fit any more items.*/

  			//Sort the products by price-to-mass ratio (in descending order)
  			products.sort(function(a, b){
  				return (parseFloat(a.price)/a.grams) > (parseFloat(b.prise)/b.grams);
  			});

        //Keep adding items to our "desired products" list until we cannot.
        //All items not included are "left over"
  			for (item in products){
  				if ((capacity - products[item].grams) > 0){
  					capacity -= products[item].grams;
  					desiredProducts.push(products[item]);
  				} else {
            leftOverProducts.push(products[item]);
          }
  			}

  			$scope.generatedList = desiredProducts;
        $scope.rejectedList = leftOverProducts;
  		})

      .fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err);
      });
  	};
}]);