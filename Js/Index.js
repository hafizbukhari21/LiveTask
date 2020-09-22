$(document).ready(function () {
    scrollingNavbarEvent();
    navbarBurgerIconResposiveTrigger();
    mainContentAnim()        
    $("#myModal").modal();
    animateValue("totalregistered",1,Random(),6000)
    animateValue("totalproject",1,Random(),6000)
    animateValue("other",1,Random(),6000)

});

function scrollingNavbarEvent(){
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header")
        header.classList.toggle("sticky", window.scrollY > 0) 
    })//header navbar add background on vertical scrolling
}


// var viewport = window.innerWidth

function navbarBurgerIconResposiveTrigger(){
    var burgerMenucheck = document.querySelector("#check")
    burgerMenucheck.addEventListener("click",function(){
    let mainmenu = document.querySelector(".mainMenu")
    burgerMenucheck.checked ? mainmenu.style.left = "0%" : mainmenu.style.left = "-100%"
})//sliding menu resposive mode
}


function mainContentAnim(){
    let vp = window.innerWidth;
    if (vp > 858){
        let buttonXmodals = document.querySelector("#modalsClosedButton")
        buttonXmodals.addEventListener("click", function(){
            const element = document.querySelector('.description');
            element.classList.add('animate__animated', 'animate__bounceInRight');   
        })
    }
   
}

function Random(){
    let x =  Math.floor(Math.random() * 2000) + 1000;
    return x
 }

function animateValue(id, start, end, duration) {
    // assumes integer values for start and end
    
    var obj = document.querySelector("."+id);
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));
    
    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);
    
    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
}


