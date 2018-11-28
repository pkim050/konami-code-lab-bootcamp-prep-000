const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  var counter = 0;
  const key = document.addEventListener('keydown', init);
  //const key2 = key.key;
  for (var i = 0; i < codes.length; i++) {
    if (key === codes[counter]) {
      counter++
      if (counter === codes.length) {
        alert("Congratulations, you have correctly inputed the cheat code!");
      }
    }
    else {
      i = 0;
      counter = 0;
    }
  }
}