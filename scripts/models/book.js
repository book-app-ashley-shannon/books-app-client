'use strict';

// var __API_URL__ = 'http//localhost:3000';
var __API_URL__ = 'https://st-aj-booklist.herokuapp.com';

var app = app || {};

(function(module) {
  function Book(raw) {
    Object.keys(raw).map(key => this[key] = raw[key]);
  };

  Book.prototype.toHtml = function(template) {
    // var template = Handlebars.compile($('#book-list-template').html());
    // Book.forEach(ele => $('section').append(template(ele)));

    return Handlebars.compile($(`#${template}`).text())(this);
  };

  Book.all = [];

  Book.loadAll = rows => {
    rows.sort((a, b) => b.title - a.title);
    Book.all = rows.map(ele => new Book(ele));
  };

  Book.fetchAll = callback => {
    $.get(`${__API_URL__}/api/v1/books`)
    .then(Book.loadAll)
    .then(callback)
    .catch(errorCallback);
  };

  Book.fetchOne = (callback, id) => {
    $.get(`${__API_URL__}/api/v1/books/${id}`)
    .then(Book.loadAll)
    .then(callback)
    .catch(errorCallback);
  };

  Book.submit = event => {
    event.preventDefault();
    let book = new Book ({
      title: $('#title').val(),
      author: $('#author').val(),
      isbn: $('#isbn').val(),
      image_url: $('#image_url').val(),
      description: $('#description').val()
    });
    book.insertRecord();
  };

  Book.prototype.insertRecord = function() {
    $.post(`${__API_URL__}/api/v1/books`, {title: this.title, author: this.author, isbn: this.isbn, image_url: this.image_url, description: this.description})
    .then(page('/'));
  };

  function errorCallback(err,msg) {
    console.log(err);
    module.errorView.initErrorPage(err);
  };
  module.Book = Book;
})(app);
