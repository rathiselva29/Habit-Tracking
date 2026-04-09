# HabitFlow - Modern Habit Tracker

A beautiful, modern habit tracking web application built with vanilla HTML, CSS, and JavaScript. Features glassmorphism design, gamification, AI chatbot, and comprehensive progress analytics.

## Features

- **Modern UI**: Glassmorphism design with soft gradients and smooth animations
- **Habit Management**: Add custom habits or choose from premium suggestions
- **Daily Tracking**: Mark habits as completed with confetti celebrations
- **Progress Analytics**: Charts showing daily, weekly, and monthly progress
- **Gamification**: Streaks, badges, and achievements system
- **AI Health Coach**: Interactive chatbot for habit advice and motivation
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Local Storage**: All data persists locally in the browser

## Getting Started

1. Clone or download the repository
2. Open `index.html` in your web browser
3. Start by logging in (any email/password works for demo)
4. Add habits from the Habit Categories page
5. Track your daily progress in the Daily Tracker

## Project Structure

```
habit-tracker/
├── index.html              # Home page
├── login.html              # Login page
├── habit-categories.html   # Browse and add habits
├── daily-tracker.html      # Daily habit tracking
├── progress.html           # Progress dashboard with charts
├── customize.html          # Add custom habits
├── style.css               # Main stylesheet
├── app.js                  # Main application logic
├── habits-data.js          # Habit data and management
├── confetti.js             # Confetti animation
├── chatbot.js              # AI health coach
└── assets/
    ├── icons/              # Habit icons (SVG)
    └── illustrations/      # UI illustrations (SVG)
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with glassmorphism, gradients, and animations
- **Vanilla JavaScript**: No frameworks, pure JS for all functionality
- **Chart.js**: For progress visualization (via CDN)
- **Local Storage**: For data persistence

## Key Features Implementation

### Glassmorphism Design
- Backdrop-filter blur effects
- Semi-transparent backgrounds
- Soft shadows and borders

### Habit System
- Predefined habit categories
- Custom habit creation
- Local storage persistence

### Gamification
- Streak tracking
- Achievement badges
- Confetti celebrations

### AI Chatbot
- Keyword-based responses
- Health and wellness advice
- Motivational support

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography

## Deployment

This is a static website that can be deployed to any web hosting service or GitHub Pages:

1. Upload all files to your web server
2. Ensure the `assets/` folder is included
3. Open `index.html` to start using the app

## GitHub Pages

To publish this project as a GitHub Pages site (no build step needed):

1. Push the repository to GitHub.
2. In your GitHub repo, go to **Settings → Pages**.
3. Under **Source**, select the `main` (or `master`) branch and `/ (root)` folder.
4. Save, then visit the provided GitHub Pages URL (e.g., `https://<your-username>.github.io/<repo-name>`).

> Tip: If you want it to live at `https://<your-username>.github.io/`, name the repo `<your-username>.github.io`.

## Browser Support

- Chrome 76+
- Firefox 70+
- Safari 12+
- Edge 79+

## Contributing

Feel free to fork this project and add your own features! Some ideas:
- Calendar heatmap view
- Social sharing features
- Advanced analytics
- Habit reminders
- Data export/import

## License

This project is open source and available under the MIT License.