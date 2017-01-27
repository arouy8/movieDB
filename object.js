// JavaScript source code



var movie = [
    {
        name: "Rush Hour",
        rating: 5.0,
        hasWatched: true
    },
    {
        name: "Inception",
        rating: 5.0,
        hasWatched: true
    },
    {
        name: "Mad Max",
        rating: 3.5,
        hasWatched: false
    
    }
]

// for each

movie.forEach(function (element) {
    var result = "";

    if (element.hasWatched) {
        result += "You have watched ";
    }
    else {
        result += "You have not watched ";
    }
    result += "\"" + element.name + "\" - " + element.rating + " stars";
    console.log(result)

});


/*// for loop

for (var i = 0; i < movie.length; i++) {
    if (movie[i].hasWatched === true) {
        console.log("You have watched \"" + movie[i].name + "\" - " + movie[i].rating + " stars");
    }
    else {
        console.log("You have not watched \"" + movie[i].name + "\" - " + movie[i].rating + " stars");
    }
}
*/