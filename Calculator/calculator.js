let screen = document.getElementById("screen-text"); // Get Input Text.... :
buttons = document.querySelectorAll(".cal-group");
var screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    // console.log("Button text is : ", buttonText); // Check Button Work...:
    if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "CE") {
      screenValue = screenValue.slice(0, -1);
      screen.value = screenValue;
    } else if (buttonText == "*") {
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }

  });
}
