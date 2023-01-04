var firstName = ["rubel", "james"];
var lastName = ["fakir", "john"];

// Concat Method => Array
const naming = firstName.concat(lastName);

document.write(naming + "<br/>");

// Pop Method => Array

var Bilu = ["Alamin", "Ashim", "Shahin", "Rubel"];
Bilu.pop();
document.write(Bilu + "<br/>");

// Push Method => Array

Bilu.push("Fakir");
document.write(Bilu);

// Shift Method => Array

Bilu.shift();
document.write(Bilu + "<br/>");

Bilu.unshift("Mehmed" + "<br/>");

document.write(Bilu);

var hash = ["rajib", "raju", "roni", "raj", "rubel", "rasel"];

// Splice Method => Array

hash.splice(0, 2);
document.write(hash + "</br>");

hash.splice(1, 0, "rajib", "raju", "raj");
document.write(hash + "</br>");

// Slice Method => Array

hash.slice(0, 1);

document.write(hash + "</br>");

// Sort Method => Array

var num = [4, 5, 1, 6, 7, 8, 3, 2, 9, 3, 3, 8];
num.sort(function (a, b) {
  return a - b;
});
console.log(num);
document.write(num + "<br/>");

const sortedArray = (num) =>
  num.sort(function (a, b) {
    return a - b;
  });

document.write(sortedArray(num) + "<br/>");

const highlighted = new Array();
for (let i = 0; i < highlighted.length; i++) {
  highlighted[i] = prompt("Enter an array element to be highlighted");
}

const highestNumber = (highlighted) =>
  highlighted.sort(function (a, b) {
    return b - a;
  });
document.write(highestNumber(highlighted));

const highNum = (num) => {
  var high = num[0];
  for (var i = 1; i < num.length; i++) if (num[i] > high) high = num[i];
  return high;
};

document.write(
  "The highest number of num array :" + " " + highNum(num) + "<br/>"
);

// two dimension arrays 2D

var info = [
  [1, "A"],
  [2, "B"],
  [3, "C"],
  [4, "D"],
  [5, "E"],
  [6, "F"],
];

for (var i = 0; i < info.length; i++) {
  for (var j = 0; j < info.length; j++) {
    document.write(
      // //   info[i][j] +
      //     " " +
      info[i][0] + info[j][0] + " " + info[i][1] + " " + info[j][1] + "<br/>"
    );
  }
}

//2D array assignment
