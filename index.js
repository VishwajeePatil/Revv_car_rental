console.log("index");
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
        gsap.to(".slider .featuressection",{
            left:(x),
            duration:1.2,

        })
}

const manualscrollslide = ()=>{
    document.getElementById("feature_right").addEventListener("click",()=>{
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