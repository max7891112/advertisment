class OurTeam {
    addEL () {
        const wrapper = document.querySelector('.our-team__item-wrapper');
        const crest = document.querySelector('.our-team__btn-close');

        wrapper.addEventListener('click', function () {
            wrapper.classList.toggle('our-team__item-wrapper-animation');
        });

        document.addEventListener('click', function () {
            console.log(464684)
        })
    }
};

export default new OurTeam();