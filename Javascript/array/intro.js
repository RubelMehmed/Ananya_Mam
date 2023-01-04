var Bilu = ["Alamin", "Ashim", "Shahin", "Rubel", ""];
document.write(Bilu + "<br/>");

for (var i = 0; i < Bilu.length; i++) {
  document.write(Bilu[i] + "<br/>");
}

var students = ["Roshan", "Rusha", "Rohan", "Rossa", 7, 8, 3];

for (var i = 0; i < students.length; i++) {
  document.write(
    "<p style='color:blue; background:teal'>" + students[i] + "</p>"
  );
}

var studentPro = new Array(5);
for (var i = 0; i < 5; i++) {
  studentPro[i] = prompt("Enter" + "" + i + " number index");
  document.write(studentPro[i] + "<br/>");
}
