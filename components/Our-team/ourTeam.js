class OurTeam {
    addEL () {
        const wrapper = document.querySelector('.our-team__img-wrapper');
        const itemInfo = document.querySelector('.our-team__item-info');
        const prevInfo = document.querySelector('.our-team__prev-info');

        wrapper.addEventListener('click', function () {
            wrapper.classList.toggle('our-team__item-wrapper-animation');
            itemInfo.classList.toggle('our-team__item-wrapper-animation__item-info');
            prevInfo.classList.toggle('our-team__item-wrapper-animation__prev-info');
        });



        document.addEventListener('click', function () {
            console.log(464684)
        })
    }

    tryImg() {
        let wrapperTryImg = document.querySelector('.try-img__wrapper');
        let imgTryImg = document.querySelector('.try-img__img');

        console.log(wrapperTryImg, imgTryImg);

        document.addEventListener('click', function () {
            wrapperTryImg.classList.toggle('try-img__wrapper-animation-wrap');
            imgTryImg.classList.toggle('try-img__wrapper-animation-img');
        });
    }
};

export default new OurTeam();