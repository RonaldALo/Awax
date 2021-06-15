const mobile = document.getElementById('mobile');

function ToggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

mobile .addEventListener('click', ToggleMenu);
