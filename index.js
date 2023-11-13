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



// Offer Slider
const second_slider = ()=>{
    let y =0;
    const scrollslider = (y)=>{
        if(y<=-300){
            let btn_right = document.getElementById("offer_right");
            btn_right.style.opacity=0.5;
        }
        else{
            let btn_right = document.getElementById("offer_right");
            btn_right.style.opacity=1;
        }
        if(y>=0){
            let btn_left = document.getElementById("offer_left");
            btn_left.style.opacity=0.5;
        }
        else{
            let btn_left = document.getElementById("offer_left");
            btn_left.style.opacity=1;
        }
        gsap.to(".slider2 .offer_section",{
            left:(y),
            duration:1.2,

        })
    }
    const manualscrollslide = ()=>{
        document.getElementById("offer_right").addEventListener("click",()=>{
            console.log("Second");
            if(y>-300){
                scrollslider(y-=395);
            }
        })
        document.getElementById("offer_left").addEventListener("click",()=>{
            if(y<0){
                scrollslider(y+=395);
            }
        })
    }
    manualscrollslide()
}
second_slider();
// Offer Slider
// why section Slider
const why_section_slider = ()=>{
    let y =0;
    const scrollslider = (y)=>{
        let btn_right = document.getElementById("why_rev_right");
        let btn_left = document.getElementById("why_rev_left");
        if(y<=-300){
            btn_right.style.opacity=0.5;
        }
        else{
            btn_right.style.opacity=1;
        }
        if(y>=0){
            btn_left.style.opacity=0.5;
        }
        else{
            btn_left.style.opacity=1;
        }
        gsap.to(".slider3 .why_rev_section",{
            left:(y),
            duration:1.2,

        })
    }
    const manualscrollslide = ()=>{
        document.getElementById("why_rev_right").addEventListener("click",()=>{
            console.log("Second");
            if(y>-300){
                scrollslider(y-=395);
            }
        })
        document.getElementById("why_rev_left").addEventListener("click",()=>{
            if(y<0){
                scrollslider(y+=395);
            }
        })
    }
    manualscrollslide()
}
why_section_slider();
// why section Slider



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



const add_city = ()=>{
    const top50CitiesInIndia = [
        "Mumbai",
        "Delhi",
        "Bangalore",
        "Hyderabad",
        "Ahmedabad",
        "Chennai",
        "Kolkata",
        "Surat",
        "Pune",
        "Jaipur",
        "Lucknow",
        "Kanpur",
        "Nagpur",
        "Indore",
        "Thane",
        "Bhopal",
        "Visakhapatnam",
        "Pimpri-Chinchwad",
        "Patna",
        "Vadodara",
        "Ghaziabad",
        "Ludhiana",
        "Agra",
        "Nashik",
        "Faridabad",
        "Meerut",
        "Rajkot",
        "Kalyan-Dombivali",
        "Vasai-Virar",
        "Varanasi",
        "Srinagar",
        "Aurangabad",
        "Dhanbad",
        "Amritsar",
        "Navi Mumbai",
        "Allahabad",
        "Howrah",
        "Ranchi",
        "Gwalior",
        "Jabalpur",
        "Coimbatore",
        "Vijayawada",
        "Jodhpur",
        "Madurai",
        "Raipur",
        "Chandigarh",
        "Guntur",
        "Guwahati"
      ];
      let select = document.querySelector("#select #city");
      top50CitiesInIndia.map((item)=>{
        let opt = document.createElement("option");
        opt.value=item
        opt.text=item
        select.appendChild(opt)
      })
      
}
add_city();
const rental_box_change = ()=>{
    const change_rental_box = (flag)=>{

    }
    const subs_header = document.getElementById("subs_header")
    const rental_header = document.getElementById("rental_header")
    const cale_box = document.querySelector("#rental_box .selection_box .calendor")
    const select = document.querySelector("#rental_box .selection_box select")
    subs_header.addEventListener("click",()=>{
        subs_header.classList="active"
        rental_header.classList=null
        cale_box.style.display="none"
        select.style.borderRadius = "10px";
        select.style.marginTop="40px"
    })
    rental_header.addEventListener("click",()=>{
        rental_header.classList="active"
        subs_header.classList=null
        cale_box.style.display="flex"
        select.style.borderRadius = "10px 10px 0 0";
        select.style.marginTop="0"
    })
}
rental_box_change();