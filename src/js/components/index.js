import HeaderObject from './header/index.js';
import MenuAnimationObject from './header/menuhover.js';
import WindowObject from './header/window.js';
import Loader from './loader/index.js';
import MagneticObject from './magnetic.js';

export default class ComponentsObject {
    constructor() {
        this.Loader = new Loader();
        this.HeaderObject = new HeaderObject();
        this.WindowObject = new WindowObject();
        this.MagneticObject = new MagneticObject();
        this.MenuAnimationObject = new MenuAnimationObject();
    }
}
