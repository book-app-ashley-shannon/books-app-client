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

    bookView.initFormPage = callback => {
      $('.container').hide();
      $('#book-list').empty();
      $('.form-view').show();

      $('.form').on('submit', callback);
    };

    bookView.initDetailPage = err => {
      $('.container').hide();
      $('#book-list').empty();
      $('.detail-view').empty();
      $('.detail-view').show();
      module.Book.all.map(ele => $('.detail-view').append(ele.toHtml('detail-template')));
      // let template = Handlebars.compile($('#detail-template').text());
      // $('.detail-view').append(template(err));
      $('.detail-view').on('click', '.delete', function(event) {
        event.preventDefault();
        module.Book.removeOne(this.id)
        .then(() => page('/'));
      });

      $('.detail-view').on('click', '.update', function(event) {
       event.preventDefault();
       app.Book.fetchOne(app.bookView.initUpdatePage, this.id);
     });
    };

    bookView.initUpdatePage = () => {
      $('.container').hide();
      $('#book-list').empty();
      $('.form-view').show();

      $('#title').val(app.Book.all.title);
      $('#author').val(app.Book.all.author);
      $('#isbn').val(app.Book.all.isbn);
      $('#image_url').val(app.Book.all.image_url);
      $('#description').val(app.Book.all.description);
      console.log(app.Book.all);
    };

    module.bookView = bookView;
})(app);

// $(() => app.Book.fetchAll(app.bookView.initIndexPage));
