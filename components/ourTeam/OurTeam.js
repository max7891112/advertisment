class OurTeam {
    openLoginova() {
        let closer = document.querySelector('#closerForLoginova')
        let shortCard = document.querySelector('.our-team__card')
        let longCard = document.querySelector('.our-team__hidden-loginova')
        closer.addEventListener('click', () => {
            if(closer.getAttribute('data-close') == 'true') {
                closer.setAttribute('data-close', 'false')
                shortCard.classList.toggle('hidden-opacity')
                setTimeout( ()=>{
                    shortCard.classList.toggle('hidden')
                    longCard.classList.toggle('hidden')
                    setTimeout( ()=> {
                        longCard.classList.toggle('hidden-opacity')
                    },1)
                },500)
            } else {
                closer.setAttribute('data-close', 'true')
                longCard.classList.toggle('hidden-opacity')
                setTimeout( ()=>{
                    longCard.classList.toggle('hidden')
                    shortCard.classList.toggle('hidden')
                    setTimeout( ()=> {
                        shortCard.classList.toggle('hidden-opacity')
                    },1)
                },500)
            }
        })
    }
}

export default new OurTeam();