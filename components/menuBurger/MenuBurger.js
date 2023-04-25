
class MenuBurger {
    constructor() {
        this.content = document.querySelector('.content');
        this.burger = document.querySelector('.menu-burger__visible-elem');
        this.mainContainer = document.querySelector('.menu-burger__main-container');
        this.imgContainer = document.querySelector('.menu-burger__img-container');
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
        let func = (img, j) => {
            setTimeout(function() {
                if(img.previousElementSibling) {
                    img.previousElementSibling.classList.add('hidden')
                }
                img.classList.remove('hidden')
            },100 * j)
            
        }
        for(let i = 0; i < this.imgContainer.children.length; i++) {
            func(this.imgContainer.children[i], i + 1) 
        }
    }
}

export default new MenuBurger();