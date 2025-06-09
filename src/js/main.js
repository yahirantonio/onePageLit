import '../css/index.css'
import '@fontsource/roboto';
import "@fontsource/pt-serif";
import './aboutUs';
import './benefitCard';
import './accordion';

const navbar = document.getElementById("navbar");
const trigger = document.getElementById("trigger");

window.addEventListener("scroll", () => {
  const triggerTop = trigger.getBoundingClientRect().top;

  if (triggerTop <= 100) {
    navbar.classList.add("bg-emerald-700", "shadow");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-emerald-700", "shadow");
  }
});