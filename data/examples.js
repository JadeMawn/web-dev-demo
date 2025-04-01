export const examples = [
  {
    id: "version1",
    title: "Version 1: HTML",
    code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Website</title>
</head>
<body>
    <h1>Hello, Students!</h1>
    <button>Click Me</button>
</body>
</html>`,
    explanation: {
      title: "What is HTML?",
      content: "Think of HTML as the structure of a website, the very basic code that creates the format of the website:",
      points: [
        "Look at the example here, yes we have a website and the website has some content and structure, but it's very simple and boring",
        "The formatting is basic and there are no colors or cool functions",
        "You'll see when we click the button nothing happens",
        "Just HTML alone is boring and simple",
        "Think of HTML as the frame of a house, it has the necessary things to call it a house, a roof, walls, etc, however, it looks pretty bad right?"
      ],
      conclusion: "HTML provides the basic structure, but we need more to make it interesting!"
    }
  },
  {
    id: "version2",
    title: "Version 2: HTML + CSS",
    code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Website</title>
    <style>
        body {
            background-color: lightblue;
            text-align: center;
        }
        h1 {
            color: darkblue;
        }
        button {
            font-size: 20px;
            padding: 10px;
            background-color: white;
            border: 2px solid darkblue;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Hello, Students!</h1>
    <button>Click Me</button>
</body>
</html>`,
    explanation: {
      title: "What is CSS?",
      content: "CSS is what gives our website a nice appearance:",
      points: [
        "With CSS we can add color and formatting",
        "In this example we've added a light blue background",
        "We've centered the text on the page",
        "We've added dark blue text",
        "The button has custom styling",
        "CSS is fun because we can style our websites in any way we think of, the options are quite limitless"
      ],
      conclusion: "Think of CSS as the finishing touches of a house, the paint, the siding, and decorations. The house looks much better now! We still notice one problem though - when we press the button nothing happens."
    }
  },
  {
    id: "version3",
    title: "Version 3: HTML + CSS + JavaScript",
    code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Website</title>
    <style>
        body {
            background-color: lightblue;
            text-align: center;
            transition: background-color 0.5s;
        }
        h1 {
            color: darkblue;
            transition: color 0.5s;
        }
        button {
            font-size: 20px;
            padding: 10px;
            background-color: white;
            border: 2px solid darkblue;
            cursor: pointer;
            transition: all 0.3s;
        }
        .rainbow {
            animation: rainbow 3s infinite;
        }
        @keyframes rainbow {
            0% { color: red; }
            16% { color: orange; }
            33% { color: yellow; }
            50% { color: green; }
            66% { color: blue; }
            83% { color: indigo; }
            100% { color: violet; }
        }
        .fancy-btn {
            background-color: darkblue;
            color: white;
            transform: scale(1.1);
        }
    </style>
</head>
<body>
    <h1 id="heading">Hello, Students!</h1>
    <button id="demoButton" onclick="changePageStyle()">Click Me</button>
    <div id="messageBox"></div>

    <script>
        let clicked = false;
        
        function changePageStyle() {
            // Get elements
            const heading = document.getElementById('heading');
            const button = document.getElementById('demoButton');
            const body = document.body;
            const messageBox = document.getElementById('messageBox');
            
            if (!clicked) {
                // First click - change everything
                heading.textContent = "Wow! Look what JavaScript can do!";
                heading.classList.add('rainbow');
                body.style.backgroundColor = "#333";
                button.classList.add('fancy-btn');
                button.textContent = "Click Again";
                
                // Create a new message
                messageBox.innerHTML = "<p style='color: white; font-size: 18px; margin-top: 20px;'>JavaScript allows you to change the page dynamically!</p>";
                
                clicked = true;
            } else {
                // Second click - reset everything
                heading.textContent = "Hello, Web Developers!";
                heading.classList.remove('rainbow');
                body.style.backgroundColor = "lightblue";
                button.classList.remove('fancy-btn');
                button.textContent = "Click Me";
                messageBox.innerHTML = "";
                
                clicked = false;
            }
            
            console.log("Button clicked! Page updated.");
        }
    </script>
</body>
</html>`,
    explanation: {
      title: "What is JavaScript?",
      content: "JavaScript is what gives our website functionality:",
      points: [
        "Just about everything on a website that the user interacts with is implemented using JavaScript",
        "In this website we'll see that pressing the button now has an effect",
        "This is done using JavaScript, which is code that changes what HTML and CSS is displayed",
        "Think of JavaScript like the switches, lights, buttons, and mechanisms in your house",
        "JavaScript is like the things hiding in the walls that makes all these features of the house work"
      ],
      conclusion: "With JavaScript, our website becomes interactive and dynamic!"
    }
  },
  {
    id: "version4",
    title: "Version 4: JavaScript Game",
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Tic Tac Toe Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f0f8ff;
            padding: 20px;
        }
        
        h1 {
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        .game-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px auto;
            max-width: 300px;
        }
        
        .board {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
            margin-bottom: 20px;
        }
        
        .cell {
            width: 80px;
            height: 80px;
            background-color: #fff;
            border: 2px solid #3498db;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 36px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .cell:hover {
            background-color: #ecf0f1;
        }
        
        .cell.x {
            color: #e74c3c;
        }
        
        .cell.o {
            color: #3498db;
        }
        
        .cell.highlight {
            background-color: #f1c40f;
            color: #fff;
        }
        
        .status {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
            min-height: 25px;
            color: #2c3e50;
        }
        
        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: #2980b9;
        }
        
        .score-board {
            display: flex;
            justify-content: space-around;
            width: 100%;
            margin-bottom: 20px;
            font-weight: bold;
        }
        
        .score-x, .score-o {
            background-color: #2c3e50;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            min-width: 100px;
        }
        
        .score-x {
            border-bottom: 3px solid #e74c3c;
        }
        
        .score-o {
            border-bottom: 3px solid #3498db;
        }
    </style>
</head>
<body>
    <h1>Tic Tac Toe</h1>
    <p>Classic two-player game. Get three in a row to win!</p>
    
    <div class="game-container">
        <div class="score-board">
            <div class="score-x">Player X: <span id="score-x">0</span></div>
            <div class="score-o">Player O: <span id="score-o">0</span></div>
        </div>
        
        <div class="status" id="status">Player X's turn</div>
        
        <div class="board" id="board">
            <div class="cell" data-index="0"></div>
            <div class="cell" data-index="1"></div>
            <div class="cell" data-index="2"></div>
            <div class="cell" data-index="3"></div>
            <div class="cell" data-index="4"></div>
            <div class="cell" data-index="5"></div>
            <div class="cell" data-index="6"></div>
            <div class="cell" data-index="7"></div>
            <div class="cell" data-index="8"></div>
        </div>
        
        <button id="restart-btn">Restart Game</button>
    </div>
    
    <script>
        // Game elements
        const board = document.getElementById('board');
        const cells = document.querySelectorAll('.cell');
        const status = document.getElementById('status');
        const restartBtn = document.getElementById('restart-btn');
        const scoreXDisplay = document.getElementById('score-x');
        const scoreODisplay = document.getElementById('score-o');
        
        // Game state variables
        let currentPlayer = 'X';
        let gameBoard = ['', '', '', '', '', '', '', '', ''];
        let gameActive = true;
        let scores = { X: 0, O: 0 };
        
        // Winning combinations (indices of the game board)
        const winningCombinations = [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Diagonal top-left to bottom-right
            [2, 4, 6]  // Diagonal top-right to bottom-left
        ];
        
        // Set up event listeners
        cells.forEach(cell => {
            cell.addEventListener('click', () => handleCellClick(cell));
        });
        
        restartBtn.addEventListener('click', restartGame);
        
        // Cell click handler
        function handleCellClick(cell) {
            const index = cell.getAttribute('data-index');
            
            // Ignore click if cell is already filled or game is not active
            if (gameBoard[index] !== '' || !gameActive) {
                return;
            }
            
            // Update the game board and UI
            gameBoard[index] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.classList.add(currentPlayer.toLowerCase());
            
            // Check for win or draw
            if (checkWin()) {
                // Someone won
                gameActive = false;
                status.textContent = \`Player \${currentPlayer} wins!\`;
                scores[currentPlayer]++;
                updateScoreDisplay();
            } else if (checkDraw()) {
                // It's a draw
                gameActive = false;
                status.textContent = "Game ended in a draw!";
            } else {
                // Game continues - switch player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.textContent = \`Player \${currentPlayer}'s turn\`;
            }
        }
        
        // Check if current player has won
        function checkWin() {
            for (const combination of winningCombinations) {
                const [a, b, c] = combination;
                
                if (gameBoard[a] && 
                    gameBoard[a] === gameBoard[b] && 
                    gameBoard[a] === gameBoard[c]) {
                    
                    // Highlight the winning combination
                    highlightWinningCombination(combination);
                    return true;
                }
            }
            
            return false;
        }
        
        // Highlight the winning cells
        function highlightWinningCombination(combination) {
            for (const index of combination) {
                cells[index].classList.add('highlight');
            }
        }
        
        // Check if game is a draw
        function checkDraw() {
            return !gameBoard.includes('');
        }
        
        // Update the score display
        function updateScoreDisplay() {
            scoreXDisplay.textContent = scores.X;
            scoreODisplay.textContent = scores.O;
        }
        
        // Restart the game
        function restartGame() {
            gameBoard = ['', '', '', '', '', '', '', '', ''];
            gameActive = true;
            currentPlayer = 'X';
            
            // Reset the UI
            status.textContent = "Player X's turn";
            cells.forEach(cell => {
                cell.textContent = '';
                cell.classList.remove('x', 'o', 'highlight');
            });
        }
    </script>
</body>
</html>`,
    explanation: {
      title: "What's Happening Here?",
      content: "This is a complete Tic Tac Toe game that demonstrates the use of HTML, CSS, and JavaScript all working together.",
      points: [
        "We can use JavaScript to build interactive websites such as games",
      ],
      conclusion: "This game demonstrates how JavaScript can be used to create interactive experiences by tracking state, handling events, and updating the UI. The Tic Tac Toe game introduces more complex logic, including win condition checking and multi-player turn management, taking web interactivity to the next level."
    }
  }
]; 