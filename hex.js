const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; //15


const btn = document.getElementById('btn');
const colorEl = document.getElementById('color');
const body = document.body;

btn.addEventListener('click', function() {
  const hexCode = getHexCode();
  colorEl.innerText = hexCode;
  body.style.backgroundColor = hexCode;
})


function getRandomNum() {
  let i = Math.random();
  i = i * hex.length;
  i = Math.floor(i);
  return i;
}


function getHexCode() {
  let hexCode = ''
  for (i=1; i<=6; i++) {
    const randomNumber = getRandomNum();
    hexCode += hex[randomNumber];
  }
  return '#' + hexCode;
}
