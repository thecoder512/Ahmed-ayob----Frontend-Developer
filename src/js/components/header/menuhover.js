// import { drawSVG } from '/node_modules/gsap-drawsvg/drawsvgmin.js';
import { gsap } from '/node_modules/gsap/all.js';

export default class MenuAnimationObject {
    constructor() {
        this.svgAnimation = document.querySelector('.home-shape');
        this.listLink = document.querySelectorAll('.menu-list');

        this.render();

        // menu-shapes-wrapper
    }

    render() {
        const tl = gsap.timeline();

        const menu = document.querySelector('.nav-menu');

        Array.from(document.getElementsByClassName('menu-list')).forEach(
            (item, index) => {
                item.onmouseover = () => {
                    menu.dataset.activeIndex = index;
                };
            }
        );
    }
}
