.controller('AuthorIndexCtrl', function($scope, AuthorService, $timeout) {

  // "AuthorService" is a service returning mock data (services.js)
  // the returned data from the service is placed into this
  // controller's scope so the template can render the data

  $scope.authors = [];
  $scope.authors = AuthorService.all();
  $scope.authors = AuthorService.allSync();

  $scope.title = "Completely Random Collection Of Quotes";
})

// Controller that shows more detailed info about the author (quote)
.controller('QuoteDetailCtrl', function($scope, $stateParams, AuthorService) {
  $scope.author = AuthorService.get($stateParams.authorId);
  $scope.title = "Quotes of author";
})
