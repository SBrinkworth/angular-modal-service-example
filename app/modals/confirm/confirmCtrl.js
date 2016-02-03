angular.module("modalApp").controller("confirmCtrl", function($scope, text, close) {
  $scope.text = text;
  $scope.close = close;
});
