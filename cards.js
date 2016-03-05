var createButton = document.getElementById('create');
var text = document.getElementById('textarea');
var cardArea = document.getElementsByClassName('cardArea');


function addCard () {
  function getText (text) {
    text = text.value
    return text
  };
  cardArea[0].innerHTML += '<section class="card">'+ getText(text) + '</section>'  
};  


createButton.addEventListener('click', addCard, false);
