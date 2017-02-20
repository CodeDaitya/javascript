var num = Math.floor(Math.random()*100) + 1;
var guess;
var count = 0;
var finished = false;

function game(){
  while(guess!=num){
    guess = parseInt(prompt("I'm thinking of a number in the range of 1 to 100\n\nWhat is the number?"));
    count++;

    finished = check_guess(guess);
  }
}

function check_guess(guess){
  if(isNaN(guess)){
    alert("You guess is not a number.\n\nEnter a number!!");
    return false;
  }else if (guess<1||guess>100) {
    alert("Your guess is not in the range of 1 to 100!!\n\nGet your range right!!!!");
    return false;
  }
  if(guess<num){
    alert("Your number is too small!!");
    return false;
  }
  if (guess>num){
    alert("Your number is too large!!");
    return false;
  }

  alert("You got it! The number was "+num+".\n\nIt took you "+count+" attempts to get the number!");
  return true;

}
