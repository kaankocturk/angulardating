'use strict';

var app = angular.module('someApp', ['ui.router', 'ngStorage']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/partials/home/home.html', controller: 'homeCtrl' })
    .state('login', { url: '/login', templateUrl: '/partials/home/login.html', controller: 'loginregister' })
    .state('register', { url: '/register', templateUrl: '/partials/home/register.html', controller: 'loginregister' })
    .state('createProfile', { url: '/createProfile', templateUrl: '/partials/createProfile.html', controller: 'create' })
    .state('profile', { url: '/profile', templateUrl: '/partials/profile.html', controller: 'profile' })
    .state('users', { url: '/users', templateUrl: '/partials/users.html', controller: 'users' })
  $urlRouterProvider.otherwise('/');
});
