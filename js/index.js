let email = document.querySelector(".contact input[type=email]");
let name = document.querySelector(".contact input[type=text]");
let link = document.querySelector(".contact a");

email.addEventListener("keyup", makeLink);
name.addEventListener("keyup", makeLink);

function makeLink() {
  link.href = "mailto:mason@lakefox.net"+"?subject=Hey%20Mason!%20This%20is%20"+name.value+"%20reach%20me%20at%20"+email.value;
}
