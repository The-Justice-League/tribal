angular.module('tribal')

.controller('LoginController', function($scope, $location) {
  this.loginButtonHandler = () => {
  };
})
.directive('login', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: 'LoginController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/login.html'
  };
});
