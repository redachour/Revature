function add(){
    var storage = JSON.parse(localStorage.getItem('movies'));
    if (storage == null){var storage = [];}
    var title = document.getElementById('title').value;
    var year = document.getElementById('year').value;
    var news = {'id' : storage.length + 1 , 'title': title, 'year': year};
    storage.push(news); 
    localStorage.setItem('movies', JSON.stringify(storage));
 };