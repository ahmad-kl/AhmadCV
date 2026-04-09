
const cursor = document.querySelector('.pro-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    if(cursor.style.display === 'none') {
        cursor.style.display = 'block';
    }
});

document.addEventListener('scroll', () => {
    cursor.style.display = 'none'; 
});


const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');


if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
    });
}


if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
}
