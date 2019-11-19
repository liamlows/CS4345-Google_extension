
blurToggle = (list) => {
  
  console.log(list);
  var matches = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span");
  
  if (matches.length > 0){
    list.forEach(word => {
      matches.forEach(match => {
        if(match.innerText.toUpperCase().includes(word.toUpperCase())){
          console.log("found something to blur.");
          match.style.filter = 'blur(0.2rem)';
          match.className = 'blur';
        }
      });
    });
  }
}

chrome.storage.sync.get('wordList', (r) => {
  if (r.wordList)
    blurToggle(r.wordList)
});



