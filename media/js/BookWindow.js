'use strict';

class BookWindow {
    constructor(onHide) {
        let target = this;

        target.window = document.getElementById('book-window');
        target.onHide = onHide;
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
        console.log(target.onHide);
        target.onHide();
    }
}