import CardHoverEffect from './cardhover.js';
import SliderSystem from './slidersystem.js';
import WorkAnimation from './workanimation.js';

export default class WorksSection {
    constructor() {
        this.WorkAnimation = new WorkAnimation();
        this.SliderSystem = new SliderSystem();
        this.CardHoverEffect = new CardHoverEffect();
    }
}
