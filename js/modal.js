const openModal = document.querySelectorAll("[data-open]");
const closeModal = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openModal) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeModal) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.classList.remove(isVisible);
  });
}

for (const el of closeModal) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
