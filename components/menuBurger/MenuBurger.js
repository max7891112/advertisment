import logo from '../menuBurger/img/logo.svg';
import mich0 from '../menuBurger/img/mich0.png';
import mich1 from '../menuBurger/img/mich1.png';
import mich2 from '../menuBurger/img/mich2.png';
import mich3 from '../menuBurger/img/mich3.png';
import mich4 from '../menuBurger/img/mich4.png';

class MenuBurger {
    constructor() {
        this.content = document.querySelector('.content');
        this.michIsReady = false;
    }

    render(){
        let REACT_MENU = document.querySelector('.menu-burger')
        let htmlContent = '';
        htmlContent = ` 
            <div class="menu-burger__visible-elem">
            <div class="menu-burger__icon">
                <span></span>
            </div>
            </div>
            <div class="menu-burger__main-container">
                <a href="#" ><img src=${logo} alt="logo" class="menu-burger__logo _smooth-link" data-goto=".main-page"></a> 
                <nav class="menu-burger__navigation">
                    <ul class="menu-burger__container">
                        <li class="menu-burger__item"><a href="../../index.html#main-page" ><span>Главная</span></a></li>
                        <li class="menu-burger__item"><a href="../../index.html#our-service"><span>Наши услуги</span></a></li>
                        <li class="menu-burger__item"><a href="../../index.html#why"><span>Почему мы?</span></a></li>
                        <li class="menu-burger__item"><a href="../../index.html#work-with-us"><span>Рекламодатели</span></a></li>
                        <li class="menu-burger__item"><a href="../../index.html#our-team"><span>Наша команда</span></a></li>
                        <li class="menu-burger__item"><a href="../../index.html#cases"><span>Кейсы</span></a></li>
                        <li class="menu-burger__item"><a href="../../index.html#footer"><span>Контакты</span></a></li>
                    </ul>
                </nav>
                <div class="menu-burger__copyright">
                    <div class="menu-burger__line"></div>
                    <a href="https://vk.com/encendedor0111" target="_blank" class="menu-burger__michael-container">
                        <div class="menu-burger__img-container" data-mich-container="true">
                            <img src=${mich0} alt="michael" class="menu-burger__img _startMich">
                            <img src=${mich1} alt="michael" class="menu-burger__img hidden">
                            <img src=${mich2} alt="michael" class="menu-burger__img hidden">
                            <img src=${mich3} alt="michael" class="menu-burger__img hidden">
                            <img src=${mich4} alt="michael" class="menu-burger__img hidden _finishMich">
                        </div>
                        <p class="menu-burger__michael-name">Michael</p>
                    </a>
                    <div class="menu-burger__line"></div>
                </div>
            </div>
        `;
    
        REACT_MENU.innerHTML = htmlContent;
    }

    clickOnBurger() {
        let burger = document.querySelector('.menu-burger__visible-elem');
        let mainContainer = document.querySelector('.menu-burger__main-container');
        burger.addEventListener('click', () => {
            mainContainer.classList.add('visible');
        })
    }
    removeBurger() {
        let mainContainer = document.querySelector('.menu-burger__main-container');
        this.content.addEventListener('mouseover', () => {
            mainContainer.classList.remove('visible');
        });
    };
    changeImg() {  
        let startLinks = document.querySelectorAll('._startMich')
        let finishLinks = document.querySelectorAll('._finishMich')
        let imgs = document.querySelector('.menu-burger__michael-container').querySelectorAll('img')
        for(let link of startLinks) {
            link.addEventListener('mouseover', (event) => {
                if(!this.michIsReady) {
                    setTimeout(() => {
                        imgs[0].classList.add('hidden')
                        imgs[1].classList.remove('hidden')
                    },50)
                    setTimeout(() => {
                        imgs[1].classList.add('hidden')
                        imgs[2].classList.remove('hidden')
                    },100)
                    setTimeout(() => {
                        imgs[2].classList.add('hidden')
                        imgs[3].classList.remove('hidden')
                    },150)
                    setTimeout(() => {
                        imgs[3].classList.add('hidden')
                        imgs[4].classList.remove('hidden')
                        this.michIsReady = true
                    },200)
                };
            });
        }

        for(let link of finishLinks) {
            link.addEventListener('mouseout', (event) => {
                if(this.michIsReady) {
                    setTimeout(() => {
                        imgs[4].classList.add('hidden')
                        imgs[3].classList.remove('hidden')
                    },50)
                    setTimeout(() => {
                        imgs[3].classList.add('hidden')
                        imgs[2].classList.remove('hidden')
                    },100)
                    setTimeout(() => {
                        imgs[2].classList.add('hidden')
                        imgs[1].classList.remove('hidden')
                    },150)
                    setTimeout(() => {
                        imgs[1].classList.add('hidden')
                        imgs[0].classList.remove('hidden')
                        this.michIsReady = false
                    },200)
                };
            });
        }
        

        
    };

    smoothNavigation() {
        let menuLinks = document.querySelectorAll('._smooth-link[data-goto]');
        if(menuLinks.length != 0) {
            for(let menuLink of menuLinks) {
                menuLink.addEventListener('click', (event) => {
                    let target = event.target;
                    if(target.dataset.goto) {
                        const gotoBlock = document.querySelector(target.dataset.goto)
                        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

                        window.scrollTo({
                            top: gotoBlockValue,
                            behavior: 'smooth'
                        })
                        event.preventDefault();
                    }
                })              
            }
        }
    };
};

export default new MenuBurger();