var Guid = require('guid');
var books = require('google-books-catalogue-search');
var randomWords = require('random-words');

for(var i = 0; i < 100; i++) {
  var word = randomWords();
  books.search(word, function(err, results) {
    if(results) {
      for(var j = 0; j < results.length; j++) {
        if(results[j] !== undefined && results[j].authors !== undefined) {
          var author = results[j].authors[0];
          var data = {
            author: results[j].authors[0],
            descripton: results[j].subtitle,
            title: results[j].subtitle,
            coverPicture: results[j].imageLinks.smallThumbnail
          };


        }

    }





    }
  });
}
