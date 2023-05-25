class LoginovaDetail{
    addListenerForAnimationSlider() {
        let videoBlock = document.getElementById('slider-video')
        videoBlock.addEventListener('click', () => {
            videoBlock.classList.toggle('_animation')
            videoBlock.previousElementSibling.classList.toggle('_animation');
            videoBlock.nextElementSibling.classList.toggle('_animation')
        })
    };
};

export default new LoginovaDetail();
