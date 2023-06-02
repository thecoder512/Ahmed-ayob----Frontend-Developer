import HeroImg from './heroImg.js';
import HeroAnimation from './heroanimation.js';
export default class HeroSection {
    constructor() {
        this.HeroImg = new HeroImg();
        this.HeroAnimation = new HeroAnimation();
    }
}
