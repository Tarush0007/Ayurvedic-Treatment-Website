document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.getElementById("newsletter-form");
  const message = document.querySelector(".message");

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    message.textContent = "Thanks for subscribing!";
    message.style.color = "#00695c";
    newsletterForm.reset();
  });

  const bookButtons = document.querySelectorAll(".book-btn");
  bookButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Thanks for choosing this treatment. Our team will contact you shortly!");
    });
  });
});
