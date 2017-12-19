'use strict';

var bookView = {};

var app = app || {};

(function(module) { 
    bookView.initIndexPage = () => {
        Book.all.map(ele => $('section').append(ele.toHtml()));
    };
     module.bookView = bookView;
})(app);