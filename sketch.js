var textx=0;

function setup() {   
   createCanvas(600,400);
}

function draw() { 
   background(90,120,100);   
   fill(194,255,70);   
   noStroke();   
   textSize(30);   
   textFont("ARIAL");   
   textStyle(BOLD);   
   textAlign(LEFT);   
   text("HAVE A WONDERFUL DAY!",textx,350);     
          //add a conditional
  if(textx>600){     
     textx = 0;   
  }else{     
     textx=textx + 5;   
  }
}