var warpedcircles = function(p){

  var theta;
  var phase = 0;
  var mult = 1;
  var flag = 1;
  var count = 0;
  var width = 400;
  var height = 400;
  var width0 = width;
  var height0 = height;
  var increment;
  //var mySound;

/*
  p.preload = function(){
    mySound = p.loadSound('media/doorbell.mp3');
  }
*/

  p.setup = function() {

    p.createCanvas(width, height);
    p.background(0);
    p.noStroke();
    //p.frameRate(60);
  	p.translate(width/2,height/2);

    //mySound.setVolume(0.1);
  }

  p.draw = function() {

    if(isScrolledIntoView('#warpedcircles')){
      /*
      if(p.frameCount%120==0){
        mySound.play();
      }
      */
    	p.background(255);

      increment = width/10;

    	p.fill(255,255,178);
    	makeShape(5*increment);
    	p.fill(254,204,92);
    	makeShape(4*increment);
    	p.fill(253,141,60);
    	makeShape(3*increment);
    	p.fill(240,59,32)
    	makeShape(2*increment);
    	p.fill(189,0,38);
    	makeShape(increment);

      if(phase>2){
        phase = -2;
        flag *= -1;
      }

      phase += 0.01;
    }
  }


  p.windowResized = function() {
    var divWidth = $('#warpedcircles').width();
    if(divWidth < width0){
      var multiplier = divWidth/width0;
      width = multiplier*width0;
      height = multiplier*height0;
    }
    else{
      width =  width0;
      height = height0;
    }
    p.resizeCanvas(width, height);
    p.translate(width/2,height/2);
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
