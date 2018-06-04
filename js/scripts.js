function countUniqueWords(array) {
  array.forEach(function(word) {
    var counter = [];
    array.forEach(function(word2) {
      if (word === word2) counter.push(word);
    });
    $("#results").append("<li class='list-item'>" + word + ": " + counter.length + "</li>");
  });
}

function lowerCaseWords(input) {
  var words = input.split(" ");
  var lowerCase = words.map(function(item) {
    return item.toLowerCase();
  });
  return lowerCase;
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    var input = $("#inputWords").val();
    var newInput = lowerCaseWords(input);
    countUniqueWords(newInput);
  });
});

// Type type type stuff stuff hey hi hello
