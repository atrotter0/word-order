function lowerCaseWords(input) {
  var wordsList = input.split(" ");
  var lowercaseList = wordsList.map(function(word) {
    return word.toLowerCase();
  });
  return lowercaseList;
}

function countAndDisplay(inputArray) {
  inputArray.forEach(function(word) {
    var counter = [];
    inputArray.forEach(function(word2) {
      if (word === word2) counter.push(word);
    });
    displayWord(counter, word);
  });
}

function displayWord(counter, word) {
  var wordAndCount = word + ":" + counter.length;
  var values = $("li").text().split(" ");

  if (!values.includes(wordAndCount)) {
    $("#results").append("<li class='list-item'>" + word + ":" + counter.length + " </li>");
  }
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    $("li").remove();
    $(".well").addClass("fancy-box");
    var input = $("#inputWords").val();
    var lowercaseInput = lowerCaseWords(input);
    countAndDisplay(lowercaseInput);
  });
});
