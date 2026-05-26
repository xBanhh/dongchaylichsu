//thg này gọi hết event
document.addEventListener('DOMContentLoaded', function () {
    initializeTypingEffect(); //đây là chữ nhập
});


function initializeTypingEffect() {
    const element = document.querySelector('.i1');
    if (!element) return;

    const text = element.textContent;
    element.innerHTML = '';
    let i = 0;

    function typeWriter() {
        if (i <= text.length) {
            let current = text.slice(0, i);
            if (i >= text.length) {
                current = current.replace("Dòng Chảy Lịch Sử", `<span class="black to-gold">Dòng Chảy Lịch Sử</span>`);
            }
            element.innerHTML = current;
            i++;
            setTimeout(typeWriter, 55); // tốc độ gõ (ms) = 0,055s 
        }
    }

    setTimeout(typeWriter, 2500); //(ms) độ delay khi bắt đầu hiệu ứng = 5s
}

//Nút biến mất khi ấn


//ánh sáng hiệu ứng chuyển canhr mượt như sunsilk
const btn = document.getElementById("discover-now-btn");
const page = document.querySelector(".page");
const bookIntro = document.getElementById("book-intro");
const light = document.getElementById("bookLight");
const introText = document.getElementById("intro-text");
const main = document.getElementById("main-contents");
const pageTwo = document.getElementById("page-two");

btn.onclick = () => {
    // Chữ biến mất cùng lúc với nút
    btn.classList.add("disappear");
    introText.classList.add("disappear");
    setTimeout(() => {
        pageTwo.classList.add("move");
        page.classList.add("flip");
    }, 1000); // 300ms (để chữ và nút biến mất) + 1000ms (để bắt đầu hiệu ứng chuyển trang)

    setTimeout(() => {
        light.classList.add("active");
        light.style.opacity = "0";
    }, 2000);
    setTimeout(() => {
            main.classList.add("show");
        }, 4500);
};
// reload vẫn ở trang 2

