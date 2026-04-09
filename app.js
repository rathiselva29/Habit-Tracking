// app.js - Main application logic
document.addEventListener('DOMContentLoaded', function() {
  // Navigation
  initNavigation();
  
  // Authentication check
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  if (currentPage !== 'login' && localStorage.getItem('userLoggedIn') !== 'true') {
    window.location.href = 'login.html';
    return;
  }

  if (currentPage === 'login' && localStorage.getItem('userLoggedIn') === 'true') {
    window.location.href = 'index.html';
    return;
  }

  // Load user data
  loadUserData();
  
  // Initialize current page
  initPage(currentPage);

  // Register service worker for PWA support
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').catch(error => {
      console.warn('Service worker registration failed:', error);
    });
  }
});

function initNavigation() {
  // Desktop navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.getAttribute('data-page');
      navigateTo(page);
      // Close mobile menu if open
      closeMobileMenu();
    });
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      if (!e.target.closest('.navbar')) {
        closeMobileMenu();
      }
    }
  });
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.add('hidden');
  }
}

function navigateTo(page) {
  // For single-page app simulation, we can use localStorage or just redirect
  window.location.href = `${page}.html`;
}

function initPage(page) {
  switch(page) {
    case 'index':
      initHomePage();
      break;
    case 'login':
      initLoginPage();
      break;
    case 'habit-categories':
      initHabitCategoriesPage();
      break;
    case 'daily-tracker':
      initDailyTrackerPage();
      break;
    case 'progress':
      initProgressPage();
      break;
    case 'customize':
      initCustomizePage();
      break;
  }
}

function loadUserData() {
  // Load user habits and other data
  // This is handled in habits-data.js
}

function initHomePage() {
  const startBtn = document.getElementById('start-tracking-btn');
  if (startBtn) {
    startBtn.addEventListener('click', () => navigateTo('habit-categories'));
  }
}

function initLoginPage() {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Simple login simulation
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      if (email && password) {
        localStorage.setItem('userLoggedIn', 'true');
        navigateTo('index');
      }
    });
  }
}

function initHabitCategoriesPage() {
  displayHabits();
  initHabitModals();
}

function displayHabits(showAll = false) {
  const container = document.getElementById('habits-container');
  if (!container) return;
  
  const basicHabits = habitsData.basic;
  const premiumHabits = showAll ? habitsData.premium : [];
  const allHabits = [...basicHabits, ...premiumHabits];
  
  container.innerHTML = '';
  
  allHabits.forEach(habit => {
    const habitCard = createHabitCard(habit);
    container.appendChild(habitCard);
  });
  
  if (!showAll) {
    const showMoreBtn = document.createElement('button');
    showMoreBtn.id = 'show-more-btn';
    showMoreBtn.className = 'btn btn-primary';
    showMoreBtn.textContent = 'Show More Habits';
    showMoreBtn.addEventListener('click', () => {
      displayHabits(true);
      showMoreBtn.remove();
    });
    container.appendChild(showMoreBtn);
  }
}

function createHabitCard(habit) {
  const card = document.createElement('div');
  card.className = 'habit-card glassmorphism';
  card.setAttribute('data-habit-id', habit.id);
  
  card.innerHTML = `
    <div class="habit-icon">
      <img src="${habit.icon}" alt="${habit.name}" onerror="this.src='assets/icons/default.svg'">
    </div>
    <h3>${habit.name}</h3>
    <p>${habit.description.substring(0, 100)}...</p>
    <button class="btn btn-secondary habit-details-btn" data-habit-id="${habit.id}">Learn More</button>
  `;
  
  return card;
}

function initHabitModals() {
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('habit-details-btn')) {
      const habitId = e.target.getAttribute('data-habit-id');
      showHabitModal(habitId);
    }
  });
  
  // Close modal
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
      closeHabitModal();
    }
  });
}

