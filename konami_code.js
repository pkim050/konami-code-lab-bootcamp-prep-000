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
  const input = document.querySelector('input');
  input.addEventListener('keydown', init);
  var counter = 0;
  /*if (key === codes[counter]) {
    counter++;
    if (counter === codes.length) {
      alert("Hurray!");
      index = 0;
    }
    else {
      index = 0;
    }
  }*/
}