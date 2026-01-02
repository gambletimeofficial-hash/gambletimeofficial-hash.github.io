(function () {
  emailjs.init("nsNu7SPEt8L5RsUEy"); // from EmailJS dashboard
})();

document
  .getElementById("contact-form2")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .sendForm("service_qb0hd3a", "template_9vkw1po", this)
      .then(
        function () {
          alert("Offer has been send.");
        },
        function (error) {
          alert("Failed to send offer. Please try again later.");
          console.error(error);
        }
      );
  });