import { gsap } from '/node_modules/gsap/all.js';

export default class CardHoverEffect {
    constructor() {
        this.cardWrapper = document.querySelectorAll('.card-wrapper');
        this.mouseOnCard = false;
        this.axis = { x: 0, y: 0 };

        this.render();
    }

    render() {
        const tl = gsap.timeline();
        this.cardWrapper.forEach((wrapper) => {
            wrapper.addEventListener('mouseenter', (e) => {
                this.mouseOnCard = true;
            });
            wrapper.addEventListener('mousemove', (e) => {
                const card = wrapper.querySelector('.card');
                if (this.mouseOnCard) {
                    this.axis['x'] = (window.innerWidth / 2 - e.pageX) * 0.05;
                    this.axis['y'] = (window.innerHeight / 2 - e.pageY) * 0.05;
                }

                card.style.transform = `rotateX(${this.axis.y}deg) rotateY(${this.axis.x}deg)`;
            });

            wrapper.addEventListener('mouseleave', (e) => {
                this.mouseOnCard = false;
                this.axis = { x: 0, y: 0 };

                card.style.transform = `rotateX(${this.axis.y}deg) rotateY(${this.axis.x}deg)`;
            });
        });
    }
}
