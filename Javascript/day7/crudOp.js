const calculate = (p, q, r) => {
  const add = p + q + r;
  document.write("Add = " + add + "<br/>");
  const sub = p - q - r;
  document.write("Subtract = " + sub + "<br/>");
  const mul = p * q * r;
  document.write("Multiply = " + mul + "<br/>");
  const div = p / q / r;
  document.write("Divide = " + div + "<br/>");
};
alert("Start your calculation by entering thre input number");
const a = Number(prompt("Enter numberOne :"));
const b = Number(prompt("Enter numberTwo :"));
const c = Number(prompt("Enter numberThree :"));

calculate(a, b, c);
