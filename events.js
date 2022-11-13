var states = {
    landing: 0,
    mainPage: 1,
}

var currentState = states.landing;


const landingPageBG = document.getElementById("landingPageBG");
console.log(landingPageBG);

landingPageBG.addEventListener('click', openMainPage)

function openMainPage() {
    if (currentState === states.landing) {
        landingPageBG.classList.add("landingPageBG_close")
        setTimeout(function () {
            landingPageBG.style.display = 'none'
        }, 1000)
        currentState += 1
    }
}