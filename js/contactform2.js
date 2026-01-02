(function () {
  emailjs.init("nsNu7SPEt8L5RsUEy"); // from EmailJS dashboard
})();

const form = document.getElementById("contact-form2");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs
    .sendForm("service_qb0hd3a", "template_9vkw1po", form)
    .then(
      function () {
        alert("Offer has been send.");
        form.reset(); // ✅ ALWAYS clears inputs
      },
      function (error) {
        alert("Failed to send offer. Please try again later.");
        console.error(error);
      }
    );
});
