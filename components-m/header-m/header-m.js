import mich0 from '../../components/menuBurger/img/mich0.png'
import logo from '../../components/menuBurger/img/logo.svg'
class HeaderM {

    constructor() {
        this.REACT_MENU = document.querySelector('.header-m__react-menu')
    }

    render(){
        let htmlContent = '';
        htmlContent = ` 
        <div class="header-m__wrapper">
            <div class="header-m__burger-container">
                <div class="header-m__logo-burger">
                    <img src=${logo} alt="logo">
                </div>
                <nav class="header-m__navigation">
                    <ul class="header-m__list">
                        <li><a href="../../index.html#main-page" ><span>Главная</span></a></li>
                        <li><a href="../../index.html#our-service"><span>Наши услуги</span></a></li>
                        <li><a href="../../index.html#why"><span>Почему мы?</span></a></li>
                        <li><a href="../../index.html#work-with-us"><span>Рекламодатели</span></a></li>
                        <li><a href="../../index.html#our-team"><span>Наша команда</span></a></li>
                        <li><a href="../../index.html#cases"><span>Кейсы</span></a></li>
                        <li><a href="../../index.html#footer"><span>Контакты</span></a></li>
                    </ul>
                </nav>
                <div class="header-m__copyright">
                    <div class="header-m__line"></div>
                    <a href="https://vk.com/encendedor0111" target="_blank" class="header-m__mich">
                        <div class="header-m__img-container">
                            <img src=${mich0} alt="michael">
                        </div>
                        <p class="header-m__michael-name">Michael</p>
                    </a>
                    <div class="header-m__line"></div>
                </div>
            </div>
        </div>
            
        `;
    
        this.REACT_MENU.innerHTML = htmlContent;
    }

    clickOnBurger() {
        let content = document.querySelector('body')
        let burger = document.querySelector('.header-m__icon');
        burger.addEventListener('click', () => {
            if(!burger.classList.contains('_moving')) {
                this.render()
                let wrapper = document.querySelector('.header-m__wrapper')
                wrapper.classList.add('_open')
                burger.classList.add('_moving')
                content.style.overflow = 'hidden'
            } else {
                let wrapper = document.querySelector('.header-m__wrapper')
                wrapper.classList.remove('_open')
                burger.classList.remove('_moving')
                content.style.overflow = 'visible'
                setTimeout(() => {
                    this.REACT_MENU.innerHTML = ''
                }, 300)
                
            }
        })
    }
    removeBurger() {

    };
};

export default new HeaderM();