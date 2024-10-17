function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const themeToggle = document.getElementById('theme-toggle');

  // Add event listener for theme toggle
  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', themeToggle.checked);
  });

  // Toggle the menu and icon classes
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  
}