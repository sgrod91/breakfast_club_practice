// var words = [
//   'bananas',
//   'jewel',
//   'cat'
// ];
//
// var result= [];
//
// words.forEach(function(currentString) {
//   result.push(currentString.charAt(currentString.length - 1));
//
// });

//other solution

var words = [
  'bananas',
  'jewel',
  'cat'
];

function lastLetters(n) {
  return n.charAt(n.length - 1);
}
var result = words.map(lastLetters);
console.log(result);
