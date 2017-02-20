var num = Math.floor(Math.random()*100) + 1;
var guess;
var count = 0;
while(guess!=num){
  guess = parseInt(prompt("I'm thinking of a number in the range of 1 to 100\n\nWhat is the number?"));
  count++;

  if(isNaN(guess)){
    alert("You guess is not a number.\n\nEnter a number!!");
    continue;
  }else if (guess<1||guess>100) {
    alert("Your guess is not in the range of 1 to 100!!\n\nGet your range right!!!!");
    continue;
  }

  if(guess<num)
    alert("Your number is too small!!");
  else if (guess>num)
    alert("Your number is too large!!");
  else
    break;
}

alert("You got it! The number was "+num+".\n\nIt took you "+count+" attempts to get the number!");
