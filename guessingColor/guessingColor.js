var colors = ["aqua", "azure", "blue", "brown", "crimson", "cyan",
              "firebrick", "forestgreen", "gold", "green", "indigo",
              "khaki", "lime", "maroon", "navy"];
var guess;
var guesses = 0;
var finished = false;
target = colors[Math.floor(Math.random()*colors.length)];

function colorGame(){

  while(!finished){
    guess = prompt("I'm thinking about one of these colors..\n\n"
            +colors);
    guesses++;
    finished = check_color(guess);
  }
}

function check_color(color){
  if(!colors.includes(color)){
    alert("I don't recognise this color");
    return false;
  }
  if(color<target){
    alert("Your color is alphabetically smaller!");
    return false;
  }
  if(color>target){
    alert("Your color is alphabetically larger!");
    return false;
  }

  alert("You got it! The right color is "+color+"!!\n\n"
        +"It took you "+guesses+" guesses!!");
  return true;
}
