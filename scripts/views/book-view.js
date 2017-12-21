'use strict';

var bookView = {};

var app = app || {};

(function(module) {
    bookView.initIndexPage = err => {
      $('.container').hide();
      $('.book-view').show();
      module.Book.all.map(ele => $('#book-list').append(ele.toHtml('book-list-template')));
      // $('.detail-view').on('click', 'button.db', app.bookView.getBookid);
    };

    bookView.submit = event => {
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

    bookView.initFormPage = err => {
      $('.container').hide();
      $('.form-view').show();
       
      $('.form').on('submit', bookView.submit);
    };

    bookView.initDetailPage = err => {
      $('.container').hide();
      $('.detail-view').empty();
      $('.detail-view').show();
      module.Book.all.map(ele => $('.detail-view').append(ele.toHtml('detail-template')));
      // let template = Handlebars.compile($('#detail-template').text());
      // $('.detail-view').append(template(err));
    };
    module.bookView = bookView;
})(app);

// $(() => app.Book.fetchAll(app.bookView.initIndexPage));
