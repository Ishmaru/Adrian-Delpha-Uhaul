(function() {
  'use strict';
  angular
    .module('uhaulApp')
    .controller('PostsController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {
      $scope.posts = [];
      $scope.grabPosts = function(userId){
        $http({
          method: 'GET',
          url: 'http://jsonplaceholder.typicode.com/posts?userId=' + userId
        }).then(function successCallback(res) {
          console.log(res.data)
            res.data.forEach(function(post){
              $scope.posts.push(post);
            });
          }, function errorCallback(err) {
            console.log(err);
          });
      }
      $scope.grabPosts($stateParams.userId);
    }]);
})();
