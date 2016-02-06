angular.module("modalApp").controller("formCtrl", function($scope, user, close) {
  // Basic controller file
  // As you can see, 'user' and 'close' are being passed into our controller

  // 'user' is the user value of the 'inputs' object we passed into the controller when we called it

  // 'Close' is a function that gets passed into all modal controllers
  // Calling 'close()' will close the modal
  // Passing a variable into the close function will pass it back to the controller that called the modal.

  // Save user and close to the scope so that they can be used by the html
  $scope.close = close;
  $scope.user = user;

  // Create new user object for inputs.
  // We are creating this newUser object so that it will not edit the user object unless we click save.
  $scope.newUser = {
    userName: user.userName,
    email: user.email,
    password: user.password,
    aboutYou: user.aboutYou
  };
});
