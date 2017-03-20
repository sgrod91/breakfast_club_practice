var playlist = [
  {artist: "Los Colonges", song: "Flying Apart", genre: "rock"},
  {artist: "Whitney Rose", song: "My Boots", genre: "country"},
  {artist: "Tennis", song: "Matrimony", genre: "indie"},
  {artist: "Valerie June", song: "Got Soul", genre: "folk"},
  {artist: "Mac Demarco", song: "Salad Days", genre: "indie"}
];

function indieSongs(n) {
  if(n.genre == "indie") {
    return;
  }
}

var result = playlist.filter(indieSongs);
console.log(result);
