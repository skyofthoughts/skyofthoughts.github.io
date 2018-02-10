var PRESSED=false;
$('.subscribe').on('click',function(){
	PRESSED=true;
	
	$( "#innercontent" ).fadeOut( "slow", function() {
	$("#content").html("<div class='messages'>Enter Email to get notified When new Though Float on to the Sky!</div>","<div  class='form-control' placeholder='Enter Email here ...'></textarea><br><input type='checkbox' checked> Allow comments<span style='float:right'><span onclick='submit();' class='msgbtn'>Submit</span> | <span onclick='skip(false);' class='msgbtn'>Skip</span></span>");
});
});
/*

$('body').keyup(function(e){
   if(e.keyCode == 32 && PRESSED && o<ttt.length){
       // user has pressed space

    $('#content').fadeOut('slow', function() {
    $('#content').html("<div class='messages col-md-6 col-sm-12 col-xs-12'>"+ttt[o]+"</div>");
    $('#content').fadeIn('slow');
     o++;
});

 }
});


window.addEventListener('touchstart', function() {
  if(PRESSED && o<ttt.length){
  	$('#content').fadeOut('slow', function() {
    $('#content').html("<div class='messages'>"+ttt[o]+"</div>");
    $('#content').fadeIn('slow');
     o++;
  });
  }
});


function submit(){
var databaseref = firebase.database().ref();
var thoughtsref=databaseref.child('email');
var jjj=new Date.getTime();
var data={
	"thought":$('textarea').val(),
	"allowcomments":$('input[type="checkbox"]').is(":checked"),
	"tim":jjj
}
thoughtsref.push(data);
skip(true);
}

var ymover=function(d){
	this.y=height*0.7+d;
	this.x=0.4*width;
}
ymover.prototype.move=function(){
	this.x+=0.5;
}
ymover.prototype.show=function(){
	stroke('#f2ca66');
	strokeWeight(0.7);
	noFill();
	var si=map(abs(frameCount%20-10),0,10,4,8);
	if(this.x<width)ellipse(this.x,this.y,si,si);
	noStroke();
}
var mover=function(){
	this.radius=Math.random()*5;
	this.posx=Math.random()*width;
	this.posy=Math.random()*1000;
	this.vel=Math.random()*1;
}
mover.prototype.move=function(){
	this.posx+=this.vel;
	//#f2ca66
}
mover.prototype.show=function(){
	if(random(5)<0.5)fill(random(255));
	else fill(200);
	ellipse(this.posx,this.posy,this.radius,this.radius);
	if(this.posx>width)this.posx=0;

}
var xaxu=[];
var clicka=[];
function setup() { 
	noStroke();
	createCanvas(windowWidth, windowHeight);
	for(var i=0;i<200;i++)xaxu.push(new mover());
	
}
function draw() {
	background(20);
	
	for(var i=0;i<200;i++){
		xaxu[i].move();
		xaxu[i].show();
	}
		for(var j=0;j<clicka.length;j++){
		clicka[j].move();
		clicka[j].show();
	}
	dispY=map(sin(frameCount/80),-1,1,-90,90);

	fill('#f2ca66');
	ellipse(0.4*width,height*0.7+dispY,10,10);
	if(PRESSED && frameCount%10==0)clicka.push(new ymover(dispY));


}
function mousePressed(){
clicka.push(new ymover(dispY));
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}*/
