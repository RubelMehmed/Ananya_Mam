const sumSquared = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    return (sum = sum + n * n);
  }
};
console.log(sumSquared(10));
// document.write(sumSquared(10));

const printNum = (n) => {
  let result = "";
  let num = 1;
  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= i; j++) {
      result += num++ + " ";
      if (num > n) return result;
    }
    result += "<br/>";
  }
  return result;
};
console.log(printNum(10));
document.write(printNum(10) + "<br /> " + " <br/>");

const printNumber = (n) => {
  let result = "";
  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= i; j++) {
      result += n++ + " ";
    }
    result += "<br/>";
  }
  return result;
};

console.log(printNumber(10));
document.write(printNumber(10) + "<br /> " + " <br/>");

// const printNNumber = (n) => {
//   let n = 0;
//   for (let i = 0; i <= 4; i++) {
//     for (let j = 0; j <= i; j++) {
//       n++;
//     }
//     return n;
//   }
// };

// document.write(printNNumber(10));
// console.log(printNNumber(10)+ "<br /> " + " <br/>");

// const piramidNum = (n) => {
//   let result = "";
//   for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {}
//     return result;
//   }
// };

// ===============pyramid =============================>

const pyramidNum = (n) => {
  let result = "";
  let num = 1;
  for (let i = 0; i < n; i++) {
    for (let j = n - i; j > 1; j--) {
      result += " ";
    }
    for (let j = 0; j <= i; j++) {
      result += num + " ";
      num++;
      if (num > n) return result;
    }
    result += "<br/>";
  }
  return result;
};
console.log(pyramidNum(11));
document.write(pyramidNum(11) + "<br /> " + " <br/>");

//reall pyraimd here ======================>

const pyramid = (n) => {
  let result = "";
  let num = 1;
  for (let i = 0; i < n; i++) {
    for (let j = n - i; j > 1; j--) {
      result += " ";
    }
    for (let j = 0; j <= i; j++) {
      if (num == 1 || j == 0 || j == i) {
        result += num + " ";
        num++;
      } else {
        result += "  ";
      }
      if (num > n) return result;
    }
    result += "<br/>";
  }
  return result;
};
console.log(pyramid(11));
document.write(pyramid(11));
