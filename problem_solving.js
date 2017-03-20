var string = "There is a ball in the tree, can you get it?";

function reverseWords(n) {
  var splitString = n.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

reverseWords(string);
