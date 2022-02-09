function startupStatusManager() {
    let status = document.getElementById('inDevelopment-notice');
    let statusSpace = document.getElementById('status');
    if(status.innerHTML === "Coming soon"){
        statusSpace.style.backgroundColor('green'); 
    } else {
        statusSpace.style.backgroundColor('orange');
    }
}

//To make an animated slideshow.

var slideIndex = 0;
showSlides();

function showSlides() {
    let projectSlide = document.getElementsByClassName("big-scale");
    for (let i = 0; i < projectSlide.length; i++) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 4000);
        
    }
}