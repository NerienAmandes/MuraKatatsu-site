document.addEventListener('DOMContentLoaded', () => {
    const glow = document.querySelector('.avatar-glow');
    if (glow) {
        glow.classList.add('active');
    }

    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateX(8px)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateX(0)';
        });
    });

    const moon = document.querySelector('.moon');
    document.addEventListener('mousemove', (e) => {
        if (moon) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            moon.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
});