const $ = e => document.querySelector(e);

const btn = $("#discover-now-btn");
const page = $(".page");
const intro = $("#book-intro");
const light = $("#bookLight");
const text = $("#intro-text");
const main = $("#main-contents");
const page2 = $("#page-two");
const menu = $(".action-menu");


/* ==========================================================================================|
                                      Tping Effect                                           |
============================================================================================= */
function typingEffect() {
    const el = $(".i1");
    if (!el) return;
    const text = el.textContent;
    el.innerHTML = "";
    let i = 0;
    const type = () => {
        if (i <= text.length) {
            let current = text.slice(0, i);
            if (i >= text.length) {
                current = current.replace(
                    "Dòng Chảy Lịch Sử", `<span class="black to-gold">Dòng Chảy Lịch Sử</span>`
                );
            }
            el.innerHTML = current;
            i++;
            setTimeout(type, 55);
        }
    };
    setTimeout(type, 2500);
}



/* ==============================================================================================|
                                    Page States                                                  |
=================================================================================================*/
function openMainPage() {
    btn.classList.add("disappear");
    text.classList.add("disappear");
    page2.classList.add("move");
    page.classList.add("flip");

    setTimeout(() => {
        light.classList.add("active");
    }, 1000);
    setTimeout(() => {
        main.classList.add("show");
    }, 3000);
    setTimeout(() => {
        document.body.classList.remove("lock");
        document.body.classList.add("reading");
    }, 6900);
}



function resetPage() {
    btn.classList.remove("disappear");
    text.classList.remove("disappear");
    page2.classList.remove("move");
    page.classList.remove("flip");
    light.classList.remove("active");
    main.classList.remove("show");
    document.body.classList.add("lock");
    document.body.classList.remove("reading");
}



/* ====================================================================================
                                    First Load                                         |
======================================================================================= */

if (location.hash === "#main") {
    openMainPage();
} else {
    document.body.classList.add("lock");
    typingEffect();
}



/* ======================================================================================
                                       Button                                            |
========================================================================================= */


btn.onclick = () => {
    history.pushState({}, "", "#main");
    openMainPage();
};



/* ===========================================================================================
                                     Back / Forward                                           |
============================================================================================== */

window.onpopstate = () => {
    if (location.hash === "#main") {
        openMainPage();
    } else {
        resetPage();
    }
};


/* =============================================================================================
                                        Action Menu                                             |
================================================================================================ */

$(".action-menu > button").onclick = () => {
    menu.classList.toggle("active");
};

document.querySelectorAll('.action-menu-btns .btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const target = document.getElementById(this.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      menu.classList.remove('active');
    }
  });
});

/* =============================================================================================
                                        Gasp + ScrollTrigger                                    |
================================================================================================ */

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    scroller: '#main-contents',
    toggleActions: 'play none none reverse',
});
//To là từ css đến gasp, from là từ gasp đến css
gsap.to(".general-card", {
    scrollTrigger: {
            trigger: ".generals-container", //Phần tử kích hoạt
            start: "top 85%", //Chạm từ trên xuống 70% của màn hình
     //Chỉ chạy hiệu ứng một lần
        }, // Cấu hình ScrollTrigger
        opacity: 1,
        y: 0,
        duration: 1.5, //Thời gian hiệu ứng
        delay: 1, //Độ trễ trước khi hiệu ứng bắt đầu
        ease: "power4.out",
        stagger: 0.38 //Mỗi phần tử xuất hiện cách nhau 0.18 giây
    });

gsap.to('.legend-line', {
  scrollTrigger: {
    trigger: '.legend-intro',
    start: 'top 75%'
  },
  opacity: 1,
  y: 0,
  duration: 1,
  ease: 'power2.out', 
  stagger: 0.25
});

gsap.to(".img", {
    scrollTrigger: {
        trigger: '.card',
        start: 'top 50%',
    },
    x: -100,        
    opacity: 1,
    duration: 1.2,
    delay: 0.8,
    ease: 'power3.out'
});

gsap.to(".info", {
    scrollTrigger: {
        trigger: '.card',
        start: 'top 50%',
    },
    x: 100,       
    opacity: 1,
    duration: 1.2,
    delay: 0.8,
    ease: 'power3.out'
});

gsap.utils.toArray(".chapter-divider").forEach(divider => {
// Lấy tất cả phần tử này, biến nó thành mảng, duyệt từng mảng một
    gsap.from(divider, {
        scrollTrigger:{
            trigger: divider, 
            start:"top 80%"
        },
        y:50,
        opacity:0,
        duration:1
    });

});

gsap.to('.highlight', {
    scrollTrigger: {
        trigger: '.font',
        start: 'top 65%',
    },
    color: 'rgb(139, 29, 29)',       
    textShadow: '0 0 30px rgba(255, 51, 51, 0.8), 0 0 60px rgba(255, 51, 51, 0.4)',
    duration: 1,
    delay: 3,
    ease: 'power2.out'
});

gsap.utils.toArray(`
.life-story img,
.talent img,
.worship img,
.wins img
`).forEach(img => {

    gsap.from(img,{
        scrollTrigger:{
            trigger:img,
            start:"top 85%"
        },

        scale:.85,
        opacity:0,
        duration:1.2
    });

});

gsap.utils.toArray("#tranhungdao p").forEach(text => {

    gsap.from(text,{
        scrollTrigger:{
            trigger:text,
            start:"top 85%"
        },
        y:60,
        opacity:0,
        duration:1
    });

});

gsap.from(".endcontent blockquote", {

    scrollTrigger:{
        trigger:".endcontent",
        start:"top 70%"
    },

    scale:.8,
    opacity:0,
    duration:1.5,
    ease:"power3.out"
});

/* =============================================================================================
                                        Snap scroll                                             |
================================================================================================ */
// Tắt snap khi ở vùng không muốn snap
/*
const mainContents = document.querySelector('#main-contents');
const normalSections = document.querySelectorAll('#tranhungdao, .thd-life-story, .victory-story, .thd-worship, .thd-talent');

const observer = new IntersectionObserver((entries) => {
    const isInNormalZone = entries.some(entry => entry.isIntersecting);
    
    if (isInNormalZone) {
        // Ở vùng không muốn snap → TẮT snap
        mainContents.style.scrollSnapType = 'none';
    } else {
        // Ra khỏi vùng đó → BẬT lại snap
        mainContents.style.scrollSnapType = 'y mandatory';
    }
}, { threshold: 0.1 });

normalSections.forEach(section => observer.observe(section)); */