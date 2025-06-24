// Navbar Elements
const themeToggle = document.getElementById("themeToggle");
const hamburger = document.getElementById("hamburger");
const navCenter = document.querySelector(".nav-center");
const navLinks = document.getElementById("navLinks");
const dropdown = document.querySelector(".dropdown");
const searchBox = document.getElementById("searchBox");
const searchIcon = document.getElementById("searchIcon");

// Search Toggle
let searchOpen = false;

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  searchOpen = !searchOpen;

  if (searchOpen) {
    searchIcon.classList.remove("fa-magnifying-glass");
    searchIcon.classList.add("fa-xmark");
  } else {
    searchIcon.classList.remove("fa-xmark");
    searchIcon.classList.add("fa-magnifying-glass");
  }
});

// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeToggle.classList.remove("fa-moon");
    themeToggle.classList.add("fa-sun");
  } else {
    themeToggle.classList.remove("fa-sun");
    themeToggle.classList.add("fa-moon");
  }
});

// Hamburger Toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navCenter.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    if (!navCenter.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove("active");
      navCenter.classList.remove("active");
    }
  }
});

// Dropdown Toggle for Mobile
dropdown.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    if (dropdownContent) {
      dropdownContent.classList.toggle("show");
    }
  }
});

// Typing Animation
const typingElement = document.getElementById("typing");
const texts = ["Frontend Developer", "Programmer", "Tech Enthusiast"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentText = texts[textIndex];
  typingElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    typingSpeed = 100;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    typingSpeed = 50;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 1000;
    } else {
      typingSpeed = 500;
    }
  }

  setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", type);

// Stats Counter Animation
let hasCounted = false;

function animateCounter(id, target, duration) {
  const counter = document.getElementById(id);
  let start = 0;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    counter.textContent = Math.floor(progress * target);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
    }
  }

  requestAnimationFrame(updateCounter);
}

window.addEventListener('scroll', () => {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;
  const sectionTop = statsSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8;

  if (sectionTop < triggerPoint && !hasCounted) {
    hasCounted = true;
    animateCounter('counter1', 1500, 2000);
    animateCounter('counter2', 2500, 2200);
    animateCounter('counter3', 1280, 1800);
    animateCounter('counter4', 3020, 2500);
  }
});

// Fade-up Animation on Scroll
const faders = document.querySelectorAll('.success-card');

function appearOnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}

const options = {
  threshold: 0.3
};

const observer = new IntersectionObserver(appearOnScroll, options);

faders.forEach(card => {
  card.classList.add('fade-up');
  observer.observe(card);
});
// Update Footer Year Dynamically
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Scroll to Top Functionality
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Service Modal Functionality
function openServiceModal(serviceId) {
  const modal = document.getElementById(`${serviceId}-modal`);
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeServiceModal(serviceId) {
  const modal = document.getElementById(`${serviceId}-modal`);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  const modals = document.querySelectorAll('.service-modal');
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});

