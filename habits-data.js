// habits-data.js
const habitsData = {
  basic: [
    {
      id: 'drink-water',
      name: 'Drink Water',
      description: 'Drinking enough water keeps your body hydrated and supports digestion and circulation.',
      benefits: ['Improves digestion', 'Boosts metabolism', 'Improves brain performance', 'Maintains skin health', 'Helps detox the body'],
      tips: ['Start your day with one glass of water', 'Carry a bottle', 'Drink small amounts regularly', 'Aim for 6–8 glasses daily'],
      icon: 'assets/icons/water.svg',
      category: 'health'
    },
    {
      id: 'exercise',
      name: 'Exercise',
      description: 'Regular exercise improves physical health, mental well-being, and overall fitness.',
      benefits: ['Strengthens muscles and bones', 'Improves cardiovascular health', 'Boosts mood and reduces stress', 'Helps maintain healthy weight', 'Increases energy levels'],
      tips: ['Start with 30 minutes daily', 'Choose activities you enjoy', 'Include both cardio and strength training', 'Stay consistent'],
      icon: 'assets/icons/exercise.svg',
      category: 'fitness'
    },
    {
      id: 'meditation',
      name: 'Meditation',
      description: 'Meditation helps reduce stress, improve focus, and promote emotional health.',
      benefits: ['Reduces stress and anxiety', 'Improves concentration', 'Enhances self-awareness', 'Promotes emotional health', 'Improves sleep quality'],
      tips: ['Start with 5-10 minutes daily', 'Find a quiet space', 'Focus on your breath', 'Use guided apps if needed'],
      icon: 'assets/icons/meditation.svg',
      category: 'mindfulness'
    },
    {
      id: 'reading',
      name: 'Reading',
      description: 'Reading expands knowledge, improves focus, and reduces stress.',
      benefits: ['Expands vocabulary and knowledge', 'Improves focus and concentration', 'Reduces stress', 'Enhances empathy', 'Boosts brain health'],
      tips: ['Set aside 20-30 minutes daily', 'Choose books you enjoy', 'Create a reading routine', 'Keep a reading journal'],
      icon: 'assets/icons/reading.svg',
      category: 'learning'
    }
  ],
  premium: [
    {
      id: 'morning-stretching',
      name: 'Morning Stretching',
      description: 'Morning stretching improves flexibility and prepares your body for the day.',
      benefits: ['Improves flexibility', 'Reduces injury risk', 'Boosts circulation', 'Enhances mood', 'Increases energy'],
      tips: ['Spend 10-15 minutes', 'Focus on major muscle groups', 'Breathe deeply', 'Do it right after waking'],
      icon: 'assets/icons/stretching.svg',
      category: 'fitness'
    },
    {
      id: '10000-steps',
      name: '10,000 Steps Walk',
      description: 'Walking 10,000 steps daily promotes cardiovascular health and weight management.',
      benefits: ['Improves heart health', 'Aids weight management', 'Boosts mood', 'Strengthens bones', 'Reduces disease risk'],
      tips: ['Use a pedometer or phone app', 'Break it into smaller walks', 'Walk briskly', 'Make it enjoyable'],
      icon: 'assets/icons/walking.svg',
      category: 'fitness'
    },
    {
      id: 'digital-detox',
      name: 'Digital Detox',
      description: 'Taking breaks from screens reduces eye strain and improves mental health.',
      benefits: ['Reduces eye strain', 'Improves sleep', 'Enhances focus', 'Reduces anxiety', 'Promotes real connections'],
      tips: ['Set screen time limits', 'Designate tech-free zones', 'Use apps to monitor usage', 'Replace screen time with hobbies'],
      icon: 'assets/icons/digital-detox.svg',
      category: 'wellness'
    },
    {
      id: 'gratitude-journaling',
      name: 'Gratitude Journaling',
      description: 'Writing down things you\'re grateful for improves positivity and mental health.',
      benefits: ['Increases happiness', 'Reduces depression', 'Improves sleep', 'Strengthens relationships', 'Boosts self-esteem'],
      tips: ['Write 3-5 things daily', 'Be specific', 'Do it at the same time', 'Reflect on why you\'re grateful'],
      icon: 'assets/icons/journal.svg',
      category: 'mindfulness'
    },
    {
      id: 'healthy-breakfast',
      name: 'Healthy Breakfast',
      description: 'Eating a nutritious breakfast provides energy and nutrients for the day.',
      benefits: ['Provides sustained energy', 'Improves concentration', 'Supports weight management', 'Boosts metabolism', 'Enhances mood'],
      tips: ['Include protein, fruits, and whole grains', 'Prepare ahead', 'Avoid sugary cereals', 'Eat within 2 hours of waking'],
      icon: 'assets/icons/breakfast.svg',
      category: 'nutrition'
    },
    {
      id: 'mindful-breathing',
      name: 'Mindful Breathing',
      description: 'Mindful breathing exercises reduce stress and improve respiratory health.',
      benefits: ['Reduces stress', 'Improves lung capacity', 'Enhances focus', 'Lowers blood pressure', 'Promotes relaxation'],
      tips: ['Practice 5-10 minutes daily', 'Focus on deep breaths', 'Use the 4-7-8 technique', 'Do it when stressed'],
      icon: 'assets/icons/breathing.svg',
      category: 'mindfulness'
    },
    {
      id: 'cold-shower',
      name: 'Cold Shower',
      description: 'Cold showers improve circulation, boost immunity, and increase alertness.',
      benefits: ['Improves circulation', 'Boosts immunity', 'Increases alertness', 'Reduces inflammation', 'Enhances mood'],
      tips: ['Start with warm water, gradually cool', 'Stay in for 30-60 seconds', 'Breathe deeply', 'Do it in the morning'],
      icon: 'assets/icons/shower.svg',
      category: 'wellness'
    },
    {
      id: 'sleep-8-hours',
      name: 'Sleep 8 Hours',
      description: 'Getting adequate sleep is crucial for physical and mental health.',
      benefits: ['Improves memory', 'Boosts immunity', 'Enhances mood', 'Supports weight management', 'Increases productivity'],
      tips: ['Maintain consistent sleep schedule', 'Create a bedtime routine', 'Avoid screens before bed', 'Keep room cool and dark'],
      icon: 'assets/icons/sleep.svg',
      category: 'wellness'
    },
    {
      id: 'study-session',
      name: 'Study Session',
      description: 'Dedicated study time improves knowledge and cognitive skills.',
      benefits: ['Expands knowledge', 'Improves critical thinking', 'Enhances memory', 'Boosts career prospects', 'Increases confidence'],
      tips: ['Set specific goals', 'Use active learning techniques', 'Take breaks (Pomodoro)', 'Find a quiet study space'],
      icon: 'assets/icons/study.svg',
      category: 'learning'
    },
    {
      id: 'learn-something-new',
      name: 'Learn Something New',
      description: 'Learning new skills keeps your brain active and promotes personal growth.',
      benefits: ['Keeps brain sharp', 'Boosts confidence', 'Opens new opportunities', 'Reduces boredom', 'Enhances creativity'],
      tips: ['Choose topics that interest you', 'Set small daily goals', 'Use online resources', 'Practice regularly'],
      icon: 'assets/icons/learn.svg',
      category: 'learning'
    },
    {
      id: 'deep-work-focus',
      name: 'Deep Work Focus',
      description: 'Focusing deeply on tasks improves productivity and quality of work.',
      benefits: ['Increases productivity', 'Improves work quality', 'Reduces distractions', 'Enhances creativity', 'Builds discipline'],
      tips: ['Schedule deep work blocks', 'Eliminate distractions', 'Work in short bursts', 'Track your progress'],
      icon: 'assets/icons/focus.svg',
      category: 'productivity'
    },
    {
      id: 'evening-reflection',
      name: 'Evening Reflection',
      description: 'Reflecting on your day helps process experiences and plan for tomorrow.',
      benefits: ['Improves self-awareness', 'Reduces stress', 'Enhances gratitude', 'Promotes better sleep', 'Guides personal growth'],
      tips: ['Spend 10-15 minutes', 'Review what went well', 'Note areas for improvement', 'Write in a journal'],
      icon: 'assets/icons/reflection.svg',
      category: 'mindfulness'
    }
  ]
};

