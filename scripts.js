const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    
    var counter = 0;
    var computerObtions = ["assets/rock.png", "assets/paper.png", "assets/scissors.png"];
    var intervalHandle = null;
    var computerChoice;

    function getRandomImage() {
        document.getElementById("result").innerHTML = '<img src="' + computerObtions[counter % computerObtions.length] + '" width="200px"/>';
        counter += 1;

    }

    intervalHandle = setInterval(() => {
        getRandomImage()
    }, 100);

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const play = document.querySelector(".play");
        play.style.display = 'none';
        const result = document.querySelector('.result');
        const playerSeleted = document.getElementById('#p-choice');

        //Function to start playing game
        playerOptions.forEach(option => {

            option.addEventListener('click', function () {
                
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Rounds Left: ${10 - moves}`;

                var number = Math.floor(Math.random() * 3);

                document.getElementById("result").innerHTML = '<img src="' + computerObtions[number] + '" width="200px"/>';

                
                if (number == 0) {
                    computerChoice = "rock";
                } else if (number == 1) {
                    computerChoice = "paper";
                }
                else {
                    computerChoice = "scissors";
                }

                playerOptions.forEach(option => {
                    console.log(this.value);
                    
                    option.disabled = true;
                    clearInterval(intervalHandle);
                    play.style.display = 'block'
                    result.style.display = 'block'
                    //playerSeleted.innerText = this.value;
                })

                //this.style.opacity = 1;
                // Function to check who wins
                winner(this.value, computerChoice)

                // Calling gameOver function after 10 moves
                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
        //random()
        play.addEventListener('click', function () {
                    
            playerOptions.forEach(option => {
                option.disabled = false;
                //this.style.opacity = 1;
                result.style.display = 'none';
            })
            intervalHandle = setInterval(() => {
                getRandomImage()
            }, 100); 
            play.style.display = 'none';
            
        })
    }

    // Function to decide winner
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.innerHTML = '<h2 style="color:grey">It is a Tie</h2>'
        }
        else if (player == 'rock') {
            if (computer == 'paper') {
                result.innerHTML = '<h2 style="color:red">Computer Won</h2>';
                computerScore++;
                computerScoreBoard.textContent = computerScore

            } else {
                result.innerHTML = '<h2 style="color:green">You Won</h2>'
                playerScore++;
                playerScoreBoard.textContent = playerScore
            }
        }
        else if (player == 'scissors') {
            if (computer == 'rock') {
                result.innerHTML = '<h2 style="color:red">Computer Won</h2>';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.innerHTML = '<h2 style="color:green">You Won</h2>';
                playerScore++;
                playerScoreBoard.textContent = playerScore
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissors') {
                result.innerHTML = '<h2 style="color:red">Computer Won</h2>';
                computerScore++;
                computerScoreBoard.textContent = computerScore
            } else {
                result.innerHTML = '<h2 style="color:green">You Won</h2>';
                playerScore++;
                playerScoreBoard.textContent = playerScore
            }
        }
    }

    
    // Function to run when game is over
    const gameOver = (playerOptions, movesLeft) => {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
        const play = document.querySelector(".play");
        const compDispaly = document.querySelector('.comp-display')

        playerOptions.forEach(option => {
            option.style.display = 'none';
            chooseMove.style.display = 'none';
            compDispaly.style.display = 'none'; 
        })

       play.style.display = "none";

        //chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerHTML = 'Game Over!!! <br> You Won The Game! 👍'
            result.style.color = '#308D46';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerHTML = 'Game Over!!! <br> You Lost The Game! 😞';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Draw 🤝';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart Game';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }
    playGame();

}

game();


