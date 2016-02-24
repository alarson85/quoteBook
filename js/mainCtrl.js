app.controller('mainCtrl', ['$scope', 'dataService', function($scope, dataService) {

	$scope.quotes = dataService.getData();
	$scope.newQuote = {};
	$scope.removeQuote = dataService.removeData;
	$scope.addClicked = dataService.addClicked;
	$scope.addQuote = function() {
		dataService.addData($scope.newQuote);
		$scope.newQuote = {};
		$scope.addClicked();
	}
	$scope.addToggle = dataService.addToggle;
	$scope.addText = dataService.addText;

}]);

