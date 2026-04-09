// confetti.js - Simple confetti animation
function createConfetti() {
  const colors = ['#ff6b6b', '#4ecdc4', '#5dd3ee', '#96ceb4', '#ecd071', '#dda0dd', '#98d8c8'];
  const confettiCount = 100;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Add confetti CSS if not already present
if (!document.querySelector('#confetti-styles')) {
  const style = document.createElement('style');
  style.id = 'confetti-styles';
  style.textContent = `
    .confetti {
      position: fixed;
      top: -10px;
      width: 10px;
      height: 10px;
      z-index: 1000;
      animation: fall linear infinite;
    }
    
    @keyframes fall {
      to {
        transform: translateY(100vh) rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);
}