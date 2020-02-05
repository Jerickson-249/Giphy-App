$(document).ready(function(){

var topics = ['rhinoceros', 'hippopotamus', 'lion', 'tiger', 'bear', 'elephant', 'cheetah'];

var api = "";
var apiKey = "zcBHe2DN8JC1y667Dg0ol2uNl1ntMX9A";
var query = "";

var searchBar = document.getElementById("searchBar");

$('.info').empty();
$("#gifs-appear-here").empty();

function createbuttons () {
$('.buttons').empty();
}

function displaying () {}
//apikey = zcBHe2DN8JC1y667Dg0ol2uNl1ntMX9A
$.ajax({
url: queryURL,
Method: "GET"
}).then(function (response) {
    
    var rating = response.data[i].rating
    var title = response.data[i].title
}

createbuttons();
$(document).on('click', '.images', stillAnimate)
$(document).on('click', '.btn', displaying)
});
