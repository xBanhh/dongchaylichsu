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


const cover = document.getElementById('cover');
const book = document.getElementById('book-intro');
const cornerLeft = document.getElementById('cornerLeft');
const cornerRight = document.getElementById('cornerRight');
const pageNum = document.getElementById('pageNum');

//Click vào bìa sách để chạy 
cover.onclick = function () {
    // Hiện sách + góc + số trang
    setTimeout(() => {
        cover.style.display = 'none';
        book.style.display = 'block';
        cornerRight.style.display = 'block';
        pageNum.style.display = 'block';
    }, 100);
};

//Bắt đầu từ trang đầu tiên
let current = 0;
const pages = document.querySelectorAll('.page');
const total = pages.length;

let busy = false;   //Lật xong mới được lật tiếp, tránh trường hợp bấm liên tục

function goTo(direction) {
    if (busy) return;

    let target;
    if (direction === 'next') {
        target = current + 1;   // Trang tiếp theo
        if (target >= total) return;    // Không vượt quá số trang
    } else {
        target = current - 1;   // Trang trước
        if (target < 0) return;     // Không vượt quá trang đầu
    }

    busy = true;

    const flipSound = document.getElementById('flipSound');
    flipSound.currentTime = 0; // Đặt lại thời gian phát
    flipSound.play();          // Phát âm thanh

    pages[current].classList.remove('active');  // Ẩn trang cũ
    pages[target].classList.add('active');     // Hiện trang mới

    current = target;
    pageNum.textContent = current + 1;  // Cập nhật số trang

    cornerLeft.style.display = (current === 0) ? 'none' : 'block'; // Trang đầu - ẩn mũi tên trái
    cornerRight.style.display = (current === total - 1) ? 'none' : 'block'; // Trang cuối - ẩn mũi tên phải

    setTimeout(() => { busy = false; }, 300);   // Thời gian chờ để có thể lật trang tiếp theo
}

//Gắn sự kiện lật trang
cornerRight.onclick = () => goTo('next');
cornerLeft.onclick = () => goTo('prev');

//Gắn giá trị vào mũi tên ở bàn phím để ấn
document.onkeydown = function (e) {
    if (e.key === 'ArrowRight') goTo('next');
    if (e.key === 'ArrowLeft') goTo('prev');
};

//Khởi tạo trang đầu tiên
pages[0].classList.add('active');   // Hiện trang đầu tiên có active được hiển thị
pageNum.textContent = '1';
cornerLeft.style.display = 'none';  // Trang đầu tiên - ẩn mũi tên trái

//Nút biến mất khi ấn


//ánh sáng hiệu ứng chuyển canhr mượt như sunsilk
const btn = document.getElementById("discover-now-btn");
const light = document.getElementById("bookLight");
const main = document.getElementById("main-contents");
btn.onclick = () => {
    btn.classList.add("disappear");
    light.classList.add("active");
    
    main.classList.add(
    "show"
);
    setTimeout(()=>{

    light.style.opacity = "0";
        
},1600);
};