import MenuBurger from "../../menuBurger/MenuBurger";
import MySwiper from "../../swiper/swiper";
import Feedback from "../../feedback/Feedback";
import LoginovaDetail from "../../loginovaDetail/LoginovaDetail";

MenuBurger.clickOnBurger();
MenuBurger.removeBurger();
MenuBurger.changeImg()

MySwiper.open()
MySwiper.close()

Feedback.addListenerDataClose()
Feedback.addListenerForDataInput()
Feedback.buttonInit()

LoginovaDetail.addListenerForAnimationSlider()