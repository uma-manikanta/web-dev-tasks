let fileSystem = document.getElementById('fileSystem');
function addFolders(count) {
    for (let i = 0; i < count; i++) {
        let item = document.createElement('div');
        item.classList.add('item');
        
        let img = document.createElement('img');
        img.src = 'images/folder.png';
        let span = document.createElement('span');
        span.textContent = `Folder - ${i+1}`;

        item.append(img,span);
        fileSystem.append(item);
    }
}
function addFiles(count) {
    let prefix = "images/";
    let images = ['csv.png','doc.png','pdf.png',
                'video.png','itunes.png','xls.png',
                'audio.png','image.png'];
    for (let i = 0; i < count; ++i) {
        let idx = randint(0,images.length-1);

        let item = document.createElement('div');
        item.classList.add('item');
        
        let img = document.createElement('img');
        img.src = prefix + images[idx];
        let span = document.createElement('span');
        span.textContent = `file - ${i+1}`;

        item.append(img,span);
        fileSystem.append(item);
    }
}

function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

addFolders(10);
addFiles(50)