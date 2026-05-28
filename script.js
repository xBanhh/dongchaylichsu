//thg này gọi hết event
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash === '#main-page') {
        showPage2Instantly();
    } else {
        // Nếu không có, mặc định tải trang 1 (Reset URL cho sạch)
        history.replaceState(null, "", " ");

    document.body.classList.add("lock");
    initializeTypingEffect(); //đây là chữ nhập
}
});


function initializeTypingEffect() {
    const element = document.querySelector('.i1');
    if (!element) return;

    const text = element.textContent;
    element.textContent = '';
    let i = 0;

    const typeWriter = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    };

    setTimeout(typeWriter, 1000);
}

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
    history.pushState(null, "", "#main-page");
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
    setTimeout(() => {
        const actionMenu = document.querySelector('.action-menu');
        actionMenu.classList.add("show");
    }, 6000);
    setTimeout(() => {
        document.body.classList.remove("lock");
        document.body.classList.add("reading");
        }, 5000);

};


window.addEventListener('popstate', function () {
    if (window.location.hash === '#main-page') {
        // Forward tới trang 2
        showPage2Instantly();
    } else {
        // Back về trang 1
        showPage1Instantly();
    }
});

// Hàm 1: Tua nhanh trạng thái đến Trang 2 (Dành cho Reload / Forward)
function showPage2Instantly() {
    btn.classList.add("disappear");
    introText.classList.add("disappear");
    pageTwo.classList.add("move");
    page.classList.add("flip");
    
    main.classList.add("show");
    document.body.classList.remove("lock");
    document.body.classList.add("reading");
    
    bookIntro.style.display = "none"; // Ẩn trang 1 đi
}

// Hàm 2: Tua nhanh trạng thái về Trang 1 (Dành cho nút Back)
function showPage1Instantly() {
    bookIntro.style.display = "block"; // Hiện lại trang 1
    
    // Gỡ bỏ toàn bộ các class hiệu ứng để sách trở về ban đầu
    btn.classList.remove("disappear");
    introText.classList.remove("disappear");
    pageTwo.classList.remove("move");
    page.classList.remove("flip");
    light.classList.remove("active");
    main.classList.remove("show");
    
    // Trả lại khóa thanh cuộn
    document.body.classList.add("lock");
    document.body.classList.remove("reading");
}



document.querySelector(".action-menu > button").addEventListener("click", 
    function() {
        document.querySelector(".action-menu").classList.toggle("active");
    });
