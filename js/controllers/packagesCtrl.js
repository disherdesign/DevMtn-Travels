angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams){
	$scope.travelInfo = mainSrv.travelInfo;
	$scope.packageInfo = mainSrv.packageInfo;

	$scope.country = mainSrv.getPackages($stateParams.country)
	console.log($scope.country)




})