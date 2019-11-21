
blurToggle = (list) => {
  
  console.log(list);
  var matches = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span");
  
  if (matches.length > 0){
    list.forEach(word => {
      matches.forEach(match => {
        if(match.innerText.toUpperCase().includes(word.toUpperCase())){
          console.log("found something to blur.");
          match.classList.add('blur');
          addListeners(match);
        }
      });
    });
  }
}

addListeners = async (match) => {
  await match.addEventListener('click', function() {
    if (match.classList.contains('blur')){
      match.classList.remove('blur');
    } 
  });
}

chrome.storage.sync.get('wordList', (r) => {
  if (r.wordList)
    blurToggle(r.wordList)
});

// chrome.storage.sync.get('reblur', r => {
//   if (r.reblur){
//     alert('here');
//     chrome.storage.sync.remove('reblur');
//     location.reload(true);
//   }
// })