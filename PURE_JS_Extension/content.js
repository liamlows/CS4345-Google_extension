var list = JSON.parse(localStorage.getItem('wordList'));

blurToggle = (listOWords) => {

  console.log("function called.\n");
  console.log(listOWords);
  var matches = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span");
  
  if (matches.length > 0){
    listOWords.forEach(word => {
      matches.forEach(match => {
        if(match.innerText.toUpperCase().includes(word.toUpperCase())){
          match.style.filter = 'blur(0.2rem)';
          match.className = 'blur';
        }
      });
    });
  }
}

blurToggle(list);



