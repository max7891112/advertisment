class WhyM {
    addEventListener () {

        const items1 = document.querySelectorAll('.why-m__item-wrapper-1');
        const items2 = document.querySelectorAll('.why-m__item-wrapper-2');
        const textBoxes = document.querySelectorAll('.why-m__box-text');
        const crosses = document.querySelectorAll('.why-m__wrapper-cross');
        const numbersPages = document.querySelectorAll('.why-m__number-item');
        const arrowRight = document.querySelector('.why-m__arrow-right');
        const arrowLeft = document.querySelector('.why-m__arrow-left');
        const arrows = document.querySelector('.why-m__arrows');
        const slogans = document.querySelectorAll('.why-m__slogan-item');

        arrows.classList.add('element-hidden');

        function removeEL () {
            items1[0].classList.remove('immutable-item');
            items1[1].classList.remove('immutable-item');
            items2[0].classList.remove('immutable-item');
            items2[1].classList.remove('immutable-item');
            
            crosses.forEach( i => {
                i.classList.remove('element-immutable');
            })
        };

        function textBoxesClose (number) {
            textBoxes.forEach( (i, index) => {
                if(index !== number) {
                    i.classList.add('box-text-submassive');
                } else {
                    i.classList.remove('box-text-submassive');
                };
            });
        };

        function removeSubWithoutTarget (number) {
            textBoxes.forEach( (item, index) => {
                if(index !== number) {
                    item.classList.add('box-text-submassive');
                };
            } );

        };

        textBoxesClose(10);


        items1[0].addEventListener('click', () => {
            removeEL();

            const textElem = items1[0].querySelector('.box-text-submassive');

            if(textElem) {
                setTimeout( () => {
                    textElem.classList.remove('box-text-submassive');
                }, 200);
            }

            items1[0].classList.add('active-item');
            items1[1].classList.add('immutable-item');
            items2[0].classList.add('immutable-item');
            items2[1].classList.add('immutable-item');

            removeSubWithoutTarget(0);

            crosses[0].classList.add('element-immutable');

            numbersPages[1].classList.add('element-hidden');
            numbersPages[2].classList.add('element-hidden');
            numbersPages[3].classList.add('element-hidden');

            crosses[1].classList.add('element-hidden');
            crosses[2].classList.add('element-hidden');
            crosses[3].classList.add('element-hidden');

            numbersPages[0].classList.remove('element-hidden');
            crosses[0].classList.remove('element-hidden');

            textBoxesClose(0);

            arrows.classList.remove('element-hidden');
            
            slogans.forEach( i => {
                if( !i.classList.contains('element-hidden') )
                i.classList.add('element-hidden');
            });
        });

        items1[1].addEventListener('click', () => {
            removeEL();

            const textElem = items1[1].querySelector('.box-text-submassive');

            if(textElem) {
                setTimeout( () => {
                    textElem.classList.remove('box-text-submassive');
                }, 200);
            }

            items1[1].classList.add('active-item');
            items1[0].classList.add('immutable-item');
            items2[0].classList.add('immutable-item');
            items2[1].classList.add('immutable-item');

            removeSubWithoutTarget(1);

            crosses[3].classList.add('element-immutable');

            numbersPages[1].classList.add('element-hidden');
            numbersPages[2].classList.add('element-hidden');
            numbersPages[0].classList.add('element-hidden');

            crosses[1].classList.add('element-hidden');
            crosses[2].classList.add('element-hidden');
            crosses[0].classList.add('element-hidden');

            numbersPages[3].classList.remove('element-hidden');
            crosses[3].classList.remove('element-hidden');

            textBoxesClose(3);

            arrows.classList.remove('element-hidden');
            
            slogans.forEach( i => {
                if( !i.classList.contains('element-hidden') )
                i.classList.add('element-hidden');
            });
        });

        items2[0].addEventListener('click', () => {
            removeEL();

            const textElem = items2[0].querySelector('.box-text-submassive');

            if(textElem) {
                setTimeout( () => {
                    textElem.classList.remove('box-text-submassive');
                }, 200);
            }

            items1[0].classList.add('immutable-item');
            items1[1].classList.add('immutable-item');
            items2[0].classList.add('active-item');
            items2[1].classList.add('immutable-item');

            removeSubWithoutTarget(2);

            crosses[1].classList.add('element-immutable');

            numbersPages[0].classList.add('element-hidden');
            numbersPages[2].classList.add('element-hidden');
            numbersPages[3].classList.add('element-hidden');

            crosses[0].classList.add('element-hidden');
            crosses[2].classList.add('element-hidden');
            crosses[3].classList.add('element-hidden');

            numbersPages[1].classList.remove('element-hidden');
            crosses[1].classList.remove('element-hidden');

            textBoxesClose(1);

            arrows.classList.remove('element-hidden');
            
            slogans.forEach( i => {
                if( !i.classList.contains('element-hidden') )
                i.classList.add('element-hidden');
            });
        });

        items2[1].addEventListener('click', () => {
            removeEL();

            const textElem = items2[1].querySelector('.box-text-submassive');

            if(textElem) {
                setTimeout( () => {
                    textElem.classList.remove('box-text-submassive');
                }, 200);
            }

            items1[0].classList.add('immutable-item');
            items1[1].classList.add('immutable-item');
            items2[0].classList.add('immutable-item');
            items2[1].classList.add('active-item');

            removeSubWithoutTarget(3);

            crosses[2].classList.add('element-immutable');

            numbersPages[1].classList.add('element-hidden');
            numbersPages[0].classList.add('element-hidden');
            numbersPages[3].classList.add('element-hidden');

            crosses[1].classList.add('element-hidden');
            crosses[0].classList.add('element-hidden');
            crosses[3].classList.add('element-hidden');

            numbersPages[2].classList.remove('element-hidden');
            crosses[2].classList.remove('element-hidden');

            textBoxesClose(2);
            arrows.classList.remove('element-hidden');
            slogans.forEach( i => {
                if( !i.classList.contains('element-hidden') )
                i.classList.add('element-hidden');
            });
        });

        document.addEventListener('click', (e) => {

            if (!e.composedPath().includes(items1[0]) &&
            !e.composedPath().includes(items1[1]) &&
            !e.composedPath().includes(items2[0]) &&
            !e.composedPath().includes(items2[1]) &&
            !e.composedPath().includes(arrowRight) &&
            !e.composedPath().includes(arrowLeft)) {
                removeEL();
                items1[0].classList.remove('active-item');
                items1[1].classList.remove('active-item');
                items2[0].classList.remove('active-item');
                items2[1].classList.remove('active-item');

                textBoxesClose();
                
                numbersPages[0].classList.remove('element-hidden');
                numbersPages[1].classList.remove('element-hidden');
                numbersPages[2].classList.remove('element-hidden');
                numbersPages[3].classList.remove('element-hidden');

                crosses[0].classList.remove('element-hidden');
                crosses[1].classList.remove('element-hidden');
                crosses[2].classList.remove('element-hidden');
                crosses[3].classList.remove('element-hidden');

                arrows.classList.add('element-hidden');

                slogans[0].classList.remove('element-hidden');
                slogans[1].classList.remove('element-hidden');
                slogans[2].classList.remove('element-hidden');
                slogans[3].classList.remove('element-hidden');
            };
        });

        arrowRight.addEventListener('click', () => {
            const arrWithItmes = document.querySelector('.why-m__box-items').children;
            const event = new Event ('click');
            for(let i = 0; i < arrWithItmes.length; i++) {
                if( !arrWithItmes[i].classList.value.includes('immutable-item') ) {
                    if(i != 3) {
                        arrWithItmes[i + 1].dispatchEvent(event);
                        i = 5;
                    } else {
                        arrWithItmes[0].dispatchEvent(event);
                    }
                };
            };
        });

        arrowLeft.addEventListener('click', () => {
            const arrWithItmes = document.querySelector('.why-m__box-items').children;
            const event = new Event ('click');
            for(let i = 0; i < arrWithItmes.length; i++) {
                if( !arrWithItmes[i].classList.value.includes('immutable-item') ) {
                    if(i != 0) {
                        arrWithItmes[i - 1].dispatchEvent(event);
                        i = 5;
                    } else {
                        arrWithItmes[3].dispatchEvent(event);
                        i = 100;
                    }
                };
            };
        });

    }
}

export default new WhyM();