import Swiper, {Navigation, Autoplay, EffectFade} from 'swiper';
Swiper.use([Navigation, Autoplay, EffectFade]);
import {ROOT_SWIPER_LOGINOVA} from '../../constants/var.js';
import firstLoginova from './img/firstLoginova.png';
import secondLoginova from './img/secondLoginova.png';
import thirdLoginova from './img/thirdLoginova.png';
import vector from './img/Vector.svg';
import shoesImg from '../workWithUs/levinaImg/shoes.png';
import smileImg from '../workWithUs/levinaImg/smile.png';
import ultrafioletImg from '../workWithUs/levinaImg/ultrafiolet.png';
import michael from '../workWithUs/larionovImg/michael.png';
import uglyGuy from '../workWithUs/larionovImg/uglyGuy.png';
import singingAfro from '../workWithUs/larionovImg/singingAfro.png';
import guitar from '../workWithUs/belovImg/guitar.png';
import crazy from '../workWithUs/belovImg/crazy.png';
import perfectGuy from '../workWithUs/belovImg/perfectGuy.png';

class MySwiper {
    render(firstImg, SecondImg, thirdImg) {
        let htmlContent = ` 
        <div class="swiper-slider" id="sliderLoginova">
            <div class="swiper-container swiper-slider__container">
                <div class="swiper-wrapper swiper-slider__wrapper">
                    <div class="swiper-slide swiper-slider__slide">
                        <div class="swiper-slider__img-container">
                            <div class="swiper-slider__prev">
                                <img src=${vector} alt="vector">
                            </div>
                            <div class="swiper-slider__left-part"></div>
                            <img src=${firstImg} alt="">
                            <div class="swiper-slider__right-part"></div>
                            <div class="swiper-slider__next">
                                <img src=${vector} alt="vector">
                            </div>
                            <div class="swiper-slider__closer-container" data-closer="true">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M10.008 9.728V15.744H7.032V9.728H0.92L0.92 6.752H7.032V0.735998H10.008V6.752L16.12 6.752V9.728H10.008Z"/>
                                </svg> 
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-slider__slide">
                        <div class="swiper-slider__img-container">
                            <div class="swiper-slider__prev">
                                <img src=${vector} alt="vector">
                            </div>
                            <div class="swiper-slider__left-part"></div>
                            <img src=${SecondImg} alt="">
                            <div class="swiper-slider__right-part "></div>
                            <div class="swiper-slider__next">
                                <img src=${vector} alt="vector">
                            </div>
                            <div class="swiper-slider__closer-container" data-closer="true">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.008 9.728V15.744H7.032V9.728H0.92L0.92 6.752H7.032V0.735998H10.008V6.752L16.12 6.752V9.728H10.008Z"/>
                                </svg> 
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-slider__slide">
                        <div class="swiper-slider__img-container">
                            <div class="swiper-slider__prev">
                                <img src=${vector} alt="vector">
                            </div>
                            <div class="swiper-slider__left-part"></div>
                            <img src=${thirdImg} alt="">
                            <div class="swiper-slider__right-part"></div>
                            <div class="swiper-slider__next">
                                <img src=${vector} alt="vector">
                            </div>
                            <div class="swiper-slider__closer-container" data-closer="true">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.008 9.728V15.744H7.032V9.728H0.92L0.92 6.752H7.032V0.735998H10.008V6.752L16.12 6.752V9.728H10.008Z"/>
                                </svg> 
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
            <div class="comeback__svg-container swiper-slider__return-block"  data-closer="true">
                <svg width="53" height="58" viewBox="0 0 53 58" fill="none" xmlns="http://www.w3.org/2000/svg" class="comeback__svg-circle">
                    <path d="M0.244728 18.3909C2.59716 12.2852 6.90585 7.21949 12.4367 4.05685C17.9675 0.894198 24.3782 -0.169687 30.5765 1.04647C36.7748 2.26262 42.3772 5.68356 46.4292 10.7264C50.4811 15.7693 52.7318 22.122 52.7979 28.7022C52.8639 35.2824 50.7412 41.6829 46.7913 46.8132C42.8415 51.9434 37.309 55.486 31.1364 56.8373C24.9639 58.1886 18.5332 57.2651 12.9401 54.2239C7.34706 51.1828 2.93765 46.2123 0.463198 40.1594L1.57213 39.6659C3.93715 45.4511 8.15156 50.2018 13.4973 53.1084C18.843 56.0151 24.9893 56.8978 30.8889 55.6062C36.7884 54.3147 42.0763 50.9288 45.8514 46.0254C49.6266 41.122 51.6554 35.0045 51.5923 28.7153C51.5292 22.4262 49.378 16.3544 45.5053 11.5345C41.6326 6.71472 36.2779 3.44506 30.3537 2.2827C24.4295 1.12033 18.3023 2.13716 13.0161 5.15994C7.72986 8.18272 3.61172 13.0244 1.36333 18.8601L0.244728 18.3909Z"/>
                </svg>
                <svg width="94" height="24" viewBox="0 0 94 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="comeback__svg-line">
                    <path d="M0.939827 10.9628C0.354042 11.5486 0.354042 12.4983 0.939827 13.0841L10.4858 22.63C11.0716 23.2158 12.0213 23.2158 12.6071 22.63C13.1929 22.0442 13.1929 21.0945 12.6071 20.5087L4.12181 12.0234L12.6071 3.53815C13.1929 2.95236 13.1929 2.00262 12.6071 1.41683C12.0213 0.831042 11.0716 0.831041 10.4858 1.41683L0.939827 10.9628ZM93.5332 10.5234L2.00049 10.5234L2.00049 13.5234L93.5332 13.5234L93.5332 10.5234Z"/>
                </svg>                                
            </div>   
        </div>
        `;
    
        ROOT_SWIPER_LOGINOVA.innerHTML = htmlContent;
    };

    addInitialization() {     
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 1,
            speed: 600,
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-slider__next',
              prevEl: '.swiper-slider__prev',
            },
            effect: 'fade',
          });
    };

    open() {
        let swiperInits = document.querySelectorAll('._start-slider');
        for(let elem of swiperInits) {
            elem.addEventListener('click', (event) => {
                if(event.target.closest('[data-loginova="true"]')) {
                    this.render(firstLoginova, secondLoginova, thirdLoginova) 
                } else if (event.target.closest('[data-levina="true"]')) {
                    this.render(shoesImg, smileImg, ultrafioletImg)
                } else if (event.target.closest('[data-larionov="true"]')) {
                    this.render(michael, uglyGuy, singingAfro)
                } else if (event.target.closest('[data-belov="true"]')) {
                    this.render(guitar, perfectGuy, crazy)
                };
                this.addInitialization();
                document.getElementById('sliderLoginova').classList.add('_open');
            });
        };
    };

    close() {
        document.addEventListener('click', (event) => {
            let target = event.target;
            if(target.closest('[data-closer="true"]')) {
                document.getElementById('sliderLoginova').classList.remove('_open') 
                setTimeout( ()=> {
                    ROOT_SWIPER_LOGINOVA.innerHTML = '';
                },300);
            };
        });
    };
};

export default new MySwiper();