function showHabitModal(habitId) {
  const habit = getHabitById(habitId);
  if (!habit) return;
  
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content glassmorphism">
      <button class="modal-close">&times;</button>
      <div class="habit-detail">
        <div class="habit-header">
          <img src="${habit.icon}" alt="${habit.name}" class="habit-detail-icon">
          <h2>${habit.name}</h2>
        </div>
        <div class="habit-section">
          <h3>Description</h3>
          <p>${habit.description}</p>
        </div>
        <div class="habit-section">
          <h3>Benefits</h3>
          <ul>
            ${habit.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
          </ul>
        </div>
        <div class="habit-section">
          <h3>Tips & Procedure</h3>
          <ul>
            ${habit.tips.map(tip => `<li>${tip}</li>`).join('')}
          </ul>
        </div>
        <button class="btn btn-primary add-habit-btn" data-habit-id="${habit.id}">Add to My Habits</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Add habit button
  const addBtn = modal.querySelector('.add-habit-btn');
  addBtn.addEventListener('click', function() {
    addUserHabit(habit);
    this.textContent = 'Added!';
    this.disabled = true;
    closeHabitModal();
    // Refresh if on customize page
    if (window.location.pathname.includes('customize')) {
      initCustomizePage();
    }
  });
}

function closeHabitModal() {
  const modal = document.querySelector('.modal-overlay');
  if (modal) {
    modal.remove();
  }
}

function initDailyTrackerPage() {
  displayDailyHabits();
}

function displayDailyHabits() {
  const container = document.getElementById('daily-habits-container');
  if (!container) return;
  
  const userHabits = getUserHabits();
  const today = new Date().toDateString();
  
  container.innerHTML = '';
  
  if (userHabits.length === 0) {
    container.innerHTML = '<p>No habits added yet. Visit <a href="customize.html">Customize Habits</a> to add some!</p>';
    return;
  }
  
  userHabits.forEach(habit => {
    const isCompleted = isHabitCompleted(habit.id, today);
    const habitCard = document.createElement('div');
    habitCard.className = `daily-habit-card glassmorphism ${isCompleted ? 'completed' : ''}`;
    
    habitCard.innerHTML = `
      <div class="habit-icon">
        <img src="${habit.icon}" alt="${habit.name}" onerror="this.src='assets/icons/default.svg'">
      </div>
      <div class="habit-info">
        <h3>${habit.name}</h3>
        <p>${habit.description.substring(0, 60)}...</p>
      </div>
      <button class="habit-check-btn ${isCompleted ? 'checked' : ''}" data-habit-id="${habit.id}">
        ${isCompleted ? '✓' : '○'}
      </button>
    `;
    
    container.appendChild(habitCard);
  });
  
  // Add check button listeners
  document.querySelectorAll('.habit-check-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const habitId = this.getAttribute('data-habit-id');
      const habitCard = this.closest('.daily-habit-card');
      
      if (!habitCard.classList.contains('completed')) {
        markHabitCompleted(habitId);
        this.textContent = '✓';
        this.classList.add('checked');
        habitCard.classList.add('completed');
        
        // Trigger confetti
        createConfetti();
        
        // Check achievements
        const newBadges = checkAchievements();
        if (newBadges.length > 0) {
          showAchievementNotification(newBadges);
        }
        
        // Update streak display
        updateStreakDisplay();
      }
    });
  });
  
  updateStreakDisplay();
}

function updateStreakDisplay() {
  const streakElement = document.getElementById('current-streak');
  if (streakElement) {
    streakElement.textContent = getCurrentStreak();
  }
}

