class Cases {
    
    addEventListener() {
        const items = document.querySelectorAll('.cases__wrapper-block');
        const names = document.querySelectorAll('.cases__name');
        const arrows = document.querySelectorAll('.cases__arrow');

        // items.addEventListener('mouseover', () => {
        //     items.classList.add('cases-animation__wrapper-block-active');
        // });

        // items.addEventListener('mouseout', () => {
        //     items.classList.remove('cases-animation__wrapper-block-active');
        // });
        

        for (let i = 0; i < items.length; i++) {

            if(i == 0) {
                items[i].addEventListener('mouseover', () => {

                    names[i].classList.add('cases-animation__name');
                    arrows[i].classList.add('cases-animation__arrow');
                    
                    items[i + 1].classList.remove('cases-animation__wrapper-block-immutable');
                    items[i + 1].classList.add('submassive');// для того чтобы flex-shrink корректно
                    items[i].classList.add('cases-animation__wrapper-block-active'); // анимировалась там, где надо 
                });

                items[i].addEventListener('mouseout', () => {

                    names[i].classList.remove('cases-animation__name');
                    arrows[i].classList.remove('cases-animation__arrow');

                    items[i].classList.remove('cases-animation__wrapper-block-active');

                    items[i + 3].classList.add('cases-animation__wrapper-block-immutable');
                    items[i + 2].classList.add('cases-animation__wrapper-block-immutable');
                    items[i + 1].classList.add('cases-animation__wrapper-block-immutable');
                    items[i].classList.add('cases-animation__wrapper-block-immutable');

                    if ( items[i + 3].classList.contains('submassive') ) items[i + 3].classList.remove('submassive');
                    if ( items[i + 2].classList.contains('submassive') ) items[i + 2].classList.remove('submassive');
                    if ( items[i + 1].classList.contains('submassive') ) items[i + 1].classList.remove('submassive');
                    if ( items[i].classList.contains('submassive') ) items[i].classList.remove('submassive');

                });
            };

            if(i == 1) {
                items[i].addEventListener('mouseover', () => {

                    names[i].classList.add('cases-animation__name');
                    arrows[i].classList.add('cases-animation__arrow');
                    
                    items[i + 1].classList.remove('cases-animation__wrapper-block-immutable');
                    items[i + 1].classList.add('submassive');// для того чтобы flex-shrink корректно
                    items[i].classList.add('cases-animation__wrapper-block-active'); // анимировалась там, где надо 
                });

                items[i].addEventListener('mouseout', () => {

                    names[i].classList.remove('cases-animation__name');
                    arrows[i].classList.remove('cases-animation__arrow');

                    items[i].classList.remove('cases-animation__wrapper-block-active');

                    // items[i + 3].classList.add('cases-animation__wrapper-block-immutable');
                    items[i + 2].classList.add('cases-animation__wrapper-block-immutable');
                    items[i + 1].classList.add('cases-animation__wrapper-block-immutable');
                    items[i].classList.add('cases-animation__wrapper-block-immutable');

                    items[i + 2].classList.remove('submassive');
                    items[i + 1].classList.remove('submassive');
                    items[i - 1].classList.remove('submassive');
                    items[i].classList.remove('submassive');
                });
            };

            if(i == 2) {
                items[i].addEventListener('mouseover', () => {


                    names[i].classList.add('cases-animation__name');
                    arrows[i].classList.add('cases-animation__arrow');
                    
                    items[i + 1].classList.remove('cases-animation__wrapper-block-immutable');
                    items[i + 1].classList.add('submassive');// для того чтобы flex-shrink корректно
                    items[i].classList.add('cases-animation__wrapper-block-active'); // анимировалась там, где надо 
                });

                items[i].addEventListener('mouseout', () => {

                    names[i].classList.remove('cases-animation__name');
                    arrows[i].classList.remove('cases-animation__arrow');

                    items[i].classList.remove('cases-animation__wrapper-block-active');

                    items[i - 2].classList.add('cases-animation__wrapper-block-immutable');
                    items[i - 1].classList.add('cases-animation__wrapper-block-immutable');
                    items[i + 1].classList.add('cases-animation__wrapper-block-immutable');
                    items[i].classList.add('cases-animation__wrapper-block-immutable');

                    if ( items[i - 2].classList.contains('submassive') ) items[i - 2].classList.remove('submassive');
                    if ( items[i - 1].classList.contains('submassive') ) items[i - 1].classList.remove('submassive');
                    if ( items[i + 1].classList.contains('submassive') ) items[i + 1].classList.remove('submassive');
                    if ( items[i].classList.contains('submassive') ) items[i].classList.remove('submassive');
                });
            };

            if(i == 3) {
                items[i].addEventListener('mouseover', () => {

                    names[i].classList.add('cases-animation__name');
                    arrows[i].classList.add('cases-animation__arrow');

                    items[i - 1].classList.add('submassive');// для того чтобы flex-shrink корректно
                    items[i].classList.add('cases-animation__wrapper-block-active'); // анимировалась там, где надо 
                });

                items[i].addEventListener('mouseout', () => {

                    names[i].classList.remove('cases-animation__name');
                    arrows[i].classList.remove('cases-animation__arrow');

                    items[i].classList.remove('cases-animation__wrapper-block-active');

                    items[i - 3].classList.add('cases-animation__wrapper-block-immutable');
                    items[i - 2].classList.add('cases-animation__wrapper-block-immutable');
                    items[i - 1].classList.add('cases-animation__wrapper-block-immutable');
                    items[i].classList.add('cases-animation__wrapper-block-immutable');

                    if ( items[i - 2].classList.contains('submassive') ) items[i - 2].classList.remove('submassive');
                    if ( items[i - 1].classList.contains('submassive') ) items[i - 1].classList.remove('submassive');
                    if ( items[i - 3].classList.contains('submassive') ) items[i - 3].classList.remove('submassive');
                    if ( items[i].classList.contains('submassive') ) items[i].classList.remove('submassive');
                });
            };
        };
    }
}

export default new Cases();