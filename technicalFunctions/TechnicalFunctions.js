import Feedback from "../components/feedback/Feedback.js";
class TechnicalFunctions {

    // formValidate(className,emailName) {
    //     let error = 0;
    //     let formReq = document.querySelectorAll(`.${className}`);
    //     for(let i = 0; i< formReq.length; i++) {
    //         let input = formReq[i];
    //         this.formRemoveError(input);

    //         if(input.classList.contains(emailName)) {
    //              if(!this.emailTest(input)){
    //                 this.formAddError(input);
    //                 error++;
    //              };
    //         } else {
    //             if(input.value == '') {
    //                 this.formAddError(input);
    //                 error++;
    //             };
    //         };
    //     };
    //     return error;
    // };

    formRemoveError(input) {
        input.classList.remove('_error');
    }

    addListenerForDataInput() {
        document.addEventListener('click', function(event) {
            let target = event.target;
            if(!target.hasAttribute('data-input')) return;
            target.classList.remove('_error');
        });
    };

    addListenerDataClose() {
        document.addEventListener('click', function(event) {
            let target = event.target;
            if(target.dataset.close) {
                Feedback.close();
            };
        });
    };

    addListenerForFeedback() {
        let record = document.getElementById('modal-record');
        record.addEventListener('click', function() { // запись на бесплатное занятие через главную страницу
            Feedback.open(); // открытие модального окна
            Feedback.sendForm();
            document.addEventListener('keydown', function(event) {
                if(event.code.toLowerCase() == 'escape') {
                    Feedback.close();
                };
            });
            let inputTel = document.querySelector('.modal__input_phone');
            inputTel.addEventListener('keyup', function(event) {
                if(event.key != 'Backspace' && (inputTel.value.length === 1 || inputTel.value.length === 5 || inputTel.value.length === 9 || inputTel.value.length === 12)) {
                    inputTel.value += '-'
                }
            })
        });

    };
};

export default new TechnicalFunctions()