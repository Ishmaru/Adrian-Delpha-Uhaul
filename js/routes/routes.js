(function (){
  'use strict'

  angular
  .module('uhaulApp')
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];


  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('users', {
        url: '/',
        templateUrl: 'index.html',
        controller: 'GetController',
        controllerAs: "vm"
      })
      .state('posts', {
        url: '/posts:userId',
        templateUrl: 'public/templates/posts.html',
        controller: 'PostsController',
        controllerAs: "vm"
      })
      $urlRouterProvider.otherwise('/');
  }


})();
