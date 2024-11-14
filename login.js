function validateLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // try-catch using for error handling
  try {
    // form checking
    if (!username || !password) {
      throw new Error(" Give your username and password correctly");
    }

    // username and password check
    if (username === "admin" && password === "12345") {
      alert("Login Successfull!");
      errorMessage.textContent = ""; //  clear the before error
    } else {
      throw new Error("Invaild username and password");
    }
  } catch (error) {
    errorMessage.textContent = error.message;
  } finally {
    console.log("Login verified completed!");
  }
}
