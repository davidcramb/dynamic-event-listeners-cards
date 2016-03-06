var createButton = document.getElementById('create');
var text = document.getElementById('textarea');
var cardArea = document.getElementById('cardArea');


function addCard () {
    //Simple function to grab the text of the input and store as a function. It will be called on Line 13. Was not working properly without this.
  function getText (text) {
    text = text.value
    return text
  };
  //Adds Section Element, Text from function, a Delete Button with Class of Del and closes both Elements
  cardArea.innerHTML += '<section class="card">'+ getText(text) + '<button class="del">delete</button>' + '</section>';
  //This block is for the creation of the Event Listeners for each new delete button. Requires a for loop since they are saved as a class.
  var singleCard = document.getElementsByClassName('card');
  var delButton = document.getElementsByClassName('del');
  for (var i = 0; i < singleCard.length; i++) {
   delButton[i].addEventListener('click', delCard)
  };


};  
  //Delete Card Function that makes my head hurt. I'm leaving in the console logs for reference later because Javascript magically knows what I'm referring to when I target the parentNodes.
function delCard (aCard) {
  console.log(aCard);
    //card parentNode refers to the specific section element where the delete button resides
    var card = aCard.target.parentNode;
      console.log(card)
      //Deletes the little bastard
    cardArea.removeChild(card);

  };


createButton.addEventListener('click', addCard, false);
