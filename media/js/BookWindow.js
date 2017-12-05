'use strict';

class BookWindow {
    constructor() {
        let target = this;

        target.window = document.getElementsByClassName('book-window')[0];
    }

    show() {
        let target = this;
        this.window.classList.add('book-window--show');
        this.overlay = new Overlay({
            onDestroy: () => target.hide(),
        });
    }

    hide() {
        let target = this;
        target.window.classList.remove('book-window--show');
    }
}