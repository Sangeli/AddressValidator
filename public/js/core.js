angular.module('addressValidator', [])
.controller('mainController', ['$scope', '$http', ($scope, $http) => {
  $scope.user = {};
  $scope.message = '';

  $scope.send = (user) => {
    $http.post('/users', {user}).then( (response) => {
      console.log('status', response.status);
      $scope.message = response.data.message;
    }, (err) => {
      console.log('err', err.data);
      $scope.message = err.data.message
    })
  }

}]);