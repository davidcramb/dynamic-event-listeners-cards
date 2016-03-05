var createButton = document.getElementById('create');
var cardArea = document.getElementsByClassName('cardArea');


function addCard () {
  cardArea[0].innerHTML += '<section class="card"></section>'

  
};  


createButton.addEventListener('click', addCard, false);
