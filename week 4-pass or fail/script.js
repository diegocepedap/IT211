function validatePassword(password) {
    // password: up to 8 chars, 1 uppercase, 1 lowercase.
    if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const password = document.getElementById("password").value;

    // Validate firstName and lastName 
    if (!firstName || !lastName) {
      alert("First name and last name are required.");
      return false;
    }

    // Validate the password using the validatePassword function
    if (!validatePassword(password)) {
      alert("Invalid password. Password must have at least 8 characters, one uppercase letter, and one lowercase letter.");
      return false;
    }

    // All validations passed, show success message
    alert("All form entries are valid.");
    return true;
  }
  
  const firstName = prompt("Enter your first name:");
  const lastName = prompt("Enter your last name:");
  const password = prompt("Enter your password:");
  
  validateForm(firstName, lastName, password);
  
  