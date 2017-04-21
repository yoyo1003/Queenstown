// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onload = function(){
 var star = document.getElementById("star");
 var star_li = star.getElementsByTagName("li");
 var result = document.getElementById("result");
 var i=0;
 var len = star_li.length;
 for(i=0; i<len; i++){
 star_li[i].index = i;
 star_li[i].onclick = function(){
    for(i=0; i<len; i++){
   star_li[i].className = "";
  }
 for(i=0; i<=this.index; i++){
   star_li[i].className = "act";
  }
    result.innerHTML = (this.index+1);
 } 
 }
}

//slide show
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//sign up
function checkname()      
{  
    var name = document.getElementById("uName").value;
    var ts = document.getElementById("namets");  
    if(name.length<3|| name.length>15)      
    {     
        ts.innerHTML ="Name must be 3-15 letters";  
        ts.style.color="red";  
        return false;  
    }  
    ts.innerHTML ='ok';  
    ts.style.color='green';  
    return true;  
}  

function checksurname()      
{  
    var surname = document.getElementById("uSurName").value;
    var ts = document.getElementById("snamets");  
    if(surname.length<5|| surname.length>15)      
    {     
        ts.innerHTML ="Surname must be 5-15 letters";  
        ts.style.color="red";  
        return false;  
    }  
    ts.innerHTML ='ok';  
    ts.style.color='green';  
    return true;  
}  
function checkpass(){  
    var userPass = $("#uPass").val();  
      
    var pts = document.getElementById("passts");  
      
    if(userPass.length<6 || userPass.length >15)    
    {     
        pts.innerHTML ="Surname must be 6-15 letters";  
        pts.style.color="red";  
        return false;  
    }  
    pts.innerHTML ="ok";  
    pts.style.color="green";  
    return true;  
}  
function checkrpass(){  
    var userPass = $("#uPass").val();  
    var userRPass = $("#uRPass").val();  
    var prts =  document.getElementById("passrts");  
    if (userPass != userRPass) {  
        prts.innerHTML="Passwords don't match";  
        prts.style.color="red";  
        return false;  
    }  
    prts.innerHTML ="ok";  
    prts.style.color="green";  
    return true;  
}  
function checkemail(){  
    var userEmail = $("#uEmail").val();  
    var ets = document.getElementById("emailts");  
    if(!isEmail(userEmail)){  
        ets.innerHTML ="Email invalidation";  
        ets.style.color="red";  
        return false;  
    }   
    ets.innerHTML ="ok";  
    ets.style.color="green";  
    return true;  
}  
function isEmail(str){  
    var reg = /[a-z0-9-]{1,30}@[a-z0-9-]{1,65}.[a-z]{3}/;  
    return reg.test(str);  
}  
function register() {  
    if(!checkname()){  
        return false;  
    }else if(!checksurname()){  
        return false;  
    }else if(!checkpass()) {  
        return false;  
    } else if(!checkemail()){  
        return false;  
    }   
    return true;  
}  