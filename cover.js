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

