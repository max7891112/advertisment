class Footer {
    addEventListener() {
        const fon = document.querySelector('.footer__map-opacity');
        const label = document.querySelector('.footer__map-logo');

        document.addEventListener('click', (event) => {
            
            if(event.target == fon || event.target == label) {
                fon.parentNode.removeChild(fon);
                label.parentNode.removeChild(label);
            };
        });
    }
}

export default new Footer();