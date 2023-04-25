import Feedback from "./components/feedback/Feedback";
import MenuBurger from "./components/menuBurger/MenuBurger";
import TechnicalFunctions from "./technicalFunctions/TechnicalFunctions";
// let michaelContainer = document.querySelector('.menu-burger__img-container');
let feedbackButtons = document.querySelectorAll('.develop__feedback-button')
MenuBurger.clickOnBurger();
MenuBurger.removeBurger();
// michaelContainer.addEventListener('click', () => {
//     MenuBurger.changeImg()
// })
for(let button of feedbackButtons) {
    button.addEventListener('click', () => {
        Feedback.open()
        
    })
}
TechnicalFunctions.addListenerDataClose()
TechnicalFunctions.addListenerForFeedback()
TechnicalFunctions.addListenerForDataInput()



