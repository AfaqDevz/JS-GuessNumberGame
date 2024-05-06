//Made by Afaq
let randomNumber = Math.ceil((Math.random()*10))

let guessNumber = prompt('Enter a number from 1 to 10');

if(guessNumber <= 0){
    alert('Dont enter number in minus or zero')
}
else if (guessNumber > 10){
    alert('Dont enter number greater than 10')
}

if(guessNumber == randomNumber){
    alert('You won!')
}
else{
    alert('You lost')
}