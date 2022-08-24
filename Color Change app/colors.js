// Create Array for colors Change.
const Colors = ['Pink','Blue','Yellow','Red','Black','White','Orange','Gray'];

// Get Change Color ID.
const ChangeColors = document.getElementById('btn');

//Add EventListener For Click & Function.
ChangeColors.addEventListener('click', () => { // Fat Arrow Function
  //Generate Random Numbers For Pick Array Colors.
  let randomColors = Colors[Math.floor(Math.random() * Colors.length)]; 
  document.getElementById('container').style.background = randomColors;

})
