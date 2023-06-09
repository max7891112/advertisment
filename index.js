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
import whyM from "./components-m/why-m/why-m";
import MySmoothScroll from './libs/SmoothScroll.js'
import developM from "./components-m/develop-m/develop-m";
import WorkWitsUsM from "./components-m/work-with-us-m/workWitsUsM";
import HeaderM from "./components-m/header-m/header-m";
import Spinner from "./components/spinner/spinner";

document.addEventListener('DOMContentLoaded', () => {
    
    MenuBurger.clickOnBurger();
    MenuBurger.removeBurger();
    MenuBurger.changeImg()
    MenuBurger.smoothNavigation()

    Spinner.stop()

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
    whyM.addEventListener();

    MySmoothScroll.render()

    // mobile code
    HeaderM.clickOnBurger()
    HeaderM.clickOnMenuItem()
    developM.addEvListener()
    WorkWitsUsM.addListenerForChangingComponents()
})






