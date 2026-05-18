let current = 0;
const pages = document.querySelectorAll('.page');
const total = pages.length;
let busy = false;
let introDone = false;
document.getElementById('totalNum').textContent = total;


setTimeout(() => {
    introDone = true;
}, 3500);


function flip(direction) {
    if (busy || !introDone) return;
    const target = direction === 'next' ? current + 1 : current - 1;
    if (target < 0 || target >= total) return;
    busy = true;

    const cur = pages[current];
    const tar = pages[target];

    cur.style.transformOrigin = direction === 'next' ? 'bottom right' : 'bottom left';
    cur.style.transition = 'transform 3s ease-in-out';
    cur.style.transform = `rotateY(${direction === 'next' ? -160 : 160}deg)`;
    cur.style.opacity = '0';
    tar.style.opacity = '1';
    tar.classList.add('active');

    setTimeout(() => {

        cur.classList.remove('active');
        cur.style.transition = '';
        cur.style.transform = '';
        current = target;
        document.getElementById('currentNum').textContent = current + 1;
        document.getElementById('cornerLeft').style.display = current === 0 ? 'none' : 'block';
        document.getElementById('cornerRight').style.display = current === total - 1 ? 'none' : 'block';
        busy = false;
    }, 3000);
}

document.getElementById('cornerRight').onclick = () => flip('next');
document.getElementById('cornerLeft').onclick = () => flip('prev');

let startY = 0;
const cr = document.getElementById('cornerRight');
cr.onmousedown = e => {
    startY = e.clientY;
    document.onmousemove = e => { if (startY - e.clientY > 100) { document.onmousemove = null; flip('next'); } };
    document.onmouseup = () => document.onmousemove = null;
};
cr.ontouchstart = e => {
    startY = e.touches[0].clientY;
    document.ontouchmove = e => { if (startY - e.touches[0].clientY > 80) { document.ontouchmove = null; flip('next'); } };
    document.ontouchend = () => document.ontouchmove = null;
};

// ===== PHÍM TẮT =====
document.onkeydown = e => {
    if (e.key === 'ArrowRight') flip('next');
    if (e.key === 'ArrowLeft') flip('prev');
};

// ===== KHỞI ĐỘNG =====
pages[0].classList.add('active');
/*Trang đầu tiên được gắn class active → hiển thị*/
document.getElementById('cornerLeft').style.display = 'none';
/*Ẩn góc trái vì đang ở trang đầu, không thể lùi*/
