import {REACT_COMPONENT} from '../../constants/var.js';
import strataLogo from './img/video.png';
import dreamGirl from './img/dreamGirl.jpg';
import skate from './img/skate.jpg';
import crazyGuitar from './img/crazyGuitar.jpg';
import ultrafioletGirl from './img/ultrafioletGirl.jpg';
import japan from './img/japan.jpg';

class WorkWithUs {
    render(logo, video, text) {
        let htmlContent = ` 
        <div class="work-with-us__react-container react-component _invisible" id="strataComponent">
            <div class="react-component__dinamic-block-container">
                <img src=${logo} alt="" class="react-component__img-strata">
                <div class="react-component__video-container">
                    <div class="react-component__video" id="player">
                       ${video}
                    </div>
                </div>
                <p class="react-component__text">${text}</p>
                <button class="hidden-loginova__button dinamic-button react-component__btn">
                    <div class="dinamic-button__subdiv"></div>
                    <div class="dinamic-button__subdiv"></div>
                    <div class="dinamic-button__subdiv"></div>
                    <div class="dinamic-button__subdiv"></div>
                    <p class="dinamic-button__p">Подробнее</p>
                </button>
            </div>
        </div>
        `;
    
        REACT_COMPONENT.innerHTML = htmlContent;
    }

    open(logo, video, text) {
        this.render(logo,video, text);
        document.querySelector('.react-component').classList.add('_open');
    }

    addListenerForChangingComponents() {
        let strata = document.getElementById('strata');
        let manue = document.getElementById('manue');
        let serenity = document.getElementById('serenity');
        let prostor = document.getElementById('prostor');
        let malina = document.getElementById('malina');
        let dragon = document.getElementById('dragon');
        strata.addEventListener('click', () => {
            this.open(strataLogo, `<iframe width="420" height="260" src="https://www.youtube.com/embed/127ro3k-IZo" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `Итальянский производитель и поставщик одежды, основанный в 1974 году. 
            Является поставщиком дизайнерской одежды во всём мире. Штаб-квартира компании располагается в Барселоне.`)
        });
        manue.addEventListener('click', () => {
            this.open(dreamGirl, `<iframe width="560" height="315" src="https://www.youtube.com/embed/jyetqrX2hYA"
             title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
             gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!`)
        });
        serenity.addEventListener('click', () => {
            this.open(skate, `<iframe width="420" height="260" src="https://www.youtube.com/embed/127ro3k-IZo" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum
             voluptates est eligendi possimus? Tempore!`)
        });
        prostor.addEventListener('click', () => {
            this.open(crazyGuitar, `<iframe width="560" height="315" src="https://www.youtube.com/embed/jyetqrX2hYA"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!')
        });
        malina.addEventListener('click', () => {
            this.open(ultrafioletGirl, `<iframe width="420" height="260" src="https://www.youtube.com/embed/127ro3k-IZo" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum voluptates 
            est eligendi possimus? Tempore!`)
        });
        dragon.addEventListener('click', () => {
            this.open(japan, `<iframe width="560" height="315" src="https://www.youtube.com/embed/jyetqrX2hYA"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!')
        });
    };
};

export default new WorkWithUs();
