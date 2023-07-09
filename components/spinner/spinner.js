class Spinner {
    stop() {
        if(!localStorage.noFirstVisit) {
            let spinner = document.querySelector('.spinner')
            spinner.style.visibility = 'visible'
            setTimeout(() => {
                spinner.classList.add('hidden')
                spinner.innerHTML = '';
                localStorage.noFirstVisit = "1"
            },2000);
        }; 
    };
};

export default new Spinner()