// Portfolio Project View Functionality
const projectData = {
  ecommerce: {
    title: "E-commerce Website",
    category: "E-commerce",
    description: "A modern e-commerce platform with seamless user experience, featuring product browsing, cart management, secure checkout, and order tracking.",
    features: [
      "Responsive product catalog with search and filters",
      "Secure payment gateway integration",
      "User authentication and profile management",
      "Order tracking and history",
      "Admin dashboard for inventory management"
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    images: [
      "images/website ecomerce.jpg"
    ],
    liveLink: "#",
    githubLink: "#"
  },
  fitness: {
    title: "Fitness Tracking App",
    category: "Fitness",
    description: "Mobile app for tracking workouts and nutrition, helping users achieve their fitness goals.",
    features: [
      "Workout and nutrition tracking",
      "Progress analytics",
      "Goal setting",
      "Social sharing",
      "Personalized recommendations"
    ],
    tech: ["Flutter", "Firebase", "Chart.js"],
    images: [
      "images/fitness app.jpg"
    ],
    liveLink: "#",
    githubLink: "#"
  },
  banking: {
    title: "Banking App UI",
    category: "Banking",
    description: "Modern and secure banking interface design for seamless financial management.",
    features: [
      "Secure login",
      "Account overview",
      "Transaction history",
      "Fund transfers",
      "Bill payments"
    ],
    tech: ["Figma", "React Native", "Node.js"],
    images: [
      "images/banking.jpg"
    ],
    liveLink: "#",
    githubLink: "#"
  },
  uiux: {
    title: "Mobile App UI/UX Design",
    category: "UI/UX",
    description: "Creating intuitive and engaging mobile experiences with a focus on usability and aesthetics.",
    features: [
      "User research",
      "Wireframing",
      "Prototyping",
      "User testing",
      "Visual design"
    ],
    tech: ["Adobe XD", "Sketch", "InVision"],
    images: [
      "images/UI UX.jpg"
    ],
    liveLink: "#",
    githubLink: "#"
  },
  web: {
    title: "Corporate Website",
    category: "Web",
    description: "Responsive corporate website with modern design and optimized performance.",
    features: [
      "Responsive layout",
      "SEO optimization",
      "Content management",
      "Contact forms",
      "Analytics integration"
    ],
    tech: ["HTML", "CSS", "JavaScript", "WordPress"],
    images: [
      "images/corporate website.jpg"
    ],
    liveLink: "#",
    githubLink: "#"
  },
  app: {
    title: "Food Delivery App",
    category: "App",
    description: "Food delivery platform with real-time tracking and seamless ordering experience.",
    features: [
      "Real-time order tracking",
      "Multiple payment options",
      "Restaurant search",
      "User reviews",
      "Push notifications"
    ],
    tech: ["React Native", "Firebase", "Google Maps API"],
    images: [
      "images/food delivery.png"
    ],
    liveLink: "#",
    githubLink: "#"
  }
};

function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalContent = modal.querySelector('.modal-content');
  
  // Update modal content
  modalContent.querySelector('h2').textContent = project.title;
  modalContent.querySelector('p').textContent = project.category;
  
  // Update gallery images
  const gallery = modalContent.querySelector('.modal-gallery');
  gallery.innerHTML = project.images.map(img => `
    <img src="${img}" alt="${project.title}" loading="lazy">
  `).join('');
  
  // Update project details
  const details = modalContent.querySelector('.modal-details');
  details.querySelector('h3 + p').textContent = project.description;
  
  // Update features list
  const featuresList = details.querySelector('ul');
  featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
  
  // Update tech tags
  const techContainer = details.querySelector('.modal-tech');
  techContainer.innerHTML = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
  
  // Update links
  const links = details.querySelector('.modal-links');
  links.querySelector('.live').href = project.liveLink;
  links.querySelector('.github').href = project.githubLink;
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Event Listeners for Project Modal
document.addEventListener('DOMContentLoaded', () => {
  const projectModal = document.getElementById('projectModal');
  if (projectModal) {
    const closeBtn = projectModal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeProjectModal);
    }
    
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // Add click handlers to portfolio items
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
    const viewButton = item.querySelector('.portfolio-link');
    if (viewButton) {
      viewButton.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = item.getAttribute('data-category');
        openProjectModal(projectId);
      });
    }
  });
});

// Chat Functionality
const chatPopup = document.querySelector('.chat-popup');
if (chatPopup) {
  const closeChat = chatPopup.querySelector('.close-chat');
  const chatInput = chatPopup.querySelector('.chat-input input');
  const chatSend = chatPopup.querySelector('.chat-input button');
  const chatBody = chatPopup.querySelector('.chat-body');

  if (closeChat) {
    closeChat.addEventListener('click', () => {
      chatPopup.classList.remove('active');
    });
  }

  if (chatSend && chatInput && chatBody) {
    chatSend.addEventListener('click', () => {
      const message = chatInput.value.trim();
      if (message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';
        messageElement.innerHTML = `<p>${message}</p>`;
        chatBody.appendChild(messageElement);
        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
      }
    });

    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        chatSend.click();
      }
    });
  }
}
