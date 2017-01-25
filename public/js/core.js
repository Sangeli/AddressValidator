angular.module('addressValidator', [])
.controller('mainController', ['$scope', '$http', ($scope, $http) => {
  $scope.user = {};
  $scope.message = '';

  $scope.reName = /[A-Za-z]+/;
  $scope.reWords = /[A-Za-z ]+/;
  $scope.reZipCode = /^\d{5}$/;

  $scope.send = (user) => {
    if ($scope.form.$valid) {
      $http.post('/users', {user}).then( (response) => {
        $scope.message = response.data.message;
      }, (err) => {
        $scope.message = err.data.message
      });
    } else {
      $scope.message = 'Form does not conform to requirements';
    }
  }


}]);