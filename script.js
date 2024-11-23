const submit = document.getElementById("loginbnt");
const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");
const checkbox = document.querySelector("input[type=checkbox]");

submit.addEventListener("click", () => {
  if (checkbox.checked) {
    if (email.value === "Abmia84@gmail.com" && password.value === "123456") {
      alert("Welcome chief");
      email.value = "";
      password.value = "";
      window.location.href = "./index.html";
    }
  } else if (email.value && password.value) {
    const value = email.value.split("@");
    alert("welcome " + value[0]);
    email.value = "";
    password.value = "";
    window.location.href = "./home.html";
  } else {
    alert("your mail or password is wrong");
  }
});
