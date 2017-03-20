var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Ben'
];

function longWords(n) {
  return n.length > 5;
}

var result = people.filter(longWords);
console.log(result);
