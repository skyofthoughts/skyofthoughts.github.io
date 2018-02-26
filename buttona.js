var PRESSED=false;
$('.buttona').on('click',function(){
	PRESSED=true;
	
	$( "#innercontent" ).fadeOut( "slow", function() {
	$("#content").html("<div class='messages'>Press spacebar or tap to proceed.</div>");
});
});
var o=0;
	var ttt=["We exist too much in the minds of others, worrying constantly about what others are thinking of us.","But the truth is that our needlessly tense and preciously brief lives have no meaning other than what we make of them.","To the infinitely large galaxies and stars, our anxieties, sorrows, joys and tensions are insignificant.","Come, set free these thoughts overloading your brain. Let them float away in the sky of thoughts.","A box will pop up now where you can put the heart aches, burdens and anxieties troubing you. Don't worry, nobody will be able to judge, comment or criticize it.","<textarea class='form-control' placeholder='How are you feeling?'></textarea><br><input type='checkbox' checked> Allow comments<span style='float:right'><span onclick='submit();' class='msgbtn'>Submit</span> | <span onclick='skip(false);' class='msgbtn'>Skip</span></span>"];


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



function skip(v){
	$('#content').fadeOut('slow', function() {
		var msg=v===true?'Thank you. This message will now float away to the sky.':'No issues.';
    $('#content').html("<div class='messages col-md-6 col-sm-12 col-xs-12'>"+msg+" You will now be taken to the sky of thoughts. The sky of thought shows that pain and sadness are universal part of human existence. We all are together in facing them. Come, let's go. <br><br> <a class='button' href='thoughts.html'>Proceed</a></div>");
    $('#content').fadeIn('slow');
});
}

function submit(){
var databaseref = firebase.database().ref();
var thoughtsref=databaseref.child('thoughts');
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
}
