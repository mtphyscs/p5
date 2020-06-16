// var api = "https://api.giphy.com/v1/gifs/random";
// var apiKey = "?api_key=AvZhuBugkgnFSWXisnbOf15KBMPfsClG";
// var query = "&tag=&rating=R";

var url = "https://api.giphy.com/v1/gifs/random?api_key=AvZhuBugkgnFSWXisnbOf15KBMPfsClG&tag=&rating=R";
 
function setup() {
  noCanvas();

//   var url = api + apiKey + query;
  loadJSON(url, gotData); //p5js function
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++);
    createImg(giphy.data[i].images.original.url);
}




