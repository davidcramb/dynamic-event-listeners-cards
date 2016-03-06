var createButton = document.getElementById('create');
var text = document.getElementById('textarea');
var cardArea = document.getElementById('cardArea');


function addCard () {
  function getText (text) {
    text = text.value
    return text
  };

  cardArea.innerHTML += '<section class="card">'+ getText(text) + '<button class="del">delete</button>' + '</section>';
  var singleCard = document.getElementsByClassName('card');
  var delButton = document.getElementsByClassName('del');
  for (var i = 0; i < singleCard.length; i++) {
   delButton[i].addEventListener('click', delCard)
  };
  
  //     // console.log(cardArea.removeChild(cardArea.lastChild));
  //   for (var i = 0; i < cardArea.children.length; i++) {
  //     var cards = cardArea.childNodes;
  //     var cardToDelete = cardArea.childNodes[i];
  //   };
  //     // cardArea.removeChild(cardToDelete);
  //     console.log(cardArea.removeChild(cardToDelete));
  // };

  // });
  //  delButton[i].addEventListener('click', function(){
  //   console.log(cardArea.childNodes);
  // });
    
    


};  
  function delCard (e) {
    console.log('e', e)
    if (e.currentTarget.className === "del")
      console.log(e)

  };


createButton.addEventListener('click', addCard, false);
