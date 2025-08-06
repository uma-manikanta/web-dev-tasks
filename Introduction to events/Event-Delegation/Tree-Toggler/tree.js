let list_items = tree.querySelectorAll('li');
    for (let li of list_items) {
        let span = document.createElement('span');
        li.prepend(span);
        span.append(span.nextSibling);
    }
    tree.onclick = function(event) {
      if (event.target.tagName != 'SPAN') {
        return;
      }
      let childList = event.target.nextElementSibling;
      if (!childList) {
        return;
      }
      childList.hidden = !childList.hidden;
    }