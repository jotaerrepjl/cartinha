// Gera corações animados no fundo
const heartsBg = document.querySelector('.hearts-bg');
const heartColors = ['#ff6f91', '#ff8fa3', '#ffb3c6'];

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (6 + Math.random() * 4) + 's';
    heart.style.background = heartColors[Math.floor(Math.random() * heartColors.length)];
    heart.style.opacity = 0.5 + Math.random() * 0.4;
    heartsBg.appendChild(heart);
    setTimeout(() => heart.remove(), 9000);
}

setInterval(createHeart, 600);
for (let i = 0; i < 10; i++) createHeart();

// Interatividade para abrir a carta e animar a folha
const envelope = document.getElementById('envelope');
const envelopeLetter = document.getElementById('envelope-letter');
let state = 0; // 0: fechado, 1: aberto, 2: folha saiu

envelope.addEventListener('click', function() {
    if (state === 0) {
        envelope.classList.add('open');
        state = 1;
    } else if (state === 1) {
        envelopeLetter.classList.add('show-paper');
        envelopeLetter.style.display = 'flex';
        state = 2;
    }
});

// Permitir que a carta volte ao envelope ao clicar nela
const carta = document.getElementById('envelope-letter');
carta.addEventListener('click', function(e) {
    if (state === 2) {
        carta.classList.remove('show-paper');
        carta.classList.add('hide-paper');
        setTimeout(() => {
            carta.style.display = 'none';
            carta.classList.remove('hide-paper');
            state = 1;
        }, 900);
        e.stopPropagation();
    }
});
