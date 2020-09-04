// hide top menu
const navBtn = document.querySelector('.btn-nav');
const navContainer = document.querySelector('.nav-menu-container');
const navMenu = document.querySelector('.nav-menu');

navBtn.addEventListener('click', () => {
    const containerHeight = navContainer.getBoundingClientRect().height;
    const navMenuHeight = navMenu.getBoundingClientRect().height;

    if (containerHeight === 0) {
        navContainer.style.height = `${navMenuHeight}px`;
    } else {
        navContainer.style.height = 0;
    }
});

// fixed nav
const navBar = document.getElementById('nav');
const backBtn = document.querySelector('.back-btn')

window.addEventListener('scroll', () => {
    const scrollDepth = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if (scrollDepth > navHeight) {
        navBar.classList.add('fixed-nav');
    }
    else {
        navBar.classList.remove('fixed-nav');
    }

    if (scrollDepth > '500') {
        backBtn.classList.add('visible');
    }
    else {
        backBtn.classList.remove('visible');
    }
});

// fix scrolling behavior
const navLinks = document.querySelectorAll('.link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navContainer.style.height = 0;

        const sectionId = e.currentTarget.getAttribute('href').slice(1);
        const targetSection = document.getElementById(sectionId);
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = navContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');

        let position = targetSection.offsetTop - navHeight;

        if (navHeight > 80) {
            position = position + containerHeight;
        }

        if (!fixedNav) {
            position = position - navHeight;
        }

        window.scrollTo({
            top: position,
            left: 0
        });
    });
})

// set current year
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


