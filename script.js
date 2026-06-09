const $ = x => document.querySelector(x); //Hàm rút gọn

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
    const x = $(".i1");
    if (!x) return;
    const text = x.textContent;
    x.innerHTML = "";
    let i = 0;
    const type = () => {
        if (i <= text.length) {
            let current = text.slice(0, i);
            if (i >= text.length) {
                current = current.replace(
                    "Dòng Chảy Lịch Sử", `<span class="black to-gold">Dòng Chảy Lịch Sử</span>`
                );
            }
            x.innerHTML = current;
            i++;
            setTimeout(type, 55); //sau 55ms gõ thêm chữ (hiện)
        }
    };
    setTimeout(type, 2500); //delay trước khi hiện animation (2,5ms)
}



/* ==============================================================================================|
                                    Page                                                  |
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



/* ====================================================================================
                                    Khi mở page                                        |
======================================================================================= */

if (location.hash === "#main") {
    openMainPage();
} else {
    document.body.classList.add("lock");
    typingEffect();
}



/* ======================================================================================
                                       Button Khám phá ngay                                         |
========================================================================================= */


btn.onclick = () => {
    history.pushState({}, "", "#main");
    openMainPage();
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
