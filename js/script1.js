document.addEventListener("DOMContentLoaded", () => {
  /* ================= SKILL BARS ================= */
  document.querySelectorAll(".bar div").forEach(bar => {
    const value = bar.getAttribute("data-skill");
    setTimeout(() => {
      bar.style.width = value + "%";
    }, 300);
  });

  /* ================= JOURNEY MODAL ================= */
  const jobModal = document.getElementById("jobModal");
  const jobModalContent = document.getElementById("modalContent");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      document.getElementById("modalTitle").innerText = card.dataset.title;
      document.getElementById("modalRole").innerText = card.dataset.role;
      document.getElementById("modalText").innerText = card.dataset.description;

      jobModal.style.display = "flex";
    });
  });

  jobModal?.addEventListener("click", (e) => {
    if (!jobModalContent.contains(e.target)) {
      closeModal();
    }
  });

  /* ================= HIRE ME MODAL ================= */
  const hireBtn = document.getElementById("hireBtn");
  const hireModal = document.getElementById("hireModal");
  const hireModalContent = document.getElementById("hireModalContent");

  hireBtn?.addEventListener("click", () => {
    hireModal.style.display = "flex";
  });

  hireModal?.addEventListener("click", (e) => {
    if (!hireModalContent.contains(e.target)) {
      closeHireModal();
    }
  });
});

/* ================= CLOSE FUNCTIONS ================= */
function closeModal() {
  document.getElementById("jobModal").style.display = "none";
}

function closeHireModal() {
  document.getElementById("hireModal").style.display = "none";
}
