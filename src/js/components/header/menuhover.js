import { gsap } from 'gsap/all';

export default class MenuAnimationObject {
    constructor() {
        this.svgAnimation = document.querySelector('.home-shape');
        this.listLink = document.querySelectorAll('.menu-list');
        this.html = document.querySelector('html');
        this.menu = document.querySelector('.menu-slide');
        this.blurShape = document.querySelector('.blur-shape');
        this.hamburger = document.querySelector('.hamb-wrapper');
        this.pageName = document.querySelector('.home-active-last');

        this.render();
        this.menuLinksClick();
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

    menuLinksClick() {
        this.listLink.forEach((link) => {
            link.addEventListener('click', (e) => {
                this.hamburger.classList.remove('active-hamburger');
                this.menu.classList.remove('active');
                this.blurShape.classList.remove('active-blur-shape');
                this.html.style.overflow = 'auto';

                // this.pageName.innerHTML = `
                //     ${link.textContent}  <div class="dot">`;

                // setTimeout(() => {
                //     this.pageName.innerHTML = ` Hallo<div class="dot">`;
                // }, 2000);
            });
        });
    }
}
