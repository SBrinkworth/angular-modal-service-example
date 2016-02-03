angular.module("modalApp").controller("formCtrl", function($scope, user, close) {
  $scope.newUser = {
    userName: user.userName,
    email: user.email,
    password: user.password,
    aboutYou: user.aboutYou
  };
  $scope.close = close;
  $scope.user = user;
});
