$(document).ready(function () {

    var topics = ['rhinoceros', 'hippopotamus', 'lion', 'tiger', 'bear', 'elephant', 'cheetah'];


    var apiKey = "zcBHe2DN8JC1y667Dg0ol2uNl1ntMX9A";
 

    var searchBar = document.getElementById("searchBar");

    $('.info').empty();
    $("#gifs-appear-here").empty();


    // rendering the buttons and handleing the on click
    function createbuttons() {
        $('#topics').empty();

        for (var i = 0; i < topics.length; i++) {
            var btn = `<button class="searchtopic" index=${i}>${topics[i]}</button>`
            $("#topics").append(btn)
        }
        $(".searchtopic").on("click", function () {
            console.log(this)
            // get the index info from the btn to find the topic on the aarray to search for this topic
            var index = $(this).attr("index")
            var topic = topics[index]
            console.log(topic, index)

            displaying(topic)

        })

    }

    // this is in charge of call api giphy with the topic and render the images
    function displaying(topic) {
        //apikey = zcBHe2DN8JC1y667Dg0ol2uNl1ntMX9A
        var queryURL = `https://api.giphy.com/v1/gifs/search?q=${topic}&api_key=${apiKey}&limit=10`;
        $.ajax({
            url: queryURL,
            Method: "GET"
        }).then(function (response) {
            console.log(response.data)

            //with the object received from giphy we render the images
            // keeping two urls from the object one animated one still 
            $("#gifs").empty()
            for (var i = 0; i < response.data.length; i++) {

                var card = `<div class="col"><div class="card" style="width: height:16rem>
                <img class="imggifs card-img-top" src=${response.data[i].images.fixed_height_still.url} alt-src=${response.data[i].images.downsized_large.url}></img> 
                <div class="card-body">
                  <p class="card-text">${response.data[i].rating}</p>
                </div>
              </div></div>`
              //  var rating = `<p>${response.data[i].rating}`
              //  var img = `<img class="imggifs" src=${response.data[i].images.fixed_height_still.url} alt-src=${response.data[i].images.downsized_large.url}></img> `
                $("#gifs").append(card)
            }
        
            // handleing the onclick on the images
            // everytime image is clicked we switch the src then the effect is like we are stoping and starting the images but is just an effect because we are swith the src the brwoser is seeing

            $(".imggifs").on("click", function(){
                console.log(this)
                var src = $(this).attr("src")
                var alt = $(this).attr("alt-src")
                $(this).attr("src", alt)
                $(this).attr("alt-src", src)
            })
            //   var rating = response.data[i].rating
            //   var title = response.data[i].title
        })
    }

    createbuttons()

// this is in charge of the form, when search btn is clicked we read the info from the input and we
    $("#search").on("click", function () {
        event.preventDefault()
        var topic = $("#searchtopic").val()
        $("#searchtopic").empty()
        console.log("search", topic)
        displaying(topic)
        topics.push(topic)
        createbuttons()

    })


})