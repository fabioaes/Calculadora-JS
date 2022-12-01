var input = document.getElementById("inputCalc");
var btn = document.querySelectorAll(".charkeys");
var equal = document.getElementById("equal");
var printResult = document.getElementById("resultado");

var keysList = ["0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "*",
  "-",
  "+",
  "/",
  "",
];

input.addEventListener("keydown", function (event) {
  event.preventDefault();
  if (keysList.includes(event.key)) {
    input.value += event.key;
    return;
  }
  if (event.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (event.key === "Enter") {
    calc();
  }
});

btn.forEach((botton) => {
  botton.addEventListener("click", () => {
    const valueBtn = botton.dataset.value;
    input.value += valueBtn;
    if (valueBtn === "") {
      input.value = "";
    }
  });
});

equal.addEventListener("click", () => calc());

var calc = () => {
  printResult.classList.remove("resultCorreto");
  printResult.value = "ERROR";
  printResult.classList.add("resultError");
  var result = eval(input.value);
  printResult.classList.remove("resultError");
  printResult.classList.add("resultCorreto");
  printResult.value = result;
};
