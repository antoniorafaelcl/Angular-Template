var app = angular.module('angularApp',['home','ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/home");


    $stateProvider
        .state('home',{
            url:"/home",
            templateUrl:"../app/home/home.html",
            controller: "homeController as self"
        })
});