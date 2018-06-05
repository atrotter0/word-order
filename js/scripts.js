function lowerCaseWords(input) {
  var wordsList = input.split(" ");
  var lowercaseList = wordsList.map(function(word) {
    return word.toLowerCase();
  });
  return lowercaseList;
}

function countUniqueWords(inputArray) {
  inputArray.forEach(function(word) {
    var counter = [];
    inputArray.forEach(function(word2) {
      if (word === word2) counter.push(word);
    });
    filterAndDisplay();
    //$("#results").append("<li class='list-item'>" + word + ": " + counter.length + "</li>");
  });
}

function filterAndDisplay() {

}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    var input = $("#inputWords").val();
    var lowercaseInput = lowerCaseWords(input);
    countUniqueWords(lowercaseInput);
  });
});