// User habits stored in localStorage
let userHabits = JSON.parse(localStorage.getItem('userHabits')) || [];

// Function to get all available habits
function getAllHabits() {
  return [...habitsData.basic, ...habitsData.premium];
}

// Function to get habit by id
function getHabitById(id) {
  return getAllHabits().find(habit => habit.id === id);
}

// Function to add user habit
function addUserHabit(habit) {
  if (!userHabits.find(h => h.id === habit.id)) {
    userHabits.push(habit);
    saveUserHabits();
  }
}

// Function to remove user habit
function removeUserHabit(habitId) {
  userHabits = userHabits.filter(h => h.id !== habitId);
  saveUserHabits();
}

// Function to save user habits
function saveUserHabits() {
  localStorage.setItem('userHabits', JSON.stringify(userHabits));
}

// Function to get user habits
function getUserHabits() {
  return userHabits;
}

// Habit completion tracking
let habitCompletions = JSON.parse(localStorage.getItem('habitCompletions')) || {};

function markHabitCompleted(habitId, date = new Date().toDateString()) {
  if (!habitCompletions[date]) {
    habitCompletions[date] = [];
  }
  if (!habitCompletions[date].includes(habitId)) {
    habitCompletions[date].push(habitId);
    localStorage.setItem('habitCompletions', JSON.stringify(habitCompletions));
    updateStreak();
  }
}

