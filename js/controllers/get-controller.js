(function() {
  'use strict';
  angular
    .module('uhaulApp')
    .controller('GetController', ['$scope', '$http', function($scope, $http) {
      $scope.users = [];
      $scope.grabUsers = function(){
        $http({
          method: 'GET',
          url: 'http://jsonplaceholder.typicode.com/users'
        }).then(function successCallback(res) {
            res.data.forEach(function(user){
              $scope.users.push(user);
            });
          }, function errorCallback(err) {
            console.log(err);
          });
      }
      $scope.grabUsers();
    }]);
})();
