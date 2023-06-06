import { ScrollTrigger, gsap } from 'gsap/all';

export default class sliderObject {
    constructor() {
        this.slider = document.querySelector('.slider');

        this.sliderAnimation();
    }

    sliderAnimation() {
        gsap.registerPlugin(ScrollTrigger);

        // the slider animation trigger
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.slider-section',
                start: '0% 80%',
                end: '0% -80%',
                scrub: 1,
                ease: 'none',
            },
        });

        tl.to('.sliderone', { x: 90, rotation: 0.01 });
        tl.to('.slidertwo', { x: -450, rotation: 0.01 }, '<');
    }
}
