class DevelopM {
    addEvListener() {
        let items = document.querySelectorAll('.develop-m__menu-item');
        let container = document.querySelector('.develop-m__card-container');
        items[0].addEventListener('click', ()=> {
            if(items[0].classList.contains('develop-m__item-active')) {
                container.classList.remove('develop-m__active');
                setTimeout(() => {
                    container.innerHTML = ''
                },300)
                
                items[0].classList.remove('develop-m__item-active')
                return
            }
            
            for(let elem of items) {
                elem.classList.remove('develop-m__item-active')
            }
            if(!container.classList.contains('develop-m__active')) {
                container.classList.add('develop-m__active');
            }
            
            items[0].classList.add('develop-m__item-active');
            container.classList.add('develop-m__interstage')
            setTimeout(() => {
                container.classList.remove('develop-m__interstage')
            },150)
            container.innerHTML = `
                <div class="develop-m__card">
                    <h3 class="develop-m__card-title">1. Заявка от бренда:</h3>
                    <p class="develop-m__card-p">Приходит заказ от бренда. Например, у него выходит новый продукт, который надо поддержать инфлюенс-маркетингом. </p>
                </div>
                <div class="develop-m__card">
                    <h3 class="develop-m__card-title">2. Подборка блогеров:</h3>
                    <p class="develop-m__card-p">Мы подбираем блогеров с разными, но релевантными аудиториями, показываем и согласуем подборку    с клиентом.</p>
                </div>
                <div class="develop-m__card">
                    <h3 class="develop-m__card-title">3. Разработка стратегии:</h3>
                    <p class="develop-m__card-p">Мы определяем, какие типы инфлюенсеров соответствуют задаче, аудитории и бренду клиента. Подбираем площадки и форматы рекламного материала.</p>
                </div>
            `
            
        })

        items[1].addEventListener('click', ()=> {
            if(items[1].classList.contains('develop-m__item-active')) {
                container.classList.remove('develop-m__active');
                setTimeout(() => {
                    container.innerHTML = ''
                },300)
                
                items[1].classList.remove('develop-m__item-active')
                return
            }
            for(let elem of items) {
                elem.classList.remove('develop-m__item-active')
            }
            if(!container.classList.contains('develop-m__active')) {
                container.classList.add('develop-m__active');
            }
            items[1].classList.add('develop-m__item-active');
            container.classList.add('develop-m__interstage')
            setTimeout(() => {
                container.classList.remove('develop-m__interstage')
            },150)
            container.innerHTML = `
                <div class="develop-m__card">
                    <h3 class="develop-m__card-title">1. Заявка от бренда:</h3>
                    <p class="develop-m__card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quisquam.</p>
                </div>
                <div class="develop-m__card">
                    <h3 class="develop-m__card-title">2. Подборка блогеров:</h3>
                    <p class="develop-m__card-p">Мы подбираем блогеров с разными, но релевантными аудиториями, показываем и согласуем подборку    с клиентом.</p>
                </div>
                <div class="develop-m__card">
                    <h3 class="develop-m__card-title">3. Разработка стратегии:</h3>
                    <p class="develop-m__card-p">Мы определяем, какие типы инфлюенсеров соответствуют задаче, аудитории и бренду клиента. Подбираем площадки и форматы рекламного материала.</p>
                </div>
            `
            
        })

        items[2].addEventListener('click', ()=> {
            if(items[2].classList.contains('develop-m__item-active')) {
                container.classList.remove('develop-m__active');
                setTimeout(() => {
                    container.innerHTML = ''
                },300)
                
                items[2].classList.remove('develop-m__item-active')
                return
            }
            for(let elem of items) {
                elem.classList.remove('develop-m__item-active')
            }
            if(!container.classList.contains('develop-m__active')) {
                container.classList.add('develop-m__active');
            }
            items[2].classList.add('develop-m__item-active');
            container.classList.add('develop-m__interstage')
            setTimeout(() => {
                container.classList.remove('develop-m__interstage')
            },150)
            container.innerHTML = `
                <div class="develop-m__card">
                    <h3 class="develop-m__card-title">1. Заявка от бренда:</h3>
                    <p class="develop-m__card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quisquam.</p>
                </div>
                <div class="develop-m__card">
                    <h3 class="develop-m__card-title">2. Подборка блогеров:</h3>
                    <p class="develop-m__card-p">Мы подбираем блогеров с разными, но релевантными аудиториями, показываем и согласуем подборку    с клиентом.</p>
                </div>
                <div class="develop-m__card">
                    <h3 class="develop-m__card-title">3. Разработка стратегии:</h3>
                    <p class="develop-m__card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quisquam.</p>
                </div>
            `
            
        })
    };
};


export default new DevelopM();
// item.classList.add('develop-m__item-active');
// container.classList.add('develop-m__active');