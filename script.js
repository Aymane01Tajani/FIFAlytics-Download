// Download functionality for Android and iOS
document.addEventListener('DOMContentLoaded', () => {
    // Get download buttons
    const androidBtn = document.getElementById('androidBtn');
    const iosBtn = document.getElementById('iosBtn');

    // Android APK download
    androidBtn.addEventListener('click', () => {
        // Show loading state
        androidBtn.style.opacity = '0.7';
        androidBtn.style.cursor = 'wait';
        
        // Create a temporary link to trigger download
        const link = document.createElement('a');
        link.href = 'assets/App/FIFAlytics.apk'; // Path to your Android APK
        link.download = 'FIFAlytics-Android.apk';
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success feedback
        showDownloadFeedback(androidBtn, 'Android download started!');
        
        // Reset button state
        setTimeout(() => {
            androidBtn.style.opacity = '1';
            androidBtn.style.cursor = 'pointer';
        }, 1000);
    });

    // iOS APK download
    iosBtn.addEventListener('click', () => {
        // Show loading state
        iosBtn.style.opacity = '0.7';
        iosBtn.style.cursor = 'wait';
        
        // Create a temporary link to trigger download
        const link = document.createElement('a');
        link.href = 'assets/App/FIFAlytics-iOS.ipa'; // Path to your iOS IPA file
        link.download = 'FIFAlytics-iOS.ipa';
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success feedback
        showDownloadFeedback(iosBtn, 'iOS download started!');
        
        // Reset button state
        setTimeout(() => {
            iosBtn.style.opacity = '1';
            iosBtn.style.cursor = 'pointer';
        }, 1000);
    });

    // Function to show download feedback
    function showDownloadFeedback(button, message) {
        // Create feedback element
        const feedback = document.createElement('div');
        feedback.textContent = message;
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #00E676 0%, #7CFF00 100%);
            color: #0B0F14;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: 600;
            box-shadow: 0 10px 30px rgba(0, 230, 118, 0.3);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(feedback);
        
        // Remove feedback after 3 seconds
        setTimeout(() => {
            feedback.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 3000);
    }

    // Add animations for feedback
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add parallax effect to background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.background-animation');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add hover effect for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all feature cards
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});