let menubtn = document.getElementById("menu_btn")
menubtn.addEventListener("click",()=>{
    opnsdmenu(true);
})
let menuclosebtn = document.getElementById("menu_close_btn")
menuclosebtn.addEventListener("click",()=>{
    opnsdmenu(false);
})
const opnsdmenu = (flag)=>{
    let sidemenu = document.getElementById("side_menu")
    sidemenu.className = flag ? "active" : ""
}
let x = 0
const scrollslider = (x)=>{
    if(x<=-1020){
        let btn_right = document.getElementById("feature_right");
        btn_right.style.opacity=0.5;
    }
    else{
        let btn_right = document.getElementById("feature_right");
        btn_right.style.opacity=1;
    }
    if(x>=0){
        let btn_left = document.getElementById("feature_left");
        btn_left.style.opacity=0.5;
    }
    else{
        let btn_left = document.getElementById("feature_left");
        btn_left.style.opacity=1;
    }
        gsap.to(".slider .featuressection",{
            left:(x),
            duration:1.2,

        })
}
const manualscrollslide = ()=>{
    let btn_right = document.getElementById("feature_right").addEventListener("click",()=>{
        if(x>-1020){
            scrollslider(x-=395);
        }
    })
    document.getElementById("feature_left").addEventListener("click",()=>{
        if(x<0){
            scrollslider(x+=395);
        }
    })
}
manualscrollslide();
const automaticscrollslider = ()=>{
        setInterval(()=>{
            scrollslider(x-=395);
            if(x<-1020){
                return x=395;
            }
        },2000)
}
automaticscrollslider();

// Main Slider
const main_slider = ()=>{
    let pre_btn = document.querySelector("#slider #slide_btns > .btn1")
    pre_btn.style.backgroundColor="Black";
    pre_btn.style.width="40px"
    let prev_btn = document.querySelector("#slider #slide_btns > .btn1");
    let next_btn = document.querySelector("#slider #slide_btns > .btn2");
    prev_btn.addEventListener("click",()=>{
        prevSlide()
    })
    next_btn.addEventListener("click",()=>{
        nextSlide()
    })
    const sliderImages = document.getElementById('slider_images');
    let currentIndex = 0;
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % 2;
        updateSlider(currentIndex);
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + 2) % 2;
        updateSlider(currentIndex);
    }
    
    function updateSlider(currentIndex) {
        const translateValue = -currentIndex * 100 + '%';
        next_btn.style.width = (currentIndex==1) ? "40px" : "10px"
        next_btn.style.backgroundColor=(currentIndex==1) ? "black" : ""
        prev_btn.style.width = (currentIndex==0) ? "40px" : "10px"
        prev_btn.style.backgroundColor=(currentIndex==0) ? "black" : ""
        sliderImages.style.transform = 'translateX(' + translateValue + ')';
    }
    setInterval(()=>{
        currentIndex = (currentIndex)? 0:1
        updateSlider(currentIndex);
    },3000)
}
main_slider()