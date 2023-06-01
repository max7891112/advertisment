import close from '../feedback//img/close.svg';
import TechnicalFunctions from '../../technicalFunctions/TechnicalFunctions.js';
class Feedback {
    render() {
        let htmlContent = ` 
            <div class="modal" id="modal-container" data-close="true">
                <div class="modal__body _container" >
                    <img src="${close}" alt="close" class="modal__close" data-close="true">
                    <div class="modal__container">
                        <h3 class="modal__title">Оставьте свои контакты и мы обязательно свяжемся с вами.</h3>
                        <form action="#" class="modal__form" id="form-free-lesson">
                            <input class="modal__input modal__input_name _modal-req" placeholder="Имя" data-input="true">
                            <input class="modal__input modal__input_phone _modal-req" placeholder="Телефон" type="tel" data-input="true" maxlength="15">
                            <textarea class="modal__input modal__input_textarea _modal-req" placeholder="Сообщение" maxlength="140" data-input="true"></textarea>
                            <button class="button-dinamic modal__dinamic-button" id="modal-submit">Оставить заявку
                                <div class="button-dinamic__1"></div>
                                <div class="button-dinamic__2"></div>
                                <div class="button-dinamic__3"></div>
                                <div class="button-dinamic__4"></div>
                                <div class="button-dinamic__5"></div>
                                <div class="button-dinamic__6"></div>
                                <div class="button-dinamic__7"></div>
                                <div class="button-dinamic__8"></div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            `;
                const htmlWrapper = `
                <div class="modal__wrapper">
                    ${htmlContent}
                </div>
            `;
    
            ROOT_MODAL.innerHTML = htmlWrapper;
    }
    
    open() {
        this.render();
        document.querySelector('.modal__body').classList.add('open'); // анимации появления окна
        document.querySelector('.modal').classList.add('open');
    }

    close() {   
        let modal = document.querySelector('.modal');
    
        let modalWindow = document.querySelector('.modal__body');
        if(modal) {
            modalWindow.classList.remove('open');
            modalWindow.parentElement.classList.remove('open');
            modalWindow.classList.add('disappearance');
            modalWindow.parentElement.classList.add('disappearance');
            setTimeout(() => {
                modalWindow.classList.remove('disappearance');
                modalWindow.parentElement.classList.remove('disappearance');
                ROOT_MODAL.innerHTML = ''
            },300);
        };
    }; 


    sendForm() {
            let form = document.getElementById('form-free-lesson');
            let container = document.getElementById('modal-container')
            let modalSubmit = document.getElementById('modal-submit')

            modalSubmit.addEventListener('click', formSend);
            function formSend (event){  // async

                event.preventDefault();

                let error = formValidate(form)

                let formData = new FormData(form);

                if(error == 0) {
                    container.classList.add('_sending');
                    form.reset();
   
                    setTimeout(() => {
                        let response = fetch('sendmail.php', { // await
                            method: 'POST',
                            body: formData
                        });
                        if(response.ok) {
                            let result = response.json(); // await
                            alert(result.message);
                            form.reset();
                            container.classList.remove('_sending')
                        } else {
                            alert('Ошибка отправки данных на сервер')
                            container.classList.remove('_sending');
                            
                            let modal = document.querySelector('.modal');  // дублирование кода
                            let modalWindow = document.querySelector('.modal__body');
                            if(modal) {
                                modalWindow.classList.remove('open');
                                modalWindow.parentElement.classList.remove('open');
                                modalWindow.classList.add('disappearance');
                                modalWindow.parentElement.classList.add('disappearance');
                                setTimeout(() => {
                                    modalWindow.classList.remove('disappearance');
                                    modalWindow.parentElement.classList.remove('disappearance');
                                    ROOT_MODAL.innerHTML = ''
                                },300);
                            }; // дублирование кода

                        }
                    },1000)
                } else {
                    alert('Заполните обязательные поля')
                }
            }

            function formValidate() {
                let error = 0;
                let formReq = document.querySelectorAll('._modal-req')
                for(let i = 0; i< formReq.length; i++) {
                    let input = formReq[i];
                    input.classList.remove('_error');

                    if(input.classList.contains('_modal-email')) {
                         if(!this.emailTest(input)){
                            formAddError(input);
                            error++
                         }
                    } else {
                        if(input.value == '') {
                            formAddError(input);
                            error++;
                        }
                    }
                }
                return error;
            }
            function formAddError(input) {
                input.classList.add('_error');
                if(input.placeholder == 'Имя' || input.placeholder == 'Введите имя') {
                    input.placeholder = 'Введите имя';
                } else if (input.placeholder == 'Телефон' || input.placeholder == 'Введите номер телефона') {
                    input.placeholder = 'Введите номер телефона';
                } else {
                    input.placeholder = 'Введите ваше сообщение';
                }
            };
    }

    buttonInit() {
        document.addEventListener('click', (event) => {
            let target = event.target;
            if(target.closest('[data-feedback-open="true"]')) {
                this.open();
                this.sendForm();
                document.addEventListener('keydown', (event) => {
                    if(event.code.toLowerCase() == 'escape') {
                        this.close();
                    };
                });
                let inputTel = document.querySelector('.modal__input_phone');
                inputTel.addEventListener('keyup', function(event) {
                    if(event.key != 'Backspace' && (inputTel.value.length === 1 || inputTel.value.length === 5 || inputTel.value.length === 9 || inputTel.value.length === 12)) {
                        inputTel.value += '-';
                    };
                });
            };
        });
    };

    addListenerForDataInput() {
        document.addEventListener('click', function(event) {
            let target = event.target;
            if(!target.hasAttribute('data-input')) return;
            target.classList.remove('_error');
        });
    };

    addListenerDataClose() {
        document.addEventListener('click', (event) => {
            let target = event.target;
            if(target.dataset.close) {
                this.close();
            };
        });
    };
};

export default new Feedback()