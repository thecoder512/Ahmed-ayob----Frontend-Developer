import AboutAnimation from './aboutsection/index.js';
import FooterSection from './footersecion/index.js';
import HeroSection from './hreosection/index.js';
import SliderSection from './slidersection/index.js';
import WorksSection from './workssection/index.js';

export default class HomePage {
    constructor() {
        this.HeroSection = new HeroSection();
        this.AboutAnimation = new AboutAnimation();
        this.WorksSection = new WorksSection();
        this.SliderSection = new SliderSection();
        this.FooterSection = new FooterSection();
    }
}
