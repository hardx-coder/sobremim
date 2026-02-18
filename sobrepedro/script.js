document.addEventListener('DOMContentLoaded', function() {

// Cursor customizado com efeito e cursor padrão visível
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    cursor.classList.add('active');
    clearTimeout(cursor._timeout);
    cursor._timeout = setTimeout(() => cursor.classList.remove('active'), 120);
});
document.addEventListener('mousedown', () => {
    cursor.classList.add('active');
});
document.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
});

// Fade-in animado para elementos
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach((el, i) => {
        el.style.animationDelay = `${0.2 + i * 0.2}s`;
    });
});


// Alternar tema claro/escuro com texto correto
const btn = document.getElementById('toggle-theme');
function updateThemeButton() {
    btn.textContent = document.body.classList.contains('light') ? 'Tema Escuro' : 'Tema Claro';
}
btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    updateThemeButton();
});
// Atualiza o texto do botão ao carregar a página
updateThemeButton();

// Parallax leve no fundo
const bg = document.querySelector('.bg-image');
window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.12;
    bg.style.transform = `translateY(${offset}px)`;
});

// Animação de letras (typing effect)
function animateText(selector) {
    document.querySelectorAll(selector).forEach(el => {
        const text = el.getAttribute('data-text');
        el.textContent = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                el.textContent += text[i];
                i++;
                setTimeout(type, 60 + Math.random() * 60);
            }
        }
        setTimeout(type, 400);
    });
}
animateText('.animated-text');
