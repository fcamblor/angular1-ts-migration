

angular.module('angular1-ts-migration', [
    'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state({ name: 'app', abstract: true, template: "<ui-view/>" })
        .state({ name: 'app.hello', url: '/', component: 'helloPage' });
}]);
