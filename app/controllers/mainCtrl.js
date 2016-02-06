angular.module("modalApp").controller("mainCtrl", function($scope, ModalService) {
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
      // Template file for modal
      templateUrl: "./app/modals/confirm/confirmTmpl.html",
      // Controller file for modal
      controller: "confirmCtrl",
      // Variables being passed into modal
      inputs: {
        // Will be injected into controller as 'text'
        text: "Thank you for clicking my button. Are you sure you want to continue?"
      }
    }).then(function(modal) {
      // Funtion that runs when modal closes
      modal.close.then(function(then) {
        // then = whatever the close() function in the modal returns
        $scope.confirmationAnswer = then;
      });
    });
  };

  // Open form modal function
  $scope.openForm = function(user) {
    console.log();
    ModalService.showModal({
      // Template file for modal
      templateUrl: "./app/modals/form/formTmpl.html",
      // Controller file for modal
      controller: "formCtrl",
      // Variables being passed into modal
      inputs: {
        // Will be injected into controller as 'user'
        user: user
      }
    }).then(function(modal) {
      // Funtion that runs when modal closes
      modal.close.then(function(then) {
        // then = whatever the close() function in the modal returns
        $scope.user = then;
      });
    });
  };
});
