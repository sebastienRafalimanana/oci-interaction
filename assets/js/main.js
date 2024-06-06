window.onload = function () {
  const cursor = document.getElementById("cursor");

  webgazer
    .setGazeListener(function (data, elapsedTime) {
      if (data == null) {
        return;
      }
      var x = data.x;
      var y = data.y;

      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      checkInteraction(x, y);
    })
    .begin();

  function checkInteraction(x, y) {
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      var rect = button.getBoundingClientRect();
      if (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
      ) {
        button.style.backgroundColor = "red"; // Change color when gazed upon
        // Add any other interaction logic here
      } else {
        button.style.backgroundColor = "lightblue";
      }
    }
  }

  webgazer
    .showVideoPreview(true)
    .showPredictionPoints(true)
    .applyKalmanFilter(true);
};
