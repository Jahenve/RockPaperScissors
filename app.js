const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    //Click Start game function
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const restart = document.querySelector('.restart');

        playButton.addEventListener('click', () =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            restart.classList.add('fadeIn');
        });
    };

    //Playing the game
    const playMatch = () => {
        const playerOptions = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll(".hands img");


        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
              this.style.animation = "";
            });
          });

        //Computer Options
        const computerOptions = ['Piedra', 'Papel', 'Tijera'];
        
        playerOptions.forEach(playerOption=>{
            playerOption.addEventListener('click', function(){
                //Computer Choice
                const computerNumber = Math.floor(Math.random() *3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() => {
                        //Here is where we call compareHands
                compareHands(this.textContent, computerChoice);

                //update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);


                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
                
            
            });
        });
        
       
       
    }

    //restartGame
    const restartButton = document.getElementById("restartButton");
    restartButton.addEventListener('click', restartGame);
    function restartGame() {
            pScore = 0;
            cScore = 0;
            updateScore();
        }


    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
       


    const compareHands = (playerChoice, computerChoice) =>{
        //Update Text
        const winner = document.querySelector('.winner');
        //Checking for a tie
        if (playerChoice === computerChoice){
            winner.textContent = 'Es un empate';
            return;
        }
        //check for Rock
        if (playerChoice === 'Piedra'){
            if (computerChoice === 'Tijera'){
                winner.textContent = 'Tú ganaste';
                pScore++;
                updateScore();
                return;
            } else{
                winner.textContent = 'Gana la computadora';
                cScore++;     
                updateScore();          
                return;
            }
        }
        //check for Paper
        if (playerChoice === 'Papel'){
            if (computerChoice === 'Piedra'){
                winner.textContent = 'Tú ganaste';
                pScore++;
                updateScore();
                return;
            } else{
                winner.textContent = 'Gana la computadora';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for Scissors
        if (playerChoice === 'Tijera'){
            if (computerChoice === 'Papel'){
                winner.textContent = 'Tú ganaste';
                pScore++;
                updateScore();
                return;
            } else{
                winner.textContent = 'Gana la computadora';
                cScore++
                updateScore();
                return;
            }
        }
    }


    //call inner functions
    startGame();
    playMatch();
}

//Start the game
game();


// Credits: Javascript Rock Paper Scissors Game Tutorial | Web Development Tutorial, by @Deved94
