'use strict';

// var __API_URL__ = 'http//localhost:3000';
var __API_URL__ = 'https://st-aj-booklist.herokuapp.com';

var app = app || {};

(function(module) {
  function Book(raw) {
    Object.keys(raw).map(key => this[key] = raw[key]);
  };

  Book.prototype.toHtml = function() {
    // var template = Handlebars.compile($('#book-list-template').html());
    // Book.forEach(ele => $('section').append(template(ele)));

    return Handlebars.compile($('#book-list-template').text())(this);
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

  Book.fetchOne = callback => {
    $.get(`${__API_URL__}/api/v1/books:id`)
    .then(Book.loadAll)
    .then(callback)
    .catch(errorCallback);
  };

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  };
  module.Book = Book;
})(app);
