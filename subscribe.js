var mover=function(msg,com,ki,coms){
	this.size=random(6);
	this.cx=random(-width*1.5,width);
	this.cy=random(-height*1.5,height*2);
	this.dispx=0;
	this.dispy=0;
	this.dep=random(20);
	this.seed=parseInt(random(2000));
}

mover.prototype.move=function(){
	this.cx+=(noise(this.seed)-0.5)*this.dep/50;
	this.cy+=(noise(this.seed+5768)-0.5)*this.dep/50;
	this.dispx=this.dep*map(mouseX,0,width,-1,1);
	this.dispy=this.dep*map(mouseY,0,height,-1,1);
}



mover.prototype.show=function(){
	fill("#f2ca66");
	ellipse(this.cx+this.dispx,this.cy+this.dispy,this.size,this.size);
}
var xaxu=[];
var ruzu=[];
function setup() { 

textSize(19);
	noStroke();
	createCanvas(windowWidth, windowHeight);


for(var i=0;i<600;i++)xaxu.push(new mover());

}
var angle=0;var twist=false;
function draw() {
	background(20);
	translate(width*0.7,height/2);
	rotate(angle);
	for(var i=0;i<600;i++){
		xaxu[i].move();
		xaxu[i].show();
	}
	if(twist==true){
		angle+=0.1;
		if(angle>TWO_PI){
			twist=false;
			angle=0;
		}
	}
	noFill();
	strokeWeight(2);
	stroke("#f2ca66");
	ellipse(0,0,200,200);
	noStroke();
	fill(255);
	for(var i=0;i<ruzu.length;i++)ellipse(100*cos(ruzu[i]),100*sin(ruzu[i]),12,12);


}
