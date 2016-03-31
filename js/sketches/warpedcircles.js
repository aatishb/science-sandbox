var warpedcircles = function(p){

  var theta;
  var phase = 0;
  var mult = 1;
  var flag = 1;
  var count = 0;
  var mySound;

  p.preload = function(){
    mySound = p.loadSound('media/doorbell.mp3');
  }

  p.setup = function() {

    p.createCanvas(400, 400);
    p.background(0);
    p.noStroke();
    //p.frameRate(60);
  	p.translate(400/2,400/2);

    mySound.setVolume(0.1);
  }

  p.draw = function() {

    if(isScrolledIntoView('#warpedcircles')){
      if(p.frameCount%120==0){
        mySound.play();
      }
    	p.background(255);

    	p.fill(255,255,178);
    	makeShape(200);
    	p.fill(254,204,92);
    	makeShape(160);
    	p.fill(253,141,60);
    	makeShape(120);
    	//fill(227,26,28);
    	p.fill(240,59,32)
    	makeShape(80);
    	p.fill(189,0,38);
    	makeShape(40);

      if(phase>2){
        phase = -2;
        flag *= -1;
      }

      phase += 0.01;
    }
  }



  makeShape = function(size){

    p.beginShape();
    theta = 0;
    while(theta<2*Math.PI)
    {
      x = size*Math.cos(theta);
      y = size*0.5*(1 + Math.cos(phase*(theta)))*Math.sin(theta);
      p.vertex(x, flag*y);
      theta = theta + 0.02;
    }
    p.endShape();

  }

}
