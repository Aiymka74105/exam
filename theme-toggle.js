// theme-toggle.js

// Ждём загрузки DOM
window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeLink = document.getElementById('theme-link');
  const savedTheme = localStorage.getItem('theme');

  // Если ранее была выбрана тема — применяем её
  if (savedTheme === 'dark') {
    themeLink.href = 'dark-theme.css';
    toggleBtn.textContent = '☀️';
  } else {
    themeLink.href = 'light-theme.css';
    toggleBtn.textContent = '🌙';
  }

  // По клику переключаем тему
  toggleBtn.addEventListener('click', () => {
    const isDark = themeLink.getAttribute('href') === 'dark-theme.css';
    if (isDark) {
      themeLink.href = 'light-theme.css';
      toggleBtn.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    } else {
      themeLink.href = 'dark-theme.css';
      toggleBtn.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    }
  });
});
