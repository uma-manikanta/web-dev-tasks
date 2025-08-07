let thumbs = document.getElementById('thumbs');
thumbs.onclick = function(event) {
    let elem = event.target.closest('a');
    // event.preventDefault();
    largeImg.src = elem.href;
    return false;

}