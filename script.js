
var push = document.getElementById('gaza');
var col = document.getElementById('col');
var des = document.getElementById('des');
var china = document.getElementById('china');
var cont = document.getElementById('content');
var saha = document.getElementById('sahara');
var gaz = document.getElementById('gaz');
var cos = document.getElementById('cos');
var sert = document.getElementById('sert');
var chin = document.getElementById('chin');
var link =document.getElementById('link')

push.onclick=function(){
    
    cont.style.backgroundImage="url(images/pexels-photo-262786.jpeg)";
    saha.innerHTML = gaz.innerHTML;
    link.href = 'gaza/gaz.html';
}
col.onclick=function(){
    
    cont.style.backgroundImage="url(images/pexels-photo-1797161.jpeg)";
    saha.innerHTML = cos.innerHTML
    link.href = 'colosseum/col.html';
}
des.onclick=function(){
    
    cont.style.backgroundImage="url(images/pexels-photo-3878104.jpeg)";
    saha.innerHTML = sert.innerHTML
}
china.onclick=function(){
    
    cont.style.backgroundImage="url(images/pexels-photo-1423580.jpeg)";
    link.href = 'china/china.html';
     
    saha.innerHTML =chin.innerHTML;
    
    
    
    
    
    
}