function isHabitCompleted(habitId, date = new Date().toDateString()) {
  return habitCompletions[date] && habitCompletions[date].includes(habitId);
}

function getCompletedHabits(date = new Date().toDateString()) {
  return habitCompletions[date] || [];
}

// Streak calculation
let currentStreak = parseInt(localStorage.getItem('currentStreak')) || 0;

function updateStreak() {
  const today = new Date();
  let streak = 0;
  let checkDate = new Date(today);
  
  while (true) {
    const dateStr = checkDate.toDateString();
    const completed = getCompletedHabits(dateStr);
    if (completed.length > 0) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }
  
  currentStreak = streak;
  localStorage.setItem('currentStreak', currentStreak);
}

function getCurrentStreak() {
  return currentStreak;
}

// Badges and achievements
const badges = [
  { id: 'first-habit', name: 'First Step', description: 'Complete your first habit', icon: '🏆' },
  { id: 'week-streak', name: 'Week Warrior', description: 'Maintain a 7-day streak', icon: '🔥' },
  { id: 'month-streak', name: 'Month Master', description: 'Maintain a 30-day streak', icon: '⭐' },
  { id: 'habit-master', name: 'Habit Master', description: 'Complete 10 different habits', icon: '👑' }
];

let userBadges = JSON.parse(localStorage.getItem('userBadges')) || [];

function checkAchievements() {
  const newBadges = [];
  
  // First habit
  if (getCompletedHabits().length > 0 && !userBadges.includes('first-habit')) {
    newBadges.push('first-habit');
  }
  
  // Week streak
  if (currentStreak >= 7 && !userBadges.includes('week-streak')) {
    newBadges.push('week-streak');
  }
  
  // Month streak
  if (currentStreak >= 30 && !userBadges.includes('month-streak')) {
    newBadges.push('month-streak');
  }
  
  // Habit master
  const uniqueHabits = new Set();
  Object.values(habitCompletions).forEach(day => day.forEach(habit => uniqueHabits.add(habit)));
  if (uniqueHabits.size >= 10 && !userBadges.includes('habit-master')) {
    newBadges.push('habit-master');
  }
  
  if (newBadges.length > 0) {
    userBadges.push(...newBadges);
    localStorage.setItem('userBadges', JSON.stringify(userBadges));
    return newBadges;
  }
  
  return [];
}

function getUserBadges() {
  return userBadges.map(id => badges.find(b => b.id === id)).filter(Boolean);
}