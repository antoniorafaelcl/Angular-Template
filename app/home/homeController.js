var app =angular.module('home',[]);


app.controller("homeController",HomeController);

function HomeController (){
    var self = this;
    self.message = "Funcionando";
}