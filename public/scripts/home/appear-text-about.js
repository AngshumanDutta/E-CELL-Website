function scrollAppearAbout(){
    var introText = document.querySelector('.intro-text-about');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;

    if(introPosition < screenPosition){
        introText.classList.add('intro-appear-about');
    }
}

window.addEventListener('scroll', scrollAppearAbout);