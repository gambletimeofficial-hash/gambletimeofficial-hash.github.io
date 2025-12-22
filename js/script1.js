document.addEventListener("DOMContentLoaded", () => {
  /* ================= SKILL BARS ================= */
  document.querySelectorAll(".bar div").forEach(bar => {
    const value = bar.getAttribute("data-skill");
    setTimeout(() => {
      bar.style.width = value + "%";
    }, 300);
  });

  /* ================= JOURNEY MODAL ================= */
  const modal = document.getElementById("jobModal");
  const modalContent = document.getElementById("modalContent");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      document.getElementById("modalTitle").innerText = card.dataset.title;
      document.getElementById("modalRole").innerText = card.dataset.role;
      document.getElementById("modalText").innerText = card.dataset.description;

      modal.style.display = "flex";
    });
  });

  /* Close modal when clicking outside */
  modal.addEventListener("click", (e) => {
    if (!modalContent.contains(e.target)) {
      closeModal();
    }
  });
});

function closeModal() {
  document.getElementById("jobModal").style.display = "none";
}
