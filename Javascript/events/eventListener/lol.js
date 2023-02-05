document.querySelector("button").addEventListener("click", listenerFunction);
document.querySelector("check").addEventListener("click", function () {
  document.write("you click on a anonymous function");
});

function listenerFunction() {
  alert("Hello , You are using event listener function");
}

// document.querySelector(".mybtn").addEventListener("click", btnclick);

// function btnclick() {
//   document.querySelector("h1").innerHTML = this.innerHTML + "is clicked!";
// }

const len = document.querySelectorAll(".mybtn").length;

document.querySelectorAll(
  ".mybtn"[i].addEventListener("click", function () {
    document.querySelector("h1").innerHTML = this.innerHTML = "is clicked";
  })
);

const param = document.querySelector("#cssc");
Text.addEventListener("click", function () {
  Text.className = "textstyle";
});

const para = document
  .querySelectorAll(".para")
  .addEventListener("click", () => {
    para.array.forEach((element) => {
      element.className = "textStyle";
//     });
//   });

const para = document.querySelectorAll(".para");
const change = true;
function changeMe() {
  document.querySelectorAll(".para").addEventListener;
}

if (change) {
  document.querySelectorAll(".para")[2].addEventListener("click", () => {
    for (let i = 0; i < para.length; i++) {
      para[i].className = "textStyle";
    }
  });
} else {
  document.querySelectorAll(".para")[2].addEventListener("click", () => {
    for (let i = 0; i < para.length; i++) {
      para[i].className = "textStyle";
    }
  });
}

const names = ["ashim", "shahin", "rubel"];
for (let name of names) {
  document.write(name + "\t");
}

// =======object____________
let student = [
  {
    id: 1,
    name: "rubel mehmed",
    age: 23,
    profession: "student",
  },

  {
    id: 2,
    name: "ashim ghosh",
    age: 20,
    profession: "student",
  },
  {
    id: 3,
    name: "shahin rahman",
    age: 23,
    profession: "student",
  },
  {
    id: 1,
    name: "rubel mehmed",
    age: 23,
    profession: "student",
  },
];

for (let h of student) {
  for (let v in h) document.write(v + ":" + " " + h[v] + "  ; " + "<br/>");
};
}