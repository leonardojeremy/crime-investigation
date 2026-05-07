const evidenceButtons = document.querySelectorAll(".evidence");
const evidenceDetails = document.querySelectorAll(".evidence-detail");
const toTop = document.querySelector(".to-top");

evidenceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;

    evidenceButtons.forEach((item) => item.classList.remove("active"));
    evidenceDetails.forEach((item) => item.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(targetId)?.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  toTop.classList.toggle("visible", window.scrollY > 520);
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
