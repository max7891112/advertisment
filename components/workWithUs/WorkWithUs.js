import {REACT_COMPONENT} from '../../constants/var.js';
import youtubeLightbox from '../../libs/youtubeLightbox/youtubeLightbox.js';
import strataLogo from './img/strata.png';
import dreamGirl from './img/dreamGirl.jpg';
import skate from './img/skate.jpg';
import crazyGuitar from './img/crazyGuitar.jpg';
import ultrafioletGirl from './img/ultrafioletGirl.jpg';
import japan from './img/japan.jpg';
import dreamingGuy from './img/dreamingGuy.png';
import eye from './img/eye.png';
import jumpGuy from './img/jumpGuy.png';
import oldPhone from './img/oldPhone.png';
import playingGuitar from './img/playingGuitar.png';
import playIcon from './img/play.svg';
import book from './img/book.png'
class WorkWithUs {
    render(logo, image, text, path, href) {
        REACT_COMPONENT.innerHTML = '';

        let htmlContent = '';
        htmlContent = ` 
        <div class="work-with-us__react-container react-component _invisible" id="strataComponent">
            <div class="react-component__dinamic-block-container">
                <div class="react-component__img-wrapper">
                    <img src=${logo} alt="" class="react-component__img-strata">
                </div>
                
                <div class="react-component__video-container">
                    <a class="react-component__link" data-youtubeLightbox="true">
                        <img src=${image} alt="#" class="react-component__img">
                        <img src=${playIcon} alt="#" class="_icon">
                    </a>
                </div>
                <p class="react-component__text">${text}</p>
                <a href=${href} class="button-dinamic button-dinamic_blue react-component__btn">Подробнее
                    <div class="button-dinamic__1"></div>
                    <div class="button-dinamic__2"></div>
                    <div class="button-dinamic__3"></div>
                    <div class="button-dinamic__4"></div>
                    <div class="button-dinamic__5"></div>
                    <div class="button-dinamic__6"></div>
                    <div class="button-dinamic__7"></div>
                    <div class="button-dinamic__8"></div>
                </a>
            </div>
            <div id="youtubelightbox" class="youtubelightbox" data-playing="false">
                <div class="youtubelightbox__centeredchild">
                    <div class="youtubelightbox__videowrapper">
                        <div id="youtubelightboxPlayer"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
    
        REACT_COMPONENT.innerHTML = htmlContent;
    }

    open(logo, image, text, path, href) {
        this.render(logo, image, text, path, href);
        document.querySelector('.react-component').classList.add('_open');
        this.addListenerForPrepareLightBox()
        // youtubeLightbox.connect('youtubelightbox', 'youtubelightboxPlayer', '.react-component__video-container')
    }

    addListenerForChangingComponents() {
        let strata = document.getElementById('strata');
        let manue = document.getElementById('manue');
        let serenity = document.getElementById('serenity');
        let prostor = document.getElementById('prostor');
        let malina = document.getElementById('malina');
        let dragon = document.getElementById('dragon');
        let allButtons = document.querySelectorAll('.work-with-us__item')
        strata.addEventListener('click', () => {
            for(let button of allButtons) {
                button.classList.remove('_active')
                button.setAttribute('data-active', 'false')
            }
            strata.classList.add('_active');
            strata.setAttribute('data-active', 'true')
            this.open(strataLogo, book, `Итальянский производитель и поставщик одежды, основанный в 1974 году. 
            Является поставщиком дизайнерской одежды во всём мире. Штаб-квартира компании располагается в Барселоне.`, 'https://www.youtube.com/watch?v=jyetqrX2hYA',
            "./components/workWithUs/loginova/loginova.html")
        });
        manue.addEventListener('click', () => {
            for(let button of allButtons) {
                button.classList.remove('_active')
                button.setAttribute('data-active', 'false')
            }
            manue.classList.add('_active');
            manue.setAttribute('data-active', 'true')
            this.open(dreamGirl, oldPhone, `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!`, 'https://www.youtube.com/watch?v=Z7wUyXJSHnk',
            "./components/workWithUs/levina/levina.html")
        });
        serenity.addEventListener('click', () => {
            for(let button of allButtons) {
                button.classList.remove('_active')
                button.setAttribute('data-active', 'false')
            }
            serenity.classList.add('_active');
            serenity.setAttribute('data-active', 'true')
            this.open(skate, dreamingGuy, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum
             voluptates est eligendi possimus? Tempore!`, 'https://www.youtube.com/watch?v=jyetqrX2hYA', "./components/workWithUs/larionov/larionov.html")
        });
        prostor.addEventListener('click', () => {
            for(let button of allButtons) {
                button.classList.remove('_active')
                button.setAttribute('data-active', 'false')
            }
            prostor.classList.add('_active');
            prostor.setAttribute('data-active', 'true')
            this.open(crazyGuitar, playingGuitar, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!', 'https://www.youtube.com/watch?v=Z7wUyXJSHnk',
            "./components/workWithUs/belov/belov.html")
        });
        malina.addEventListener('click', () => {
            for(let button of allButtons) {
                button.classList.remove('_active')
                button.setAttribute('data-active', 'false')
            }
            malina.classList.add('_active');
            malina.setAttribute('data-active', 'true')
            this.open(ultrafioletGirl, jumpGuy, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum voluptates 
            est eligendi possimus? Tempore!`, 'https://www.youtube.com/watch?v=jyetqrX2hYA', '#')
        });
        dragon.addEventListener('click', () => {
            for(let button of allButtons) {
                button.classList.remove('_active')
                button.setAttribute('data-active', 'false')
            }
            dragon.classList.add('_active');
            dragon.setAttribute('data-active', 'true')
            this.open(japan, eye, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!', 'https://www.youtube.com/watch?v=Z7wUyXJSHnk', "#")
        });
    };

    addListenerForPrepareLightBox() {
        let target = document.querySelector('.react-component__link')
        target.addEventListener('click', () => {
            let container = document.querySelector('.react-component__dinamic-block-container')
            if(!container.getAttribute('data-open-elem')) {
                container.classList.add('_increase');
                container.setAttribute('data-open-elem', 'true')
                document.querySelector('.work-with-us')
                    .classList.add('_increase');
            } else {
                REACT_COMPONENT.innerHTML = "";
                if(strata.getAttribute('data-active') == 'true') {
                    this.open(strataLogo, book, `Итальянский производитель и поставщик одежды, основанный в 1974 году. 
                        Является поставщиком дизайнерской одежды во всём мире. Штаб-квартира компании располагается в Барселоне.`, 'https://www.youtube.com/watch?v=jyetqrX2hYA',
                        "./components/workWithUs/loginova/loginova.html")
                } else if(manue.getAttribute('data-active') == 'true') {
                        this.open(dreamGirl, oldPhone, `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!`, 'https://www.youtube.com/watch?v=Z7wUyXJSHnk',
                        "./components/workWithUs/levina/levina.html")
                } else if(serenity.getAttribute('data-active') == 'true') {
                        this.open(skate, dreamingGuy, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum
                        voluptates est eligendi possimus? Tempore!`, 'https://www.youtube.com/watch?v=jyetqrX2hYA', "./components/workWithUs/larionov/larionov.html")
                } else if(prostor.getAttribute('data-active') == 'true') {
                        this.open(crazyGuitar, playingGuitar, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!', 'https://www.youtube.com/watch?v=Z7wUyXJSHnk',
                        "./components/workWithUs/belov/belov.html")
                } else if(malina.getAttribute('data-active') == 'true') {
                        this.open(ultrafioletGirl, jumpGuy, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum voluptates 
                        est eligendi possimus? Tempore!`, 'https://www.youtube.com/watch?v=jyetqrX2hYA', '#')
                } else {
                    this.open(japan, eye, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!', 'https://www.youtube.com/watch?v=Z7wUyXJSHnk', "#")
                };
            };
        });
    };
};

export default new WorkWithUs();
