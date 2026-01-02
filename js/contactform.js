(function () {
  emailjs.init("nsNu7SPEt8L5RsUEy"); // from EmailJS dashboard
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .sendForm("service_qb0hd3a", "template_dflhdyl", this)
      .then(
        function () {
          alert("Contact form has been send.");
        },
        function (error) {
          alert("Failed to send contact form. Please try again later.");
          console.error(error);
        }
      );
  });
