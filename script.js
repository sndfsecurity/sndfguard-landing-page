
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 12, 15, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(10, 12, 15, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});


//formsubmit
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const location = document.getElementById('city').value;
        
        if (name && phone && service && location && phone.length === 10) {
            // Show success message
            successMessage.style.display = 'block';
            
            // Reset form
            form.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
            
            // Optional: Submit to formsubmit.co
            // form.submit();
        } else {
            alert('Please fill all required fields correctly. Mobile number must be 10 digits.');
        }
    });
}
