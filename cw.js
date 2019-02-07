// <div class='red'>I should be red too!</div>
$(".red").addClass("red1");


// <div id="myElement">I should be blue!
$("#myElement").addClass("blue");



// and when you click on me, I want you to invoke a function that uses alert() to display the message "myElement was clicked!"
$("#myElement").click(function () {
    alert("myElement was clicked!")
});
// <div>I want my background to be green and my text white!</div>
$("#myElement div:nth-child(1)").addClass("green1");

// <div>I want my background to be orange and my text pink!</div>
$("#myElement div:nth-child(2)").addClass("orange1");