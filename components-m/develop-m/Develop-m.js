class DevelopM {

    constructor() {
        this.container = document.querySelector('.develop-m__card-container');
        this.dataArr = [['1. Заявка от бренда:', 'Приходит заказ от бренда. Например, у него выходит новый продукт, который надо поддержать инфлюенс-маркетингом.',
        '2. Подборка блогеров:','Мы подбираем блогеров с разными, но релевантными аудиториями, показываем и согласуем подборк с клиентом.',
        '3. Разработка стратегии:', 'Мы определяем, какие типы инфлюенсеров соответствуют задаче, аудитории и бренду клиента. Подбираем площадки и форматы рекламного материала.'],
         ['1. Заявка от бренда:', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quisquam.',
         '2. Подборка блогеров:','Мы подбираем блогеров с разными, но релевантными аудиториями, показываем и согласуем подборк с клиентом.',
         '3. Разработка стратегии:', 'Мы определяем, какие типы инфлюенсеров соответствуют задаче, аудитории и бренду клиента. Подбираем площадки и форматы рекламного материала.'],
        ['1. Заявка от бренда:', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quisquam.',
        '2. Подборка блогеров:','Мы подбираем блогеров с разными, но релевантными аудиториями, показываем и согласуем подборк с клиентом.',
        '3. Разработка стратегии:', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quisquam.']]
    }

    render(titleFirst,textFirst,titleSecond,textSecond,titleThird,textThird) {
        this.container.innerHTML = `
            <div class="develop-m__wrapper">
                <div class="develop-m__card">
                    <h3 class="develop-m__card-title">${titleFirst}</h3>
                    <p class="develop-m__card-p">${textFirst}</p>
                </div>
                <div class="develop-m__card">
                    <h3 class="develop-m__card-title">${titleSecond}</h3>
                    <p class="develop-m__card-p">${textSecond}</p>
                </div>
                <div class="develop-m__card">
                    <h3 class="develop-m__card-title">${titleThird}</h3>
                    <p class="develop-m__card-p">${textThird}</p>
                </div>
            </div>
        `
    }

    open(elem,elemArr,titleFirst,textFirst,titleSecond,textSecond,titleThird,textThird) {
        if(elem.classList.contains('develop-m__item-active')) {
            this.container.classList.remove('develop-m__active');
            setTimeout(() => {
                this.container.innerHTML = ''
            },300)
            
            elem.classList.remove('develop-m__item-active')
            return
        }
        
        for(let elem of elemArr) {
            elem.classList.remove('develop-m__item-active')
        }
        if(!this.container.classList.contains('develop-m__active')) {
            this.container.classList.add('develop-m__active');
        }
        
        elem.classList.add('develop-m__item-active');
        this.render(titleFirst,textFirst,titleSecond,textSecond,titleThird,textThird)
        this.container.querySelector('.develop-m__wrapper').classList.add('_open')
    }

    addEvListener() {
        let items = document.querySelectorAll('.develop-m__menu-item');
        items.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.open(item, items, ...this.dataArr[index])
            })
        });
    };
};

export default new DevelopM();