const colors = ['#ff6600', '#ffcc00', '#33cc33', '#3399ff', '#ff33cc', '#ff33ff', '#66ffff'];

function createFirework(x, y) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;

    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 350 + 50;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);
        particle.style.setProperty('--color', color);
        firework.appendChild(particle);
    }

    document.body.appendChild(firework);

    setTimeout(() => firework.remove(), 2500);
}

function randomFirework() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    createFirework(x, y);
}

setInterval(randomFirework, 300);