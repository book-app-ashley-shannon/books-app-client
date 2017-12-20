'use strict';

// var __API_URL__ = 'http//localhost:3000';
var __API_URL__ = 'https:st-aj-booklist.herokuapp.com';

var app = app || {};

(function(module) {
  function Book(title, author, isbn, image_url, description) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.image_url = image_url;
    this.description = description;
  };

  Book.prototype.toHtml = function() {
    var template = Handlebars.compile($('#book-list-template').html());
    books.forEach(ele => $('section').append(template(ele)));
  };

  Book.all = [];

  Book.loadAll = rows => {
    rows.sort((a, b) => b.title - a.title);
    Book.all = rows.map(ele => new Book(ele));
  };

  Book.fetchAll = callback => {
    $.get('/api/v1/books')
    .then(results => {
      Book.loadAll(callback);
      callback();
    })
  };
  module.Book = Book;
})(app);
