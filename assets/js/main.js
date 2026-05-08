// الوظائف المشتركة: dark mode و back to top
(function() {
  // Dark Mode Toggle
  const darkToggle = document.getElementById('darkModeToggle');
  if (darkToggle) {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      darkToggle.innerHTML = '☀️';
    }
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      darkToggle.innerHTML = isDark ? '☀️' : '🌙';
    });
  }

  // Back to Top Button
  const backBtn = document.getElementById('backToTopBtn');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) backBtn.style.display = 'flex';
      else backBtn.style.display = 'none';
    });
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    backBtn.style.display = 'none';
  }
})();