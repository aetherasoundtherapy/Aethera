document.addEventListener("DOMContentLoaded", () => {
    const fadeItems = document.querySelectorAll('.fade-in');
    
    const checkScroll = () => {
        const triggerPoint = window.innerHeight * 0.88;
        
        fadeItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            
            if (itemTop < triggerPoint) {
                item.classList.add('active');
            }
        });
    };
    
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});
