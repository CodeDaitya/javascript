var numberOfFaces = 5;
var theLeftSide = document.getElementById('leftSide');

var im = [];
function generateFaces(){
  for(var i = 0; i<numberOfFaces; i++){
    im[i] = document.createElement('img');
    im[i].src = 'smile.png'; im[i].style.position = 'absolute';
    im[i].style.top = Math.floor(Math.random()*400)+'px';
    im[i].style.left = Math.floor(Math.random()*400)+'px';
    theLeftSide.appendChild(im[i]);
  }

  var theRightSide = document.getElementById('rightSide');
  var leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);
}
