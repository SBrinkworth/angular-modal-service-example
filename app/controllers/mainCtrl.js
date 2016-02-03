angular.module("modalApp").controller("mainCtrl", function($scope, ModalService, $state) {
  // Inject ModalService into controller

  // Pre set values for display
  $scope.confirmationAnswer = 'No answer yet';
  $scope.user = {
    userName: '',
    email: '',
    password: '',
    aboutYou: ''
  };

  // Open confirm modal function
  $scope.openConfirm = function() {
    ModalService.showModal({
      templateUrl: "./app/modals/confirm/confirmTmpl.html",
      controller: "confirmCtrl",
      inputs: {
        text: "Thank you for clicking my button. Are you sure you want to continue?"
      }
    }).then(function(modal) {
      modal.close.then(function(then) {
        $scope.confirmationAnswer = then;
      });
    });
  };

  // Open form modal function
  $scope.openForm = function(user) {
    console.log();
    ModalService.showModal({
      templateUrl: "./app/modals/form/formTmpl.html",
      controller: "formCtrl",
      inputs: {
        user: user
      }
    }).then(function(modal) {
      modal.close.then(function(then) {
        $scope.user = then;
      });
    });
  };
});
