const displayedImage = document.querySelector(".displayed-image");
const thumbBar = document.querySelector(".thumbnail");
for(var i = 1; i <= Object.keys(path.pic).length; i++) {
    var divImage = document.createElement('div')
    divImage.className = "thumb-image waves-effect";
    var newImage = document.createElement('img');
    var imageLocation=path.pic[i];
    newImage.setAttribute('src', path.pic[i]);
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
