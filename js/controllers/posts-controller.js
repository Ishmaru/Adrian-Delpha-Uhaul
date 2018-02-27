(function() {
  'use strict';
  console.log('NG Module Loaded.');
  angular
    .module('uhaulApp')
    .controller('PostsController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {
      console.log($stateParams.userId);
      $scope.posts = [];
      $scope.grabPosts = function(userId){
        $http({
          method: 'GET',
          url: 'http://jsonplaceholder.typicode.com/posts?userId=' + userId
        }).then(function successCallback(res) {
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
