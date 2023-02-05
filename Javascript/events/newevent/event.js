import { greet } from "/.module.js";

document.addEventListener("click", function (e) {
  // Check if the clicked element has the class "my-input"
  if (e.target.className === "my-input") {
    // Change the value of the input to "New Text"
    e.target.value = "New Text";
  }
});

var select = document.querySelector("#division");

select.addEventListener("change", function (event) {
  document.querySelector("#selected").innerHTML =
    "Selected: " + event.target.value;
});

try {
  alert("hello from try block");
  alert(y);
} catch {
  console.log(error);
  console.log(error.stack);
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log(error.stack);
}

console.log(greet);
