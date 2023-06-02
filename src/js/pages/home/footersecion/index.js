import FooterAnimation from './footerAnimation.js';
import FooterData from './footerData.js';
import StaggerShape from './shapedors.js';

export default class FooterSection {
    constructor() {
        this.FooterAnimation = new FooterAnimation();
        this.StaggerShape = new StaggerShape();
        this.FooterData = new FooterData();
    }
}
