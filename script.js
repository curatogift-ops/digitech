document.addEventListener('DOMContentLoaded', () => {
    // WhatsApp Popup Logic
    const popup = document.getElementById('whatsapp-popup');
    const closeBtn = document.getElementById('close-popup');
    const popupKey = 'whatsapp_popup_shown';

    // Check if popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem(popupKey);

    if (!hasShownPopup) {
        setTimeout(() => {
            popup.classList.add('show');
            popup.classList.remove('hidden');
            sessionStorage.setItem(popupKey, 'true');
        }, 3000); // 3 seconds delay
    }

    // Close popup
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            popup.classList.remove('show');
            setTimeout(() => {
                popup.classList.add('hidden');
            }, 400); // Wait for transition
        });
    }

    // Mobile Menu Logic
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Change icon
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
});
