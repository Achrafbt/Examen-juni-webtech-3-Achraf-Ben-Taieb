angular.module('myApp', ['ionic', 'ngAnimate'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('indexView', {
    url: '/',
    templateUrl: '/index.html',
    controller: 'AuthorIndexCtrl'
  })

  .state('quoteView', {
    url: '/author/:authorId',
    templateUrl: '/templates/quote.html',
    controller: 'QuoteDetailCtrl'
  });

  // if none of the above routes are met, use this fallback
  $urlRouterProvider.otherwise('/');

})
