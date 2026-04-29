const letters = document.querySelectorAll('.letter');

// Set initial hidden state before paint
letters.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(48px) scale(0.6)';
});

window.addEventListener('DOMContentLoaded', () => {
    // Staggered entrance
    letters.forEach((el, i) => {
        setTimeout(() => {
            el.style.transition = 'opacity 0.45s cubic-bezier(.22,1,.36,1), transform 0.45s cubic-bezier(.22,1,.36,1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) scale(1)';
        }, i * 80);
    });

    // Hand off to CSS wave + color cycle after entrance finishes
    const handoffMs = (letters.length - 1) * 80 + 500;
    setTimeout(() => {
        letters.forEach(el => {
            el.style.opacity = '';
            el.style.transform = '';
            el.style.transition = '';
            el.classList.add('ready');
        });
    }, handoffMs);
});

// Hover: pop individual letters
letters.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.animationPlayState = 'paused';
        el.style.transition = 'transform 0.12s ease';
        el.style.transform = 'scale(1.35) rotate(6deg)';
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1) rotate(0deg)';
        el.style.transition = 'transform 0.25s ease';
        setTimeout(() => {
            el.style.transform = '';
            el.style.transition = '';
            el.style.animationPlayState = '';
        }, 250);
    });
});
