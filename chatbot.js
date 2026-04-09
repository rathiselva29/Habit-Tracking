// chatbot.js - AI Assistant for Habit Tracker
document.addEventListener('DOMContentLoaded', function() {
  initChatbot();
});

function initChatbot() {
  // Create chatbot widget HTML
  const chatbotHTML = `
    <div id="chatbot-widget">
      <div id="chatbot-toggle">💬</div>
      <div id="chatbot-window" class="hidden">
        <div id="chatbot-header">
          <span>Habit Assistant</span>
          <button id="chatbot-close">✕</button>
        </div>
        <div id="chatbot-messages"></div>
        <div id="chatbot-input-area">
          <input type="text" id="chatbot-input" placeholder="Ask me anything...">
          <button id="chatbot-send">Send</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', chatbotHTML);

  // Initialize events
  const toggleBtn = document.getElementById('chatbot-toggle');
  const closeBtn = document.getElementById('chatbot-close');
  const sendBtn = document.getElementById('chatbot-send');
  const input = document.getElementById('chatbot-input');

  toggleBtn.addEventListener('click', toggleChatbot);
  closeBtn.addEventListener('click', closeChatbot);
  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
  });

  // Show welcome message
  addBotMessage('Hello! 👋 I\'m your Habit Assistant. I can help you with habit tracking, motivation, and tips for building better habits. How can I help you today?');
}

function toggleChatbot() {
  const window = document.getElementById('chatbot-window');
  window.classList.toggle('hidden');
}

function closeChatbot() {
  const window = document.getElementById('chatbot-window');
  window.classList.add('hidden');
}

function sendMessage() {
  const input = document.getElementById('chatbot-input');
  const message = input.value.trim();

  if (message === '') return;

  // Add user message
  addUserMessage(message);
  input.value = '';

  // Simulate bot response
  setTimeout(() => {
    const response = generateResponse(message);
    addBotMessage(response);
  }, 500);
}

function addUserMessage(message) {
  const messagesContainer = document.getElementById('chatbot-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'chatbot-message user';
  messageDiv.textContent = message;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addBotMessage(message) {
  const messagesContainer = document.getElementById('chatbot-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'chatbot-message bot';
  messageDiv.textContent = message;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateResponse(userMessage) {
  const message = userMessage.toLowerCase();

  // Habit tracking related responses
  if (message.includes('habit') || message.includes('track')) {
    const responses = [
      'Great question! You can track your daily habits by going to the Daily Tracker page. Mark habits as complete each day to build your streak! 📊',
      'To add new habits, visit the Customize Habits page. There you can create custom habits or choose from suggested ones! ✨',
      'Consistent tracking is key! Even small habits compound over time. Keep going! 💪'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  if (message.includes('streak') || message.includes('progress')) {
    const responses = [
      'Your streaks are shown in the Progress page! Keep consistent daily completions to build longer streaks. 🔥',
      'The longer your streak, the stronger your habit becomes! Check your Progress page to see how far you\'ve come! 📈',
      'Building streaks takes dedication. Focus on one habit at a time if needed! 🎯'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  if (message.includes('customize') || message.includes('add') || message.includes('habit')) {
    const responses = [
      'To customize your habits, go to the Customize Habits page. You can add custom habits or remove ones you don\'t want to track! 🛠️',
      'You can create personalized habits that match your goals. Don\'t forget to describe them so you remember your purpose! 📝',
      'Mix and match habits! Some people do well with many small habits, others prefer focusing on a few important ones. Do what works for you! 🌟'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  if (message.includes('motivat') || message.includes('tired') || message.includes('stuck')) {
    const responses = [
      'Remember why you started! Small steps lead to big changes. You\'ve got this! 💪',
      'It\'s okay to feel unmotivated sometimes. Try picking just one habit to focus on today. Progress, not perfection! 🎯',
      'Check your Progress page to see how far you\'ve come! Celebrate your wins, no matter how small! 🎉',
      'Take it one day at a time. Even completing one habit is a victory! Keep pushing! 🚀'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  if (message.includes('how') || message.includes('help') || message.includes('what')) {
    const responses = [
      'I can help you with habit tracking, motivation, and tips! You can also explore different pages like Daily Tracker, Progress, and Customize Habits. What would you like to know? 🤔',
      'Here\'s what I can help with:\n• Creating and customizing habits\n• Tips for staying motivated\n• Tracking daily progress\n• Building streaks\n\nWhat interests you? 📚'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  if (message.includes('badge') || message.includes('achievement')) {
    const responses = [
      'Badges are awesome! You earn them by reaching milestones in your habits. Check your Progress page to see your achievements! 🏆',
      'Keep completing your habits consistently to unlock badges and achievements! Each one represents your dedication! ⭐'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    const responses = [
      'Hey there! 👋 Ready to build some amazing habits? What can I help you with?',
      'Hello! 🌟 Great to see you tracking your habits. How can I assist you today?',
      'Hi! 😊 Excited to help you on your habit-building journey!'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Default response
  const defaultResponses = [
    'That\'s a great question! I\'m here to help with habit tracking. Try asking me about daily tracking, customizing habits, or staying motivated! 💡',
    'I\'m your Habit Assistant! Ask me about tracking habits, building streaks, or getting motivation! 🚀',
    'That\'s interesting! Need help with anything habit-related? I\'m here to support you! 🌟'
  ];
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}