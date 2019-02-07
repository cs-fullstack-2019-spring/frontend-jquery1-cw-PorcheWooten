// button that when clicked will set the background color of every other row to grey
$("button").on("click", function () {
    $("tr:even").addClass("rows")
});

