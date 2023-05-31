class OurTeam {
    addEL () {
        const itemsTeam = document.querySelector('.our-team__items');
        const ourTeam = document.querySelector('.our-team');
        const wrapperBlock = document.querySelectorAll('.our-team__item-wrapper');
        const wrapperImg = document.querySelectorAll('.our-team__img-wrapper');
        const itemInfo = document.querySelectorAll('.our-team__item-info');
        const prevInfo = document.querySelectorAll('.our-team__prev-info');
        const closeBtn = document.querySelectorAll('.our-team__btn');

        ourTeam.addEventListener('click', event => {
            
           if ( !event.composedPath().includes(itemsTeam) ) {

                for(let i = 0; i < wrapperBlock.length; i++) {
                    wrapperBlock[i].classList.add('our-team__item-wrapper-animation__wrapper-item');
                    wrapperImg[i].classList.add('our-team__item-wrapper-animation');
                    itemInfo[i].classList.add('our-team__item-wrapper-animation__item-info');
                    prevInfo[i].classList.add('our-team__item-wrapper-animation__prev-info');
                };
            };
        });

        for (let i = 0; i < wrapperBlock.length; i++) { 

            wrapperBlock[i].addEventListener('click', () => {

                if( wrapperBlock[i].classList.contains('our-team__item-wrapper-animation__wrapper-item') ) {

                    for(let i = 0; i < wrapperBlock.length; i++) {
                        wrapperBlock[i].classList.add('our-team__item-wrapper-animation__wrapper-item');
                        wrapperImg[i].classList.add('our-team__item-wrapper-animation');
                        itemInfo[i].classList.add('our-team__item-wrapper-animation__item-info');
                        prevInfo[i].classList.add('our-team__item-wrapper-animation__prev-info');
                    };
                };

                wrapperBlock[i].classList.toggle('our-team__item-wrapper-animation__wrapper-item');
                wrapperImg[i].classList.toggle('our-team__item-wrapper-animation');
                itemInfo[i].classList.toggle('our-team__item-wrapper-animation__item-info');
                prevInfo[i].classList.toggle('our-team__item-wrapper-animation__prev-info');
            });
        };

        for (let i = 0; i < closeBtn.length; i++) {
            
            closeBtn[i].addEventListener('mouseover', () => {
                closeBtn[i].classList.add('our-team__item-wrapper-animation__close-btn');
            });
            
        };

        for (let i = 0; i < closeBtn.length; i++) {
            
            closeBtn[i].addEventListener('mouseout', () => {
                closeBtn[i].classList.remove('our-team__item-wrapper-animation__close-btn');
            });

        };
    }

    // tryImg() {
    //     let wrapperTryImg = document.querySelector('.try-img__wrapper');
    //     let imgTryImg = document.querySelector('.try-img__img');

    //     console.log(wrapperTryImg, imgTryImg);

    //     document.addEventListener('click', function () {
    //         wrapperTryImg.classList.toggle('try-img__wrapper-animation-wrap');
    //         imgTryImg.classList.toggle('try-img__wrapper-animation-img');
    //     });
    // }
};

export default new OurTeam();