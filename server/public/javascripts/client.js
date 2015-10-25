var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/',{
            templateUrl:'views/home.html',
            controller: 'HomeController'
        })
        .when('/venuePage',{
            templateUrl:'views/venuePage.html',
            controller: 'VenueController'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController'
        })
        .when('/users/home', {
            templateUrl: 'views/signinLanding.html'
        })
        .when('/register/registerLanding', {
            templateUrl: 'views/registerLanding.html'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        });


    $locationProvider.html5Mode(true);
});
