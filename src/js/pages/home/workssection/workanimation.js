import { ScrollTrigger, gsap } from 'gsap/all';

export default class WorkAnimation {
    constructor() {
        this.workTitle = document.querySelector('.works-title');

        this.imgs = document.querySelectorAll('.img');

        this.render();
        this.slider();
        this.titleAnimation();
    }

    render() {
        let cardTitle = new SplitType('.card-title', {
            types: 'words, characters',
        });
        let cardParagraph = new SplitType('.card-paragraph', {
            types: 'words, characters',
        });
    }

    titleAnimation() {
        const titleText = new SplitType(this.workTitle, {
            types: 'words, charecters',
        });
        const char = document.querySelectorAll('.works-title .char');
        char.forEach((char) => {
            char.addEventListener('mouseenter', () => {
                char.classList.add('animate__rubberBand');
            });
        });
        char.forEach((char) => {
            char.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    char.classList.remove('animate__rubberBand');
                }, 700);
            });
        });
    }

    slider() {
        gsap.registerPlugin(ScrollTrigger);
        const tl1 = gsap.timeline({
            defaults: {
                scrollTrigger: {
                    trigger: '.works-section',
                    start: 'top 90% ',
                    end: 'center center',
                    scrub: 1,
                    // markers: true,
                },
            },
        });
        this.imgs.forEach((img) => {
            let rotation = Math.floor(Math.random() * 40 - 20),
                postitionX = Math.floor(Math.random() * 300 - 150),
                postitionY = Math.floor(Math.random() * 300 - 150);

            // img fade in
            tl1.from(
                img,
                {
                    scale: '1.3',
                    rotate: rotation,
                    x: postitionX,
                    y: postitionY,
                },
                '-=1'
            );
        });
        // card info fade in
        tl1.from('.card-info', 7, {
            y: `-100%`,
            rotation: 0.01,
            opacity: 0.1,
            stagger: 0.5,
        });

        //the navigation and more works btn scrool trigger animation
        const tl2 = gsap.timeline({
            defaults: {
                scrollTrigger: {
                    trigger: '.works-section',
                    start: 'top 20% ',
                    end: 'center center',
                    scrub: 1,
                },
            },
        });
        tl2.from(this.workTitle, {
            y: `100%`,
            rotation: 0.01,
            opacity: 0,
        });
        tl2.from('.btn-nav', 1, {
            scale: 0.6,
            rotation: 0.01,
            opacity: 0,
        });
        tl2.from('.works-btn', 1, {
            scale: 0.6,
            rotation: 0.01,
            opacity: 0,
        });
    }
}
