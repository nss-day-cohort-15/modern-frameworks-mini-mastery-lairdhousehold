"use strict";
var app = angular.module("FlowerApp", ["ngRoute"])
.constant('FirebaseURL','https://flower-power-angular.firebaseio.com/arrangements');
app.config(function($routeProvider){
  $routeProvider.
   when ('/', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
        }).
        when ('/login', {
          templateUrl: 'partials/login.html',
          controller: 'LoginCtrl'//Module has pseudo-global scope
//Controllers (functions) have local/lexical scope

// App/module is an object upon which we are creating properties
// Data in a controller communicates through scope to template view

//ROUTE = URL OF APPLICATION, NOT PATH TO FILES
