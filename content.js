blurToggle = (listOWords) => {

  console.log("function called.\n")
  var matches = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span");
  if (matches.length > 0){
    matches.forEach(match => {
      // console.log(match.innerText.includes('simple') + ", " + match.innerText);
      if(match.innerText.includes('of')){
        // console.log("one contains\n");
        match.style.filter = 'blur(0.2rem)';
      }
    });
  }
}



//   var elem = $( "p:contains('whats')" );
//   if(elem.length > 0){
//     console.log(elem);
//     console.log("P tag found.\n")
//     if(elem.hasClass("blur")){
//       elem.removeClass("blur");
//     }
//     else{
//       // elem.addClass("blur");
//       elem.css("filter", "blur(0.2rem)");
//     }
//   }else{
//     console.log("No p tags found with whats.\n")
//     console.log(elem);
//   }
// }

blurToggle();
