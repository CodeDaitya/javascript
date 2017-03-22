var numberOfFaces = 5;
var theLeftSide = document.getElementById('leftSide');
var theRightSide = document.getElementById('rightSide');

var im = [];

//generates faces on the left side
function generateFaces(){
  for(var i = 0; i<numberOfFaces; i++){
    im[i] = document.createElement('img');
    im[i].src = 'smile.png'; im[i].style.position = 'absolute';
    im[i].style.top = Math.random()*400+'px';
    im[i].style.left = Math.random()*400+'px';
    theLeftSide.appendChild(im[i]);
  }

  // clone the left side, remove an image and append to the right side
  var leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);

  theLeftSide.lastChild.onclick = function nextLevel(event){
    event.stopPropagation();
    while(theLeftSide.firstChild||theRightSide.firstChild){
      theLeftSide.removeChild(theLeftSide.firstChild);

      if(rightSide.firstChild){
        theRightSide.removeChild(theRightSide.firstChild);
      }
    }
    numberOfFaces += 5;
    generateFaces();
  };
}

//proceed to the next level; remove faces, re-generate with +5 faces

//game over on click anything other than the extra image
var theBody = document.getElementsByTagName('body')[0];
theBody.onclick = function gameOver(event){
  alert('Game Over!');

  if(confirm("Do you want to play again?")){
    while(theLeftSide.firstChild||theRightSide.firstChild){
      theLeftSide.removeChild(theLeftSide.firstChild);

      if(rightSide.firstChild)
        theRightSide.removeChild(theRightSide.firstChild);
    }
    numberOfFaces = 5;
    generateFaces();
  }
};
