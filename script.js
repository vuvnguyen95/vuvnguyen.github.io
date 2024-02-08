document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('nav #menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });

    document.querySelector('.btn').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#projects').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

    const projectContainer = document.querySelector('#projects');
    document.querySelector('#project-prev').addEventListener('click', () => {
        projectContainer.scrollLeft -= 200; // Adjust as needed
    });

    document.querySelector('#project-next').addEventListener('click', () => {
        projectContainer.scrollLeft += 200; // Adjust as needed
    });
});
