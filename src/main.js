const errorCounterHTML = document.getElementById('error-counter');
const sudokuHTMLBoard = document.getElementById("sudoku-board");
// Error counter
let errorCount = 0;

// Timer
let seconds = 0;
let minutes = 0;

function handleCellInput(e) {
  const cell = e.target;
  const value = cell.value;

  // Allow only digits 1–9
  if (!/^[1-9]$/.test(value)) {
    cell.value = '';
    return;
  }

  const row = parseInt(cell.dataset.row, 10);
  const col = parseInt(cell.dataset.col, 10);
  const index = row * 9 + col;

  // Validate input
  if (value == sudokuSolvedBoard[index]) {
    cell.value = value;
  }
  else {
    cell.value = '';
    errorCount += 1;
    // Flash red for 500ms
    cell.style.backgroundColor = '#f8a2aa';
    setTimeout(() => {
      cell.style.backgroundColor = '';
    }, 500);
    errorCounterHTML.textContent = `Errors: ${errorCount}`;
  }
}

function initSudokuHTMLBoard() {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = document.createElement("input");

      cell.type = "text";
      cell.maxLength = 1;
      cell.classList.add("cell");

      // Store row and column for JS use
      cell.dataset.row = row;
      cell.dataset.col = col;

      sudokuHTMLBoard.appendChild(cell);
    }
  }

  // attach input callback
  document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('input', handleCellInput);
  });
}

function fillBoardStart() {
  const allCells = document.querySelectorAll('.cell');
  allCells.forEach((cell, index) => {
    const new_char = sudokuStartBoard[index];
    if (new_char == '.') {
      cell.value = '';
    }
    else {
      cell.value = new_char;
    }
  });
}

// stolen code
function startTimer() {
  const timeCounter = document.getElementById('time-counter');
  setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    const secStr = seconds < 10 ? '0' + seconds : seconds;
    const minStr = minutes < 10 ? '0' + minutes : minutes;
    timeCounter.textContent = `Time: ${minStr}:${secStr}`;
  }, 1000);
}

// On page load
initSudokuHTMLBoard();
growSudokuSeed();
fillBoardStart();
startTimer();
