class MenuBurger {
    constructor() {
        this.content = document.querySelector('.content');
        this.burger = document.querySelector('.menu-burger__visible-elem');
        this.mainContainer = document.querySelector('.menu-burger__main-container');
        this.imgContainer = document.querySelector('.menu-burger__michael-container');
        this.imgs = this.imgContainer.querySelectorAll('img')
        this.michIsReady = false;
    }
    clickOnBurger() {
        this.burger.addEventListener('click', () => {
            this.mainContainer.classList.add('visible');
        })
    }
    removeBurger() {
        this.content.addEventListener('mouseover', () => {
            this.mainContainer.classList.remove('visible');
        });
    };
    changeImg() {  
        let startLinks = document.querySelectorAll('._startMich')
        let finishLinks = document.querySelectorAll('._finishMich')
        for(let link of startLinks) {
            link.addEventListener('mouseover', (event) => {
                if(!this.michIsReady) {
                    setTimeout(() => {
                        this.imgs[0].classList.add('hidden')
                        this.imgs[1].classList.remove('hidden')
                    },50)
                    setTimeout(() => {
                        this.imgs[1].classList.add('hidden')
                        this.imgs[2].classList.remove('hidden')
                    },100)
                    setTimeout(() => {
                        this.imgs[2].classList.add('hidden')
                        this.imgs[3].classList.remove('hidden')
                    },150)
                    setTimeout(() => {
                        this.imgs[3].classList.add('hidden')
                        this.imgs[4].classList.remove('hidden')
                        this.michIsReady = true
                    },200)
                };
            });
        }

        for(let link of finishLinks) {
            link.addEventListener('mouseout', (event) => {
                if(this.michIsReady) {
                    setTimeout(() => {
                        this.imgs[4].classList.add('hidden')
                        this.imgs[3].classList.remove('hidden')
                    },50)
                    setTimeout(() => {
                        this.imgs[3].classList.add('hidden')
                        this.imgs[2].classList.remove('hidden')
                    },100)
                    setTimeout(() => {
                        this.imgs[2].classList.add('hidden')
                        this.imgs[1].classList.remove('hidden')
                    },150)
                    setTimeout(() => {
                        this.imgs[1].classList.add('hidden')
                        this.imgs[0].classList.remove('hidden')
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