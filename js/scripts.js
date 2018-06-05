function resetOutput() {
  $("li").remove();
  $(".row").addClass("fancy-box");
}

function makeLowercase(input) {
  var wordsList = input.split(" ");
  var lowercaseList = wordsList.map(function(word) {
    return word.toLowerCase();
  });
  return lowercaseList;
}

function removePunctuation(wordList) {
  var pattern = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
  var newList = wordList.map(function(word) {
    var position = word.search(pattern);
    if (position >= 0) {
      symbol = word.substring(position);
      word = word.replace(symbol, "");
    }
    return word;
  });
  return newList;
}

function countAndDisplay(inputArray) {
  var wordStorage = [];
  inputArray.forEach(function(word) {
    var counter = [];
    inputArray.forEach(function(word2) {
      if (word === word2) counter.push(word);
    });
    findUniqueWords(counter, word, wordStorage);
  });
  displayResults(wordStorage);
}

function findUniqueWords(counter, word, wordStorage) {
  var wordAndCount = word + ": " + counter.length;
  if (!wordStorage.includes(wordAndCount)) {
    wordStorage.push(wordAndCount);
  }
}

function displayResults(wordStorage) {
  wordStorage.forEach(function(item) {
    $("#results").append("<li class='list-item'>" + item + "</li>");
  });
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    resetOutput();
    var input = $("#inputWords").val();
    var lowercaseList = makeLowercase(input);
    var noPunctuation = removePunctuation(lowercaseList);
    countAndDisplay(noPunctuation);
  });
});
