// definition des variables
let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

guessField.focus();


function checkGuess(){
    let userGuess = Number(guessField.value); //var definie par la valeur saisie dans le champs stockée dans number()
        //   si la condition est remplie (true), on execute la première boucle, sinon on passe a la suivente et etc...
        if (guessCount === 1) {
        guesses.textContent = 'Propositions précédentes : ';
        } //ecris les anciennes propositions, apparait lorsque on ecris la premiéèe reponse
        
    guesses.textContent += userGuess + ' '; //ajout de la valeur userGuess a la fin du §guesses + un Space
     
    if (userGuess === randomNumber) {
      lastResult.textContent = 'Bravo, vous avez gagné !';
      lastResult.style.backgroundColor = 'green'; //background color vert si trouve la reponse
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
       lastResult.textContent = '!!! VOUS AVEZ PERDU !!!';
       lastResult.style.backgroundColor = 'violet';
       setGameOver();
    } else {
       lastResult.textContent = 'Faux !';
       lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'C\'est plus !';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'C\'est moins !';
        }
    }
  
    guessCount++;
    guessField.value = '';
    guessField.focus();
}
// execution de l'evènement lorsqu'on clique sur soumettre
guessSubmit.addEventListener('click', checkGuess);


// function setGO appelée dans les boucles de la fonction checkGuess
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Nouveau ';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

// reinitialise le jeu
function resetGame() {
    guessCount = 1;
  
    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

document.getElementById("guessField").addEventListener("keydown", (e) =>{
    if(e.key ==='Enter'){
        document.getElementById("guessSubmit").click();
    }
}
);
  
  
  
