blurToggle = (listOWords) => {

  console.log("function called.\n");
  var matches = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span");

  if (matches.length > 0){
    listOWords.forEach(word => {
      matches.forEach(match => {
        // console.log(match.innerText.includes('simple') + ", " + match.innerText);
        if(match.innerText.toUpperCase().includes(word.toUpperCase())){
          // console.log("one contains\n");
          match.style.filter = 'blur(0.2rem)';
        }
      });
    });
  }
}

blurToggle(['Game of thrones', 'Greys anatomy', 'javascript', 'poopoo']);
