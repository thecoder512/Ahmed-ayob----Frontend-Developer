import SliderSystem from './slidersystem.js';
import WorkAnimation from './workanimation.js';
export default class WorksSection {
    constructor() {
        this.WorkAnimation = new WorkAnimation();
        this.SliderSystem = new SliderSystem();
    }
}
