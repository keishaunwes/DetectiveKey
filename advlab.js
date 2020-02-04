$(document).ready(function() {

    for (var i = 1; i <= 100; i++) {
        var h3 = $("<h3 id='h3'></h3>");
        h3.text("Accusation " + i);
        h3.click(alertCheck(i));
    $("body").append(h3);
}

var friends = ["Brandon", "Marcus", "Jon", "Gen", "Keyontay"];
var locations = [
    "chicago",
    "detriot",
    "new york",
    "a bath tub",
    "the bank",
    "the spa",
    "grandma house",
    "innovate",
    "kitchen",
    "the glass box"
];
  var weapons = [
    "ak47",
    "spirit bomb",
    "laser",
    "bad breathe",
    "extension cord",
    "hacksaw",
    "machete",
    "laptop charger",
    "soup can",
    "iron",
    "beer bottle",
    "ulu knife",
    "serious punch",
    "FIRE DRAGON SLAYER MAGIC",
    "DETROIT SMASH",
    "spirit gun",
    "HUNDRED RENDING FISTS",
    "special beam cannon",
    "final flash",
    "GOMU GOMU NO BLACK MAMBA"
];

function alertCheck(i) {
    return function() {
        alert(
            "Accusation " +
          i +
          ": I accuse " +
          friends[i % 5] +
          " with the weapon " +
          weapons[i % 10] +
          " in the " +
          locations[i % 10] +
          "!"
          );
        };
    }
    var h1 = $("<h1 >Hello my name is Keishaun Wesley and on the night of 2-4-20 things changed.<br> I noticed my friends were acting different <br> and then i noticed the news were talking about crimes being commited and <br>then i thought the person doing this sounds familiar <br> but i just cant put my finger on it. So i decided to think and solve the crimes myself these are my accusations </h1>")
    h1.css("font-family","Comic Sans MS")
$("#body").css({"color":"yellow",
"background-color":"black"})
$("#h3").prepend(h1)

});

// Math.floor(Math.random() * locations.length)

// var rain = new Audio("rain.wav")
// rain.play()