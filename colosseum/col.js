
var pla = document.getElementById('play');
var vid = document.getElementById('video');

pla.onclick = function(){
    vid.style.display = "block";
    if(video.paused){
        vid.play();
        pla.src = "../images/download-1.png";
        
        
        
    }
    else{
        vid.pause();
        pla.src = "../images/download.png";
        
    }
}
var black = document.getElementById('black');
var body = document.getElementById('body');
var white = document.getElementById('white');
var aqua = document.getElementById('aqua');
var pink= document.getElementById('pink');
black.onclick = function(){
    body.style.backgroundColor='black';
    body.style.color= 'cornsilk'
    
    
}
white.onclick = function(){
    body.style.backgroundColor='white';
    body.style.color= 'black'
    
}
aqua.onclick = function(){
    body.style.backgroundColor='aqua';
    body.style.color= 'black'
    
}
pink.onclick = function(){
    body.style.backgroundColor='pink';
    body.style.color= 'black'
    
}