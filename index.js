import Feedback from "./components/feedback/Feedback";
import MenuBurger from "./components/menuBurger/MenuBurger";
import WorkWithUs from "./components/workWithUs/WorkWithUs";
import LoginovaDetail from "./components/loginovaDetail/LoginovaDetail";
import youtubeLightbox from "./libs/youtubeLightbox/youtubeLightbox";
import MySwiper from "./components/swiper/swiper";
import Why from "./components/Why/why";
import OurTeam from "./components/Our-team/ourTeam";
import Cases from "./components/Cases/cases";
import Footer from './components/Footer/footer';
import MySmoothScroll from './libs/SmoothScroll.js'
document.addEventListener('DOMContentLoaded', () => {
    
    MenuBurger.clickOnBurger();
    MenuBurger.removeBurger();
    MenuBurger.changeImg()
    MenuBurger.smoothNavigation()

    WorkWithUs.addListenerForChangingComponents()
    LoginovaDetail.addListenerForAnimationSlider()
    
    // work with youtube video
    // youtubeLightbox.connect('youtubelightboxLoginova', 'youtubelightboxPlayerLoginova', '.youtubelightboxLoginova__centeredchild')
    
    // add swiper
    MySwiper.open()
    MySwiper.close()

    // work with forms
    Feedback.addListenerDataClose()
    Feedback.addListenerForDataInput()
    Feedback.buttonInit()

    Why.searchElem();
    OurTeam.addEL();
    Cases.addEventListener();
    Cases.addELClick();
    Footer.addEventListener();

    MySmoothScroll.render()
})






