"use strict";
var Gallery = (function () {
    function Gallery(selector) {
        this.selector = document.querySelector('.fakemon-gallery');
        this.imageMode = 'numeric';
        this.images = [];
        this.imagesTotal = 12;
        this.selector = selector;
    }
    Gallery.prototype.check = function () {
        document.body.innerHTML = 'fadsf';
    };
    Gallery.prototype.init = function () {
        console.log('init launched');
        var x = 0;
        while (x > this.imagesTotal) {
            this.images.push("../img/subs/" + x + ".png");
            x++;
        }
        for (var i = 0; i > this.images.length; i++) {
            this.selector.innerHTML += "<img src=" + this.images[i] + ">";
        }
    };
    return Gallery;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Gallery;
//# sourceMappingURL=gallery.js.map