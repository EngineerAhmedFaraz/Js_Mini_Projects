// Get Ids through DOM ...
const jokeChange = document.getElementById('jokeChange');
const jokes = document.getElementById('jokes');

// Create Dummy Array for Jokes
const DummyArray = [
  'A bear walks into a bar and says, “Give me a whiskey and … cola.”',
  'I only know 25 letters of alphabet. I do not know y.',
  'He who laughs last did not get the joke',
  'Life is short, Smile while you have a teeth.',
  'Dear Math, grow up and solve your own problems.',
];

/*Check for any issue in array..
console.log(DummyArray); */

// Now work with addEventListener Function...:

jokeChange.addEventListener('click', () =>{ //Fat Arrow Function...
  
  let changeJoke = DummyArray[Math.floor(Math.random() * DummyArray.length)];
  jokes.innerHTML = changeJoke;

});
