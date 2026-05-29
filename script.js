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

