export default class FooterData {
    constructor() {
        this.version = document.querySelector('.version-data');
        this.time = document.querySelector('.time-data');

        this.render();
    }

    render() {
        // setting local time
        const local = new Date();
        let minits = local.getMinutes();
        let hours = local.getHours();

        // maing period pm and am
        let period = hours > 12 ? 'PM' : 'AM';
        // foramating minites below 10
        minits = minits < 10 ? `0${minits}` : minits;
        // making 12h formate
        hours = hours > 12 ? hours - 12 : hours;
        // foramating hours below 10
        hours = hours < 10 ? `0${hours}` : hours;

        this.time.textContent = `${hours}:${minits} ${period}`;

        // setting year version
        let year = local.getFullYear();
        this.version.innerHTML = `${year} © Edition`;

        setInterval(() => {
            this.time.textContent = `${hours}:${minits} ${period}`;
            console.log('g');
        }, 59000);
    }
}
