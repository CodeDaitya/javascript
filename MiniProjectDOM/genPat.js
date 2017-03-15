var colors = ["aqua", "azure", "blue", "brown", "crimson", "cyan",
              "firebrick", "forestgreen", "gold", "green", "indigo",
              "khaki", "lime", "maroon", "navy"];

var l=25, t=25;
var h=300, w=300;

var frame = document.getElementById('theBody');

function showPattern(){
  while(w>40){
    l += 10; t += 10;
    h -= 20; w -= 20;

    var box = document.createElement('div');
    box.style.left = l+'px'; box.style.top = t+'px';
    box.style.height = h+'px'; box.style.width = w+'px';
    fillColor = colors[Math.floor(Math.random()*colors.length)];
    box.style.background = fillColor;

    frame.appendChild(box);
  }
}
