document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.getElementById('welcome-screen');
  const main = document.getElementById('home-screen');

  
  const typedText = document.getElementById('typed-text');
  const message = "Welcome to Trigonometry Ratios Flashcard";
  let index = 0;

  function typeChar() {
    if (index < message.length) {
      typedText.textContent += message.charAt(index);
      index++;
      setTimeout(typeChar, 60);
    }
  }

  typeChar();

  
  setTimeout(() => {
    welcome.style.opacity = 0;
    setTimeout(() => {
      welcome.classList.add("hidden");
      main.classList.remove("hidden");
    }, 500);
  }, 5000);

  
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    icon.textContent = newTheme === "dark" ? "🌙" : "☀️";
  });
});

function loadQuiz(category) {
  document.getElementById('home-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');

  const questionBoxes = document.querySelectorAll(".question-box");
  let current = 0;

  function showQuestion() {
    
    questionBoxes.forEach(q => {
      q.classList.remove("active");
      const answer = q.querySelector(".answer");
      if (answer) answer.classList.add("hidden");
    });

  
    const currentBox = questionBoxes[current];
    if (!currentBox) {
      document.getElementById('quiz').innerHTML = `<h3 class="glow" style="text-align:center;">✅ You've completed the session!</h3>`;
      return;
    }

    currentBox.classList.add("active");

    
    setTimeout(() => {
      const answer = currentBox.querySelector(".answer");
      if (answer) answer.classList.remove("hidden");
    }, 3000);

    
    setTimeout(() => {
      current++;
      showQuestion();
    }, 6000);
  }

  showQuestion();
}

function goBack() {
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('home-screen').classList.remove('hidden');
}