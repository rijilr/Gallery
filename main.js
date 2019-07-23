const displayedImage = document.querySelector(".displayed-image");
const thumbBar = document.querySelector(".thumbnail");

for(var i = 1; i <= 9; i++) {
    var divImage = document.createElement('div')
    divImage.className = "thumb-image";
    var newImage = document.createElement('img');
    var imageLocation='img/pics/pic' + i + '.jpg';
    newImage.setAttribute('src', 'img/pics/pic' + i + '.jpg');
    divImage.appendChild(newImage);
    thumbBar.appendChild(divImage);
    newImage.onclick = function(e) {
        var imgSrc = e.target.getAttribute('src');
        displayImage(imgSrc);
    }
}
function displayImage(imgSrc) {
    displayedImage.setAttribute('src', imgSrc);
  }

