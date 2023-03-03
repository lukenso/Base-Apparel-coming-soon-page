function validateEmail() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      document.getElementById("email").classList.remove("invalid");
      document.getElementById("email-error-icon").style.display = "none";
      document.getElementById("email-error").innerHTML = "";
      document.getElementById("email").value = "";
    } else {
      document.getElementById("email").classList.add("invalid");
      document.getElementById("email-error-icon").style.display = "inline-block";
      document.getElementById("email-error").innerHTML = "Please provide a valid email";
    }
  }
