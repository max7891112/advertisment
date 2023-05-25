import Feedback from "./components/feedback/Feedback";
import MenuBurger from "./components/menuBurger/MenuBurger";
import TechnicalFunctions from "./technicalFunctions/TechnicalFunctions";
import WorkWithUs from "./components/workWithUs/WorkWithUs";
import LoginovaDetail from "./components/loginovaDetail/LoginovaDetail";
document.addEventListener('DOMContentLoaded', () => {
    let feedbackButtons = document.querySelectorAll('.develop__feedback-button')
MenuBurger.clickOnBurger();
MenuBurger.removeBurger();
for(let button of feedbackButtons) {
    button.addEventListener('click', () => {
        Feedback.open()
        
    })
}
TechnicalFunctions.addListenerDataClose()
TechnicalFunctions.addListenerForFeedback()
TechnicalFunctions.addListenerForDataInput()
WorkWithUs.addListenerForChangingComponents()
LoginovaDetail.addListenerForAnimationSlider()
})




