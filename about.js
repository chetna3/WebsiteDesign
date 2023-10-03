var fullImgBox1 =document.getElementById("fullImgBox1")
var fullImg1 =document.getElementById("fullImg1")
function openFullimg1(pic){
  fullImgBox1.style.display="flex"
  fullImg1.src=pic;
}
function closeFullimg1(){
  fullImgBox1.style.display="none"
}