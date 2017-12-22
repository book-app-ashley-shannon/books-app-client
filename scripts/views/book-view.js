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

    bookView.prototype.initUpdatePage = callback => {
      $('.container').hide();
      $('#book-list').empty();
      $('.form-view').show();

      $(`#title`).value.replace()
    }

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
       bookView.initFormPage(.update);
  
      });
    };
    module.bookView = bookView;
})(app);

// $(() => app.Book.fetchAll(app.bookView.initIndexPage));
