var image_list = ["Scene.png","Edited_Koala.png","Drawing_Shapes.png","Boucing_Ball.png"]
/*function changeImage() {
    var image = document.getElementById("myImage");
    if (image.src.match("Edited_Koala.png")) {
        image.src = "Scene.png";
    } else {
        image.src = "Edited_Koala.png";
    }
}
*/

/*function changeImage(){
    var image = document.getElementById("myImage");
    if (image.src.match(image_list[0])) {
        image.src = image_list[1];
    } if else (image.src.match(image_list[1])){
        image.src = image_list[2];
    } if else (image.src.match(image_list[2])){
        image.src = image_list[3];
    } if else (image.src.match(image_list[3])){
        image.src = image_list[4];
    }if else (image.src.match(image_list[4])){
        image.src = image_list[0];
    }
    
}
*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

