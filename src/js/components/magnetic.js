export default class MagneticObject {
    constructor() {
        this.domElement = [...document.querySelectorAll('.magnetic')];
        this.boundingClientRect;
        this.domElementText;
        this.domElementFill;
        this.magnetsStrength;
        this.magnetsStrengthText;

        this.mouseEnter();
        this.mouseMove();
        this.mouseLeave();
    }

    buttonMovement(element, event) {
        this.domElementText = element.querySelector('.btn-text');
        this.boundingClientRect = element.getBoundingClientRect();
        this.magnetsStrength = element.getAttribute('data-strength');
        this.magnetsStrengthText = element.getAttribute('data-strength-text');

        if (window.innerWidth > 540) {
            gsap.to(element, 1.5, {
                x:
                    ((event.clientX - this.boundingClientRect.left) /
                        element.offsetWidth -
                        0.5) *
                    this.magnetsStrength,
                y:
                    ((event.clientY - this.boundingClientRect.top) /
                        element.offsetHeight -
                        0.5) *
                    this.magnetsStrength,
                rotate: '0.001deg',
                ease: 'power4.out',
            });

            if (this.domElementText) {
                gsap.to(this.domElementText, 1.5, {
                    x:
                        ((event.clientX - this.boundingClientRect.left) /
                            element.offsetWidth -
                            0.5) *
                        this.magnetsStrengthText,
                    y:
                        ((event.clientY - this.boundingClientRect.top) /
                            element.offsetHeight -
                            0.5) *
                        this.magnetsStrengthText,
                    ease: 'power4.out',
                });
            }
        }
    }

    mouseEnter() {
        this.domElement.forEach((element) => {
            element.addEventListener('mouseenter', (event) => {
                this.domElementFill = element.querySelector('.btn-fill');
                this.buttonMovement(element, event);

                // if there is a fill layer do else not
                if (window.innerWidth > 540) {
                    if (this.domElementFill) {
                        gsap.to(this.domElementFill, 0.6, {
                            startAt: { y: '76%' },
                            y: '0%',
                            ease: 'power2.inout',
                        });
                    }
                }
                if (window.innerWidth > 540) {
                    gsap.to('.btn-c', 0.6, {
                        color: '#fff',
                        ease: 'power4.out',
                    });
                }
            });
        });
    }

    mouseMove() {
        this.domElement.forEach((element) => {
            element.addEventListener('mousemove', (event) => {
                this.buttonMovement(element, event);
            });
        });
    }

    mouseLeave() {
        this.domElement.forEach((element) => {
            element.addEventListener('mouseleave', () => {
                this.magnetButtontext = element.querySelector('.btn-text');
                this.magnetButtonfill = element.querySelector('.btn-fill');

                gsap.to(element, 1.5, {
                    x: 0,
                    y: 0,
                    ease: 'elastic.out',
                });

                if (this.magnetButtontext) {
                    gsap.to(this.magnetButtontext, 1.5, {
                        x: 0,
                        y: 0,
                        ease: 'elastic.out',
                    });
                }

                if (this.magnetButtonfill) {
                    gsap.to(this.magnetButtonfill, 0.6, {
                        y: '-76%',
                        ease: 'power2.inout',
                    });
                }

                if (window.innerWidth > 540) {
                    gsap.to('.btn-c', 0.6, {
                        color: '#1C1D20',
                        ease: 'power4.out',
                    });
                }
            });
        });
    }
}
