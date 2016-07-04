/**
 * http://usejsdoc.org/
 */
var myApp = angular.module("myApp",['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: '../templates/index.html',
        controller: 'IndexController',
        controllerAs:'index'
    }).
    when ('/git',{
        templateUrl: '../templates/git.html',
    }).
    otherwise({ redirectTo: '/' });
}]);

myApp.controller('IndexController',['$scope','$http',function ($scope, $http) {
    var index = this;
    index.data1 = [
        {
            title1:"title 1",
            title2:"title 2",
            title3:"title 3"
        },
        {
            title1:"title 11",
            title2:"title 22",
            title3:"title 33"
        },
        {
            title1:"title 111",
            title2:"title 222",
            title3:"title 3333"
        },
        {
            title1:"title 111",
            title2:"title 222",
            title3:"title 3333"
        }
    ];
    
    $http.get("api/songs").success(function (data) {
        
        index.data = data;
        //console.info(index.data.borough);
    })

    index.createNew = function(song){
        
    };
    
}]);

