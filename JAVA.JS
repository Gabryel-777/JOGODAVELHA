const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function checkWinner() {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],  // linhas
    [0,3,6],[1,4,7],[2,5,8],  // colunas
    [0,4,8],[2,4,6]           // diagonais
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function() {
    if (board[i] === '' && !gameOver) {
      board[i] = currentPlayer;
      cells[i].textContent = currentPlayer;

      if (checkWinner()) {
        status.textContent = `Jogador ${currentPlayer} ganhou!`;
        gameOver = true;
      } else if (!board.includes('')) {
        status.textContent = 'Empate!';
        gameOver = true;
      } else {
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        status.textContent = `Vez do jogador: ${currentPlayer}`;
      }
    }
  });
}

restartBtn.addEventListener('click', function() {
  board = ['', '', '', '', '', '', '', '', ''];
  gameOver = false;
  currentPlayer = 'X';
  for (let cell of cells) {
    cell.textContent = '';
  }
  status.textContent = `Vez do jogador: ${currentPlayer}`;
});
