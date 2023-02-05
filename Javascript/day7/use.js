// user id password
const userName = prompt("Enter user name here:");
const userPassword = prompt("Enter user password here:");

function viewUser(a, b) {
  document.write(
    "Your user name: " + a + "</br>" + "Your user password: " + "</br>" + b
  );
  console.log("Your user name" + a + " " + "Your user password" + b);
}
viewUser(userName, userPassword);
