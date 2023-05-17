class Why {
    searchElem () {
        const items = document.querySelectorAll('.why__item');
        const pluse = document.querySelectorAll('.why__pluse');
        const whyBody = document.querySelector('.why__body');
        const whyH2 = document.querySelector('.why__h2');

        whyBody.addEventListener('click', (event) => {
            if(event.target == whyBody || event.target == whyH2) {

                for(let i = 0; i < items.length; i++) {
                    items[i].classList.remove('why__item-active');
                    pluse[i].classList.remove('why__pluse-rotate');
                }
            }
        });

        for(let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', (event) => {

                if( !items[i].classList.contains('why__item-active')) {
                    for(let item of items) {
                        item.classList.remove('why__item-active');
                    }
    
                    for(let item of pluse) {
                        item.classList.remove('why__pluse-rotate');
                    }
    
                    pluse[i].classList.add('why__pluse-rotate');
    
                    items[i].classList.add('why__item-active');

                    console.log(777);
                } else {
                    items[i].classList.remove('why__item-active');
                    pluse[i].classList.remove('why__pluse-rotate');
                };

            });

        };
    }
};

export default new Why();