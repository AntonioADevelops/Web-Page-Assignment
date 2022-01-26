//////////////////////////Device Scaling////////////////////////////////
var siteWidth = 1280;
var scale = screen.width /siteWidth;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');
///////////////////////////Fourth Image/////////////////////////////////
var modal = document.getElementById("myModalD");
var img = document.getElementById("myImgD");
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("captionD");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
///////////////////////////Third Image//////////////////////////////////
var modal = document.getElementById("myModalC");
var img = document.getElementById("myImgC");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("captionC");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
///////////////////////////Second Image//////////////////////////////////
var modal = document.getElementById("myModalB");
var img = document.getElementById("myImgB");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("captionB");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
///////////////////////////First Image//////////////////////////////////
var modal = document.getElementById("myModalA");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImgA");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("captionA");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}