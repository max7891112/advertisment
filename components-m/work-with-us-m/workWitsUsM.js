import strataLogo from '../../components/workWithUs/img/strata.png'
import dreamGirl from '../../components/workWithUs/img/dreamGirl.jpg'
import skate from '../../components/workWithUs/img/skate.jpg'
import crazyGuitar from '../../components/workWithUs/img/crazyGuitar.jpg'
import ultrafioletGirl from '../../components/workWithUs/img/ultrafioletGirl.jpg'
import japan from '../../components/workWithUs/img/japan.jpg'

class WorkWithUsM {
    render(logo, text, href) {
        let container = document.querySelector('.work-with-us-m__content-container')
        container.innerHTML = '';
        let htmlContent = ` 
        <div class="work-with-us-m__react-container">
            <div class="work-with-us-m__img-container">
                <img src=${logo} alt="logo">
            </div>
            <p class="work-with-us-m__p">
                ${text}
            </p>
            <a href=${href} class="button-dinamic-m button-dinamic-m_blue">Подробнее
                <div class="button-dinamic-m__1"></div>
                <div class="button-dinamic-m__2"></div>
                <div class="button-dinamic-m__3"></div>
                <div class="button-dinamic-m__4"></div>
                <div class="button-dinamic-m__5"></div>
                <div class="button-dinamic-m__6"></div>
                <div class="button-dinamic-m__7"></div>
                <div class="button-dinamic-m__8"></div>
            </a>
            <a href=${href} class="button-dinamic button-dinamic_blue hidden">Подробнее
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
        `;
    
        container.innerHTML = htmlContent;
    }

    open(logo, image, text, href) {
        this.render(logo, image, text, href);
        document.querySelector('.work-with-us-m__react-container').classList.add('_open');
        this.changeButton()
    }

    addListenerForChangingComponents() {
        let strata = document.querySelector('#strataM');
        let manue = document.querySelector('#manueM');
        let serenity = document.querySelector('#serenityM');
        let prostor = document.querySelector('#prostorM');
        let malina = document.querySelector('#malinaM');
        let dragon = document.querySelector('#dragonM');
        let allButtons = document.querySelectorAll('.work-with-us-m__item')
        strata.addEventListener('click', () => {
            for(let button of allButtons) {
                button.classList.remove('_active')
                button.setAttribute('data-active', 'false')
            }
            strata.classList.add('_active');
            strata.setAttribute('data-active', 'true')
            this.open(strataLogo,'Итальянский производитель и поставщик одежды, основанный в 1974 году.', '#')
        });
        manue.addEventListener('click', () => {
            for(let button of allButtons) {
                button.classList.remove('_active')
                button.setAttribute('data-active', 'false')
            }
            manue.classList.add('_active');
            manue.setAttribute('data-active', 'true')
            this.open(dreamGirl,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, mollitia.', '#')
        });
        serenity.addEventListener('click', () => {
            for(let button of allButtons) {
                button.classList.remove('_active')
                button.setAttribute('data-active', 'false')
            }
            serenity.classList.add('_active');
            serenity.setAttribute('data-active', 'true')
            this.open(skate,'Итальянский производитель и поставщик одежды, основанный в 1974 году.', '#')
        });
        prostor.addEventListener('click', () => {
            for(let button of allButtons) {
                button.classList.remove('_active')
                button.setAttribute('data-active', 'false')
            }
            prostor.classList.add('_active');
            prostor.setAttribute('data-active', 'true')
            this.open(crazyGuitar,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, mollitia.', '#')
        });
        malina.addEventListener('click', () => {
            for(let button of allButtons) {
                button.classList.remove('_active')
                button.setAttribute('data-active', 'false')
            }
            malina.classList.add('_active');
            malina.setAttribute('data-active', 'true')
            this.open(ultrafioletGirl,'Итальянский производитель и поставщик одежды, основанный в 1974 году.', '#')
        });
        dragon.addEventListener('click', () => {
            for(let button of allButtons) {
                button.classList.remove('_active')
                button.setAttribute('data-active', 'false')
            }
            dragon.classList.add('_active');
            dragon.setAttribute('data-active', 'true')
            this.open(japan,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, mollitia.', '#')
        });
    };

    changeButton() {
        window.addEventListener('resize', (event) => {
            let currentSize = event.currentTarget.innerWidth
            let container = document.querySelector('.work-with-us-m__react-container')
            let buttonM = container.querySelector('.button-dinamic-m')
            let button = container.querySelector('.button-dinamic')
            if(currentSize > 500) {
                buttonM.classList.add('hidden')
                button.classList.remove('hidden')
            } else {
                buttonM.classList.remove('hidden')
                button.classList.add('hidden')
            }
        })
    }
    
};

export default new WorkWithUsM();