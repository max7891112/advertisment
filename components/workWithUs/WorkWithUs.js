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
                
                <div class="react-component__video-container"  id="maybe">
                    <a href=${path} class="react-component__link" data-youtubeLightbox="true">
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
    }

    addListenerForChangingComponents() {
        let strata = document.getElementById('strata');
        let manue = document.getElementById('manue');
        let serenity = document.getElementById('serenity');
        let prostor = document.getElementById('prostor');
        let malina = document.getElementById('malina');
        let dragon = document.getElementById('dragon');
        strata.addEventListener('click', () => {
            this.open(strataLogo, book, `Итальянский производитель и поставщик одежды, основанный в 1974 году. 
            Является поставщиком дизайнерской одежды во всём мире. Штаб-квартира компании располагается в Барселоне.`, 'https://www.youtube.com/watch?v=jyetqrX2hYA',
            "./components/workWithUs/loginova/loginova.html")
        });
        manue.addEventListener('click', () => {
            this.open(dreamGirl, oldPhone, `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!`, 'https://www.youtube.com/watch?v=Z7wUyXJSHnk',
            "./components/workWithUs/levina/levina.html")
        });
        serenity.addEventListener('click', () => {
            this.open(skate, dreamingGuy, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum
             voluptates est eligendi possimus? Tempore!`, 'https://www.youtube.com/watch?v=jyetqrX2hYA', "./components/workWithUs/larionov/larionov.html")
        });
        prostor.addEventListener('click', () => {
            this.open(crazyGuitar, playingGuitar, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!', 'https://www.youtube.com/watch?v=Z7wUyXJSHnk',
            "./components/workWithUs/belov/belov.html")
        });
        malina.addEventListener('click', () => {
            this.open(ultrafioletGirl, jumpGuy, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi officia harum corporis explicabo laborum voluptates 
            est eligendi possimus? Tempore!`, 'https://www.youtube.com/watch?v=jyetqrX2hYA', '#')
        });
        dragon.addEventListener('click', () => {
            this.open(japan, eye, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, minima!', 'https://www.youtube.com/watch?v=Z7wUyXJSHnk', "#")
        });
    };

    // addListenerForConnectLightBox() {
        
    //     strata.addEventListener('click', () => {
    //         setTimeout(() => {
    //             setTimeout(() => {
    //                     youtubeLightbox.connect('youtubelightbox','youtubelightboxPlayer','.youtubelightbox__centeredchild')
    //                 },200)	
    //         },100);
    //     });


    // }
};

export default new WorkWithUs();