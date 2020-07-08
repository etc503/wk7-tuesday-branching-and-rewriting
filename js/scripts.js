$(document).ready(function() {
  const over21 = confirm("Are you over 21? Click OK for yes or Cancel for no");

if (over21) {
    $('#drinks').show();
  } else {
    $('#under-21').show();
  }
});


if (lindsey === "avalible to drive") {
  driveToBeach();
}
else if (busesAreRunning === true) {
  busToBeach();
}
else {
  watchMovies();
}