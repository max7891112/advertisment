import youtubeLightbox from "../../libs/youtubeLightbox/youtubeLightbox";

class LoginovaDetail{
    addListenerForAnimationSlider() {
        document.addEventListener('click', (event) => {
            event.preventDefault()
            let target = event.target
            if(target.closest('[data-slider-video="true"]')) {
                target.closest('[data-slider-video="true"]').classList.toggle('_animation')
                target.closest('[data-slider-video="true"]').previousElementSibling.classList.toggle('_animation');
                target.closest('[data-slider-video="true"]').nextElementSibling.classList.toggle('_animation')
                // youtubeLightbox.start()
            }
           
        });
        
    };
};

export default new LoginovaDetail();
