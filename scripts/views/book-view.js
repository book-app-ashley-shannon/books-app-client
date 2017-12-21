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

    bookView.getBookid = () => {
      console.log(this);
      app.Book.fetchOne(app.bookView.initDetailPage);
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

$(() => app.Book.fetchAll(app.bookView.initIndexPage));