function showAchievementNotification(badges) {
  const notification = document.createElement('div');
  notification.className = 'achievement-notification';
  notification.innerHTML = `
    <h3>🎉 Achievement Unlocked!</h3>
    <ul>
      ${badges.map(id => {
        const badge = badges.find(b => b.id === id);
        return `<li>${badge.icon} ${badge.name}: ${badge.description}</li>`;
      }).join('')}
    </ul>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

function initProgressPage() {
  displayProgressCharts();
  displayBadges();
}

function displayProgressCharts() {
  // This will be implemented with Chart.js
  // For now, show basic stats
  const statsContainer = document.getElementById('progress-stats');
  if (!statsContainer) return;
  
  const totalCompleted = Object.values(habitCompletions).reduce((sum, day) => sum + day.length, 0);
  const uniqueHabits = new Set();
  Object.values(habitCompletions).forEach(day => day.forEach(habit => uniqueHabits.add(habit)));
  
  statsContainer.innerHTML = `
    <div class="stat-card glassmorphism">
      <h3>Total Completions</h3>
      <div class="stat-number">${totalCompleted}</div>
    </div>
    <div class="stat-card glassmorphism">
      <h3>Unique Habits</h3>
      <div class="stat-number">${uniqueHabits.size}</div>
    </div>
    <div class="stat-card glassmorphism">
      <h3>Current Streak</h3>
      <div class="stat-number">${getCurrentStreak()}</div>
    </div>
  `;
}

function displayBadges() {
  const badgesContainer = document.getElementById('badges-container');
  if (!badgesContainer) return;
  
  const userBadges = getUserBadges();
  
  if (userBadges.length === 0) {
    badgesContainer.innerHTML = '<p>No badges earned yet. Keep completing habits!</p>';
    return;
  }
  
  badgesContainer.innerHTML = '';
  userBadges.forEach(badge => {
    const badgeElement = document.createElement('div');
    badgeElement.className = 'badge-card glassmorphism';
    badgeElement.innerHTML = `
      <div class="badge-icon">${badge.icon}</div>
      <h4>${badge.name}</h4>
      <p>${badge.description}</p>
    `;
    badgesContainer.appendChild(badgeElement);
  });
}

function initCustomizePage() {
  document.body.classList.add('customize-page');
  displayUserHabits();
  displaySuggestedHabits();
  initAddCustomHabit();
}

function displayUserHabits() {
  const container = document.getElementById('user-habits-container');
  if (!container) return;
  
  const userHabits = getUserHabits();
  
  container.innerHTML = '';
  
  if (userHabits.length === 0) {
    container.innerHTML = '<p>No habits added yet.</p>';
    return;
  }
  
  userHabits.forEach(habit => {
    const habitElement = document.createElement('div');
    habitElement.className = 'user-habit-item';
    habitElement.innerHTML = `
      <span>${habit.name}</span>
      <button class="btn btn-danger remove-habit-btn" data-habit-id="${habit.id}">Remove</button>
    `;
    container.appendChild(habitElement);
  });
  
  // Add remove listeners
  document.querySelectorAll('.remove-habit-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const habitId = this.getAttribute('data-habit-id');
      removeUserHabit(habitId);
      displayUserHabits();
      displayDailyHabits(); // Refresh daily tracker if on that page
    });
  });
}

function displaySuggestedHabits() {
  const container = document.getElementById('suggested-habits-container');
  if (!container) return;
  
  const allHabits = getAllHabits();
  const userHabits = getUserHabits();
  const userHabitIds = userHabits.map(h => h.id);
  
  const suggested = allHabits.filter(h => !userHabitIds.includes(h.id));
  
  container.innerHTML = '';
  
  suggested.forEach(habit => {
    const habitElement = document.createElement('div');
    habitElement.className = 'suggested-habit-item glassmorphism';
    habitElement.innerHTML = `
      <div class="habit-info">
        <h4>${habit.name}</h4>
        <p>${habit.description.substring(0, 80)}...</p>
      </div>
      <button class="btn btn-primary add-suggested-btn" data-habit-id="${habit.id}">Add</button>
    `;
    container.appendChild(habitElement);
  });
  
  // Add listeners
  document.querySelectorAll('.add-suggested-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const habitId = this.getAttribute('data-habit-id');
      const habit = getHabitById(habitId);
      addUserHabit(habit);
      this.textContent = 'Added!';
      this.disabled = true;
      displayUserHabits();
    });
  });
}

function initAddCustomHabit() {
  const form = document.getElementById('add-custom-habit-form');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('custom-habit-name').value.trim();
    const description = document.getElementById('custom-habit-description').value.trim();
    
    if (name) {
      const customHabit = {
        id: 'custom-' + Date.now(),
        name: name,
        description: description || 'Custom habit',
        benefits: ['Personal growth', 'Discipline building'],
        tips: ['Practice daily', 'Track your progress'],
        icon: 'assets/icons/custom.svg',
        category: 'custom'
      };
      
      addUserHabit(customHabit);
      form.reset();
      displayUserHabits();
      displaySuggestedHabits();
    }
  });
}