#Angular-Modal-Service Example

###Step 1 - Connect the Angular-Modal-Service to your app

Use npm install to download Angular-Modal-Service package into chosen directory
```
npm install --save angular-modal-service
```

Use a script tag to link the proper file to your index.html
```html
<script src="node_modules\angular-modal-service\dst\angular-modal-service.min.js"></script>
```
if this does not work, you may need to find the file and drag it into your app folder, then include the path from there.

Include 'angularModalService' in your app file
```javascript
var app = angular.module('modalApp', ['angularModalService']);
```

###Step 2 - Using Angular-Modal-Service in your app

Inject ModalService into your app
```javascript
angular.module("modalApp").controller("mainCtrl", function($scope, ModalService) {
  ...
});
```

Call 'ModalService.showModal()' to open modal
```javascript
ModalService.showModal({
  templateUrl: "Template File Path Here",
  controller: "Controller Name Here",
  inputs: {
    'key': "Variable to be passed into controller"
  }
}).then(function(modal) {
  // Function that runs when modal closes
  modal.close.then(function(then) {
    $scope.confirmationAnswer = then;
  });
});
```

Pat yourself on the back!
