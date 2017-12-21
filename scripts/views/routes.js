'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/new', app.bookView.initFormPage);
page('/books/:id', ctx => app.Book.fetchOne(app.bookView.initDetailPage, ctx.params.id));

page('*', '/');
page();
