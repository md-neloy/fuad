const cart = document.querySelectorAll(".cart");
console.log(cart);
for (let button of cart) {
  button.addEventListener("click", () => {
    alert("Your Product is successfully added to the cart");
  });
}
