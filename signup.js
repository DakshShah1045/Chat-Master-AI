// Predefined list of valid users
const validUsers = [
  { username: "daksh_shah", password: "daksh20116" },
  { username: "Byte_Tech_Labs", password: "btl_secured_1045" },
  { username: "LikeshSanghvi", password: "ls_btl" }
];

// Handle Sign-In Form Submission
document.querySelector(".signin-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get input values
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  // Check if credentials match any in the list
  let isValid = validUsers.some(user => user.username === username && user.password === password);

  if (isValid) {
    alert("Login Successful! Redirecting...");
    window.location.href = "index.html"; // Redirect to homepage
  } else {
    alert("Invalid Username or Password. Try again.");
  }
});
