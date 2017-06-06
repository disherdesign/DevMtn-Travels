angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv, $stateParams){
	$scope.travelInfo = mainSrv.travelInfo;
	$scope.packageInfo = mainSrv.packageInfo;
	console.log($scope.travelInfo)
})