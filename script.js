const arr=[
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

function sudokuGrid() {
    const mainBox = document.querySelector('.main-box');
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          const cellValue = arr[i][j];
          const cellElement = mainBox.querySelector(`.box${i + 1} .sub${j + 1}`);
    
          if (cellValue !== 0) {
            cellElement.textContent = cellValue;
          }
        }
      }
    }
      window.onload = sudokuGrid;      
      const numberButtons = document.querySelectorAll(".buttons button");
const inputElements = document.querySelectorAll(".main-box input");
const currentNumber = document.getElementsByClassName('current')[0];
let current = null;
let selectedNumber = null;
numberButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    selectedNumber = index + 1; 
    current = index + 1;
    currentNumber.textContent=`Current : ${current}`;
  });
});
inputElements.forEach((input) => {
  input.addEventListener("click", () => {
    if (selectedNumber !== null) {
      input.value = selectedNumber; 
    }
  });
});
