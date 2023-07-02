import MenuBurger from "../../menuBurger/MenuBurger";
import MySwiper from "../../swiper/swiper";
import Feedback from "../../feedback/Feedback";
import LoginovaDetail from "../../loginovaDetail/LoginovaDetail";
import HeaderM from "../../../components-m/header-m/header-m";

MenuBurger.render()
MenuBurger.clickOnBurger();
MenuBurger.removeBurger();
MenuBurger.changeImg()

MySwiper.open()
MySwiper.close()

Feedback.addListenerDataClose()
Feedback.addListenerForDataInput()
Feedback.buttonInit()

LoginovaDetail.addListenerForAnimationSlider()

HeaderM.clickOnBurger()