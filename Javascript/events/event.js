function msgbtn1() {
  alert("Clicked Button One");
}

//<-----------------FORM-------------------------------->
function submitForm() {
  // Get the input elements from the form
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");

  // Get the values of the input elements
  var name = nameInput.value;
  var email = emailInput.value;

  // Validate the form data
  if (name === "" || email === "") {
    alert("Please fill out both the name and email fields.");
    return false;
  }

  // Submit the form data to the server
  // This example uses a fictional "submitFormData" function
  // that sends the form data to the server using an AJAX request
  // submitFormData(name, email);

  // Clear the form
  nameInput.value = "";
  emailInput.value = "";

  // Show a message to the user
  alert("Form submitted successfully!");

  // prevent form submission
  return false;
}
