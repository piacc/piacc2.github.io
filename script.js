// Countdown Timer
const launchDate = new Date("2026-05-01T00:00:00").getTime();

const countdown = () => {
  const now = new Date().getTime();
  const gap = launchDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = d < 10 ? '0' + d : d;
  document.getElementById("hours").innerText = h < 10 ? '0' + h : h;
  document.getElementById("minutes").innerText = m < 10 ? '0' + m : m;
  document.getElementById("seconds").innerText = s < 10 ? '0' + s : s;
};

setInterval(countdown, 1000);

// Theme Toggle Switch
const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

const applyTheme = (mode) => {
  body.classList.remove("dark-mode", "light-mode");
  body.classList.add(mode);
  localStorage.setItem("theme", mode);
  themeSwitch.checked = mode === "dark-mode";
};

themeSwitch.addEventListener("change", () => {
  const newTheme = themeSwitch.checked ? "dark-mode" : "light-mode";
  applyTheme(newTheme);
});

// On load
const savedTheme = localStorage.getItem("theme") || "dark-mode";
applyTheme(savedTheme);
