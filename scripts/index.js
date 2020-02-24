var modal = document.getElementById("myModal");

// get button by ID
var btn = document.getElementById("si");

// Get the span
var span = document.getElementsByClassName("close")[0];

//  open the modal on click
btn.onclick = function() {
  modal.style.display = "block";
}

// close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// close model
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//get modeal by id
var modal1 = document.getElementById("myModal1");


var btn1 = document.getElementById("su");

//get span
var span1 = document.getElementsByClassName("close1")[0];


btn1.onclick = function() {
  modal1.style.display = "block";
}


span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
// *************
var sp=document.getElementById("redirect");
sp.onclick=function()
{
  modal.style.display = "none";
  modal1.style.display = "block";
}
// event for modal 3
var modal2 = document.getElementById("myModal2");


var btn2 = document.getElementById("createp");


var span2 = document.getElementsByClassName("close2")[0];


btn2.onclick = function() {
  modal2.style.display = "block";
}


span2.onclick = function() {
  modal2.style.display = "none";
}

