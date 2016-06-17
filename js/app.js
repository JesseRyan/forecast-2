var app = angular.module('ForecastApp', []);


app.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

