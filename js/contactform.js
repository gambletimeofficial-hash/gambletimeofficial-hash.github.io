(function () {
  emailjs.init("nsNu7SPEt8L5RsUEy"); // from EmailJS dashboard
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs
    .sendForm("service_qb0hd3a", "template_dflhdyl", form)
    .then(
      function () {
        alert("Contact form has been send.");
        form.reset(); // ✅ ALWAYS clears inputs
      },
      function (error) {
        alert("Failed to send contact form. Please try again later.");
        console.error(error);
      }
    );
});
