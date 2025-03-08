function upDate(previewPic) {
    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}

function addTabFocus() {
    var images = document.getElementsByClassName('preview');
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
    console.log('Tabindex attributes added to all images.');
}