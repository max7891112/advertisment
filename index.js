import Feedback from "./components/feedback/Feedback";
import MenuBurger from "./components/menuBurger/MenuBurger";
import WorkWithUs from "./components/workWithUs/WorkWithUs";
import LoginovaDetail from "./components/loginovaDetail/LoginovaDetail";
import youtubeLightbox from "./libs/youtubeLightbox/youtubeLightbox";
import MySwiper from "./components/swiper/swiper";
document.addEventListener('DOMContentLoaded', () => {
    
    MenuBurger.clickOnBurger();
    MenuBurger.removeBurger();

    WorkWithUs.addListenerForChangingComponents()
    LoginovaDetail.addListenerForAnimationSlider()
    
    // work with youtube video
    WorkWithUs.addListenerForConnectLightBox()
    youtubeLightbox.connect('youtubelightboxLoginova', 'youtubelightboxPlayerLoginova', '.youtubelightboxLoginova__centeredchild')
    // add swiper
    // MySwiper.addListenerForOpenSwiper()
    MySwiper.open()
    MySwiper.close()

    // work with forms
    Feedback.addListenerDataClose()
    Feedback.addListenerForDataInput()
    Feedback.buttonInit()
})




