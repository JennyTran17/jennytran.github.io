
const container = document.querySelector('.container');
document.querySelector('.slider').addEventListener
    ('input', (e) => {
        container.style.setProperty('--position', `${e.target.value}%`);
    })



    document.addEventListener('DOMContentLoaded', () => {
        const arrow = document.querySelector('.arrow');
        const introSection = document.getElementById('intro');
    
        arrow.addEventListener('click', () => {
            // Scroll to the section with the ID 'intro'
            introSection.scrollIntoView({ behavior: 'smooth' });
    
            // Make the arrow disappear after scrolling
            arrow.style.display = 'none';
        });
    });

    