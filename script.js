// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all functionality
  initTheme()
  initNavigation()
  initScrollAnimations()
  initCounters()
  initParallax()
  initCourseFiltering()
  initContactForm()
  initSmoothScrolling()
})
// Disable right-click
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable developer tools shortcuts
document.addEventListener('keydown', function (e) {
  if (e.key === "F12" || 
      (e.ctrlKey && e.key === 'u') || 
      (e.ctrlKey && e.key === 's') || 
      (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key))) {
    e.preventDefault();
  }
});

// Disable text selection and copy
document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});

document.addEventListener('copy', function (e) {
  e.preventDefault();
});

// Disable drag for images
document.addEventListener('dragstart', function (e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});

// Theme Management
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle")
  const body = document.body
  const icon = themeToggle.querySelector("i")

  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem("theme") || "light"

  // Apply saved theme
  if (savedTheme === "dark") {
    body.setAttribute("data-theme", "dark")
    icon.classList.remove("fa-moon")
    icon.classList.add("fa-sun")
  }

  // Theme toggle functionality
  themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme")

    if (currentTheme === "dark") {
      // Switch to light mode
      body.removeAttribute("data-theme")
      icon.classList.remove("fa-sun")
      icon.classList.add("fa-moon")
      localStorage.setItem("theme", "light")
    } else {
      // Switch to dark mode
      body.setAttribute("data-theme", "dark")
      icon.classList.remove("fa-moon")
      icon.classList.add("fa-sun")
      localStorage.setItem("theme", "dark")
    }
  })
}

// Navigation functionality
function initNavigation() {
  const navbar = document.getElementById("navbar")
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")
    })

    // Close mobile menu when clicking on links
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
      }
    })
  }

  // Active link highlighting
  function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html"
    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active")
      }
    })
  }
  setActiveLink()
}

// Scroll animations
function initScrollAnimations() {
  const animateElements = document.querySelectorAll(".animate-on-scroll")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  animateElements.forEach((element) => {
    observer.observe(element)
  })
}

// Animated counters
function initCounters() {
  const counters = document.querySelectorAll(".stat-number")

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const target = Number.parseInt(counter.getAttribute("data-target"))
          const suffix = counter.getAttribute("data-suffix") || ""

          animateCounter(counter, target, suffix)
          counterObserver.unobserve(counter)
        }
      })
    },
    { threshold: 0.5 },
  )

  counters.forEach((counter) => {
    counterObserver.observe(counter)
  })
}

function animateCounter(element, target, suffix) {
  let current = 0
  const increment = target / 100
  const duration = 2000
  const stepTime = duration / 100

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current).toLocaleString() + suffix
  }, stepTime)
}

// Parallax effects
function initParallax() {
  const parallaxElements = document.querySelectorAll(".hero-bg, .page-hero .hero-bg")

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5

    parallaxElements.forEach((element) => {
      element.style.transform = `translateY(${rate}px)`
    })
  })
}

// Course filtering
function initCourseFiltering() {
  const categoryButtons = document.querySelectorAll(".category-btn")
  const courseCards = document.querySelectorAll(".course-card")

  if (categoryButtons.length === 0 || courseCards.length === 0) return

  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category")

      // Update active button
      categoryButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter courses
      courseCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category")

        if (category === "all" || cardCategory === category) {
          card.style.display = "block"
          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
          }, 100)
        } else {
          card.style.opacity = "0"
          card.style.transform = "translateY(20px)"
          setTimeout(() => {
            card.style.display = "none"
          }, 300)
        }
      })
    })
  })
}

// Contact form handling
function initContactForm() {
  const contactForm = document.getElementById("contact-form")

  if (!contactForm) return

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const formObject = {}

    formData.forEach((value, key) => {
      formObject[key] = value
    })

    // Validate form
    if (validateForm(formObject)) {
      // Show loading state
      const submitButton = this.querySelector('button[type="submit"]')
      const originalText = submitButton.innerHTML
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
      submitButton.disabled = true

      // Simulate form submission
      setTimeout(() => {
        showNotification("Message sent successfully! We'll get back to you within 24 hours.", "success")
        this.reset()
        submitButton.innerHTML = originalText
        submitButton.disabled = false
      }, 2000)
    }
  })
}

function validateForm(data) {
  const required = ["firstName", "lastName", "email", "phone", "course", "message"]
  const errors = []

  required.forEach((field) => {
    if (!data[field] || data[field].trim() === "") {
      errors.push(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`)
    }
  })

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (data.email && !emailRegex.test(data.email)) {
    errors.push("Please enter a valid email address")
  }

  // Phone validation
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
  if (data.phone && !phoneRegex.test(data.phone.replace(/\s/g, ""))) {
    errors.push("Please enter a valid phone number")
  }

  if (errors.length > 0) {
    showNotification(errors.join("<br>"), "error")
    return false
  }

  return true
}

function showNotification(message, type) {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification")
  existingNotifications.forEach((notification) => notification.remove())

  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `

  // Add notification styles with Orange/Blue theme
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        background: ${type === "success" ? "#f97316" : "#dc2626"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `

  // Add to document
  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(400px)"
    setTimeout(() => notification.remove(), 300)
  }, 5000)
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80 // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments

    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Performance optimizations
const debouncedScroll = debounce(() => {
  // Handle scroll events that don't need to run on every scroll
}, 100)

const throttledScroll = throttle(() => {
  // Handle scroll events that need frequent updates (like parallax)
}, 16) // ~60fps

window.addEventListener("scroll", debouncedScroll)
window.addEventListener("scroll", throttledScroll)

// Lazy loading for images
function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Initialize lazy loading if needed
if (document.querySelectorAll("img[data-src]").length > 0) {
  initLazyLoading()
}

// Error handling
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", e.error)
})

// Accessibility improvements


// Initialize accessibility features
initAccessibility()

// Service Worker registration for PWA capabilities (optional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData) {
  // Placeholder for analytics tracking
  console.log("Event tracked:", eventName, eventData)

  // Example: Google Analytics 4
  // gtag('event', eventName, eventData);

  // Example: Facebook Pixel
  // fbq('track', eventName, eventData);
}

// Track important user interactions
document.addEventListener("click", (e) => {
  const target = e.target.closest("a, button")
  if (target) {
    const text = target.textContent.trim()
    const href = target.href

    if (href && href.includes("contact")) {
      trackEvent("contact_click", { text, href })
    } else if (href && href.includes("courses")) {
      trackEvent("courses_click", { text, href })
    } else if (target.classList.contains("btn-primary")) {
      trackEvent("cta_click", { text })
    } else if (target.classList.contains("theme-toggle")) {
      const currentTheme = document.body.getAttribute("data-theme") || "light"
      trackEvent("theme_toggle", { from: currentTheme, to: currentTheme === "dark" ? "light" : "dark" })
    }
  }
})

// Performance monitoring
const perfObserver = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === "navigation") {
      console.log("Page load time:", entry.loadEventEnd - entry.loadEventStart)
    }
  }
})

if (PerformanceObserver.supportedEntryTypes.includes("navigation")) {
  perfObserver.observe({ entryTypes: ["navigation"] })
}

// Console welcome message with Orange/Blue theme
console.log(`
🧡 Welcome to Animage Digiskill!
🚀 Empowering Digital Futures Through Innovation & Excellence
📧 Contact us: info@animagedigiskill.com
🌐 Visit: https://animagedigiskill.com
🎨 Themed in Orange & Blue with Dark/Light Mode
🌙 Toggle theme with the button in navigation!
`)


document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".category-btn");
    const courseCards = document.querySelectorAll(".course-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            // Toggle active class on buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Show/hide courses
            courseCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                if (category === "all" || cardCategory === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});


  // Course filtering and animations
        document.addEventListener('DOMContentLoaded', function() {
            const categoryButtons = document.querySelectorAll('.category-btn');
            const courseCards = document.querySelectorAll('.course-card');
            const coursesGrid = document.getElementById('courses-grid');
            
            // Add click event listeners to category buttons
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    
                    // Remove active class from all buttons
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Filter courses with animation
                    filterCoursesWithAnimation(category);
                });
            });
            
            function filterCoursesWithAnimation(category) {
                // Add loading state
                coursesGrid.classList.add('loading');
                
                // First, fade out all cards
                courseCards.forEach(card => {
                    card.classList.add('filtering');
                });
                
                // After animation, show/hide cards
                setTimeout(() => {
                    courseCards.forEach(card => {
                        if (category === 'all' || card.getAttribute('data-category') === category) {
                            card.classList.remove('hidden', 'filtering');
                            card.style.display = 'block';
                        } else {
                            card.classList.add('hidden');
                            card.style.display = 'none';
                        }
                    });
                    
                    // Remove loading state
                    coursesGrid.classList.remove('loading');
                    
                    // Trigger scroll animation for visible cards
                    setTimeout(() => {
                        const visibleCards = document.querySelectorAll('.course-card:not(.hidden)');
                        visibleCards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('visible');
                            }, index * 100);
                        });
                    }, 100);
                }, 300);
            }
            
            // Intersection Observer for scroll animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);
            
            // Observe all elements with animate-on-scroll class
            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });
            
            // Enhanced hover effects for course cards
            courseCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-12px)';
                    this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)';
                });
            });
            
            // Add parallax effect to hero section
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.page-hero');
                const heroContent = document.querySelector('.page-hero-content');
                
                if (hero && heroContent) {
                    const rate = scrolled * -0.5;
                    heroContent.style.transform = `translateY(${rate}px)`;
                }
            });
            
            // Add loading animation on page load
            window.addEventListener('load', function() {
                setTimeout(() => {
                    courseCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 150);
                    });
                }, 500);
            });
        });


      
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Optionally: persist preference
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });

  // On page load: apply saved theme
  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
  });
