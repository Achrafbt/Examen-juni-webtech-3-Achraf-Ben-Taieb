angular.module('myApp.services', [])
.factory('AuthorService', function($q, $timeout) {
  // Might use a resource here that returns a JSON array
  // Some testing data

  var authors = [{
    id: '1',
    author: 'Jeff lebowski',
    quote: 'Dude, well that s just your opinion dude',
  }, {
    id: '2',
    author: 'Shakespear',
    quote: 'To be or not to be',
  }, {
    id: '3',
    author: 'Jeff lebowski',
    quote: 'Dude 2',
  }];

  return {
    all: function() {
      var deferred = $q.defer();
      $timeout(function() {
        deferred.resolve(authors);
      }, 1000);
      return deferred.promise;
    },
    allSync: function(author) {
      return authors;
    },
    get: function(authorId) {
      // Simple index lookup
      for (var i = 0, l = authors.length; i < l; i++) {
        if (authors[i].id == parseInt(authorId)) {
          return author[i];
        }
      }
    }
  }
});
