const stage = document.querySelector(".stage");
const toggle = document.querySelector("#toggle");
const speed = document.querySelector("#speed");

let paused = false;

toggle.addEventListener("click", () => {
  paused = !paused;
  stage.classList.toggle("paused", paused);
  toggle.textContent = paused ? "Start hopping" : "Pause hopping";
  toggle.setAttribute("aria-pressed", String(!paused));
});

speed.addEventListener("input", () => {
  // A lower slider value means a slower, longer hop cycle.
  stage.style.animationDuration = `${1 / Number(speed.value)}s`;
  document.querySelectorAll(".sparkle").forEach((sparkle) => {
    sparkle.style.animationDuration = `${1 / Number(speed.value)}s`;
  });
});
