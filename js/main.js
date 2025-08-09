// Language translations
const translations = {
    en: {
        appTitle: "Indus Hospital Issue Resolver",
        appSubtitle: "Digital Solution for Healthcare Issue Management",
        doctorTitle: "Doctor",
        doctorDesc: "Report technical issues and get instant solutions",
        patientTitle: "Patient",
        patientDesc: "Submit your concerns and feedback",
        feature1: "Real-time Processing",
        feature2: "AI-Powered Solutions",
        feature3: "Secure & Confidential",
        langText: "اردو"
    },
    ur: {
        appTitle: "انڈس ہسپتال مسئلہ حل کنندہ",
        appSubtitle: "صحت کی دیکھ بھال کے مسائل کے انتظام کے لیے ڈیجیٹل حل",
        doctorTitle: "ڈاکٹر",
        doctorDesc: "تکنیکی مسائل کی اطلاع دیں اور فوری حل حاصل کریں",
        patientTitle: "مریض",
        patientDesc: "اپنے خدشات اور تاثرات جمع کرائیں",
        feature1: "ریئل ٹائم پروسیسنگ",
        feature2: "AI سے چلنے والے حل",
        feature3: "محفوظ اور خفیہ",
        langText: "English"
    }
};

let currentLang = 'en';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    setupEventListeners();
    animateOnLoad();
});

// Language functionality
function initializeLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    currentLang = savedLang;
    updateLanguage();
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ur' : 'en';
    localStorage.setItem('preferredLanguage', currentLang);
    updateLanguage();
}

function updateLanguage() {
    const elements = translations[currentLang];
    
    // Update text content
    Object.keys(elements).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = elements[key];
        }
    });
    
    // Update body class for RTL/LTR
    document.body.className = currentLang === 'ur' ? 'urdu' : '';
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
}

// Event listeners
function setupEventListeners() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Handle escape key if needed
        }
    });
}

// Navigation functions
function navigateToDoctor() {
    // Add loading animation
    const doctorCard = document.querySelector('.doctor-card');
    doctorCard.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        window.location.href = 'doctor.html';
    }, 200);
}

function navigateToPatient() {
    // Add loading animation
    const patientCard = document.querySelector('.patient-card');
    patientCard.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        window.location.href = 'patient.html';
    }, 200);
}

// Animation functions
function animateOnLoad() {
    // Add staggered animation to cards
    const cards = document.querySelectorAll('.selection-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${0.3 + (index * 0.2)}s`;
    });
    
    // Add floating animation to shapes
    const shapes = document.querySelectorAll('.floating-shape');
    shapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 2}s`;
    });
}

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#3b82f6',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '8px',
        zIndex: '3000',
        animation: 'slideInRight 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
