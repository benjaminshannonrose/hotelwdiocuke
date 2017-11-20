"use strict";

class Page {

    cosntructor() {
        this.title = 'My Page';
    }

    open(path) {
        browser.url('/' + path);
    }
}

module.exports = Page;
