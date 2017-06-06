angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){
	$scope.travelInfo = mainSrv.travelInfo;
	var packageInfo = mainSrv.packageInfo;


	for (var i=0;i<packageInfo.length;i++) {
		if (packageInfo[i].id === parseInt($stateParams.id)) {
			$scope.package = packageInfo[i]
		}
	}


})

