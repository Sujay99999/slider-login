const signin = document.getElementById("sign-in");
const signup = document.getElementById("sign-up");
const container = document.getElementById("container");

// here, when we click the sign up button, we add a new class named 'other'
// so that the we can modify the particular elements respectively

signup.addEventListener("click", (event) => {
  event.preventDefault();
  container.classList.add("other");
});

signin.addEventListener("click", (event) => {
  event.preventDefault();
  container.classList.remove("other");
});
