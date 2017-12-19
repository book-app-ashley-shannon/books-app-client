'use strict';

var __API_URL__ = 'http//localhost:3000';
var __API_URL__ = 'https:st-aj-booklist.herokuapp.com';

var books = []

(function() {
  function Book(title, author, isbn, image_url, description) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.image_url = image_url;
    this.description = description;
    books.push(this);
  };

  Book.prototype.toHtml() {
    var template = Handlebars.compile($('#book-list-template').html());
    books.forEach(ele => $('section').append(template(ele)));
  };
})();
