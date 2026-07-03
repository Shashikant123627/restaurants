document.addEventListener('DOMContentLoaded', () => {

    // Custom Cursor Logic
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Add a slight delay for the follower using setTimeout for smoothness
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 50);
        });

        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, select');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorFollower.classList.add('active');
            });
            el.addEventListener('mouseleave', () => {
                cursorFollower.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Reveal Animation Builder (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Handle form submission simply
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = bookingForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Processing...';
            btn.style.opacity = '0.8';
            btn.style.pointerEvents = 'none';

            // Simulate API request
            setTimeout(() => {
                btn.innerText = 'Reservation Confirmed!';
                btn.style.background = '#4BB543'; // Green success color
                btn.style.color = '#fff';
                
                setTimeout(() => {
                    bookingForm.reset();
                    btn.innerText = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.style.opacity = '1';
                    btn.style.pointerEvents = 'auto';
                }, 3000);
            }, 1500);
        });
    }
});
