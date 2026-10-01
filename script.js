const quoteForm = document.getElementById("quoteForm");

quoteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    alert("Please enter your full name.");
    return;
  }

  if (email === "") {
    alert("Please enter your email address.");
    return;
  }

  if (phone === "") {
    alert("Please enter your phone number.");
    return;
  }

  if (service === "") {
    alert("Please select a service.");
    return;
  }

  if (message === "") {
    alert("Please tell us about your security requirements.");
    return;
  }

  alert("Thank you! Your enquiry has been received.");

  quoteForm.reset();
});
