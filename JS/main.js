//Navigation bar start//
const burger = document.querySelector(".burger"),
      navBar = document.querySelector(".header_links"),
      lineNr1 = document.querySelector(".lineNr1"),
      lineNr2 = document.querySelector(".lineNr2"),
      links = document.querySelectorAll(".header_links nav ul li"),
      lineNr3 = document.querySelector(".lineNr3"),
      logInSocialMedia = document.querySelector(".header_login_socialmedia");

burger.addEventListener("click",() => {
    lineNr1.classList.toggle("active");
    lineNr2.classList.toggle("active");
    lineNr3.classList.toggle("active");
    navBar.classList.toggle("active");
   for(let link of links){
        link.classList.toggle("active");
    }
    logInSocialMedia.classList.toggle("active");
})
//Navigation bar end//

//filtre start//

const filtreIcons = document.querySelectorAll(".filtre_icon"),
      filtreLines = document.querySelectorAll(".filtre_line"),
      filtreMenues = document.querySelectorAll(".filtre_menu");

const filtreActive = n => {
    for(let filtreIcon of filtreIcons ){
        filtreIcon.classList.remove("active");
    }
    for(let filtreLine of filtreLines ){
        filtreLine.classList.remove("active");
}
    for(let filtreMenue of filtreMenues ){
        filtreMenue.classList.remove("active");
}
    filtreIcons[n].classList.add("active");
    filtreLines[n].classList.add("active");
    filtreMenues[n].classList.add("active");
    }
filtreIcons.forEach((item, IconNumber) => {
    item.addEventListener("click",()=>{
        let active
        active = IconNumber;
        filtreActive(active);
        if(filtreIcons[active].classList.contains("active")){
            filtreIcons[active].addEventListener("click",()=>{
                filtreIcons[active].classList.toggle("active");
                filtreLines[active].classList.toggle("active");
                filtreMenues[active].classList.toggle("active");
            })}
    })
});
//filtre end//

//Image and text Slider start//
const imgSlides = document.querySelectorAll(".slide"),
      slideMuve = document.querySelector(".slide_muve"),
      textSlides = document.querySelectorAll(".menu_text"),
      textMuve = document.querySelector(".menu_muve"),
      dots = document.querySelectorAll(".dot");
let index = 0; 

const motionSlide = n =>{
    let imgsize = imgSlides[0].clientWidth,
        textsize = textSlides[0].clientWidth;
    slideMuve.style.transition = "all 0.7s ease-in";
    slideMuve.style.transform = "translateX(" + n*(-imgsize) + "px)";
    textMuve.style.transition = "all 0.7s ease-in";
    textMuve.style.transform = "translateX(" + n*(-textsize) + "px)";
    console.log(imgsize);
}
const dotsChange = n =>{
    for(let dot of dots){
        dot.classList.remove("active");
    }
    dots[n].classList.add("active");
}
const dotSlide = i =>{
    motionSlide(i);
    dotsChange(i);
}
dots.forEach((item, dotIndex)=>{
    item.addEventListener("click",()=>{
        index = dotIndex;
        dotSlide(index);
    })
})
setInterval(() => {
    index++;
    if(index == 0){
        index = imgSlides.length;
    }
    else if(index == (imgSlides.length)){
        index = 0;
    };
    dotSlide(index);
}, 4000);
//Image and text Slider end//