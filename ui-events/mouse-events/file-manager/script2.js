fileSystem.addEventListener('click',function(event) {
    let elem = event.target.closest('.item');
    if (!elem)
        return;
    if (event.ctrlKey ||event.metaKey) {
        elem.classList.toggle('selected');
    }
    else {
        let selectedElems = Array.from(document.querySelectorAll('.selected'));
        for (let item of selectedElems) {
            item.classList.remove('selected');
        }
        elem.classList.add('selected');
    }
});