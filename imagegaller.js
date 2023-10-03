var fullImgBox =document.getElementById("fullImgBox")
var fullImg =document.getElementById("fullImg")
function openFullimg(pic){
  fullImgBox.style.display="flex"
  fullImg.src=pic;
}
function closeFullimg(){
  fullImgBox.style.display="none"
}