window.addEventListener('scroll', function() {
    var headerNav = document.getElementById('headerNav');
    var subNavbar = document.getElementById('subNavbar');
    var scrollPosition = window.scrollY;

    // Get the height of the headerNav
    var headerNavHeight = headerNav.offsetHeight;

    if (scrollPosition >= headerNavHeight) {
        subNavbar.classList.add('fixed');
    } else {
        subNavbar.classList.remove('fixed');
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlighting active section in the subnavbar
window.addEventListener('scroll', function () {
    const subNavItems = document.querySelectorAll('.subNavbartext li a');
    
    subNavItems.forEach(item => {
        const sectionId = item.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        const bounding = section.getBoundingClientRect();

        if (bounding.top <= 150 && bounding.bottom >= 150) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});
