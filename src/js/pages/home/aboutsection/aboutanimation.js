import { gsap, ScrollTrigger } from '/node_modules/gsap/all.js';
import SplitType from '/node_modules/split-type/dist/index.js';

export default class AboutAnimation {
    constructor() {
        this.trigger = document.querySelector('.about-section');

        this.render();
    }
    render() {
        // split the title and paragraph to make it ready for the animaiton
        const titleText = new SplitType('.about-title', {
            types: 'words, charecters',
        });
        const parText = new SplitType('.about-paragraph', {
            types: 'words, charecters',
        });

        gsap.registerPlugin(ScrollTrigger);

        // about content animation
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.trigger,
                start: 'top 70%',
                toggleActions: 'restart none none reverse',
            },

            ease: 'power1.out',
        });

        tl.from('.char', {
            opacity: 0.3,
            y: '100%',
            stagger: {
                amount: 1,
            },
        });
        tl.to('.path', 1, {
            strokeDashoffset: 0,
        });
        tl.from(
            '.head',
            {
                opacity: 0,
            },
            '<'
        );
        tl.from(
            '.about-btn',
            1.2,
            {
                scale: 0.5,
                opacity: 0,
                ease: 'elastic.out',
            },
            '<.1'
        );
    }
}
