const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const btn = document.getElementById('btn');
const colorEl = document.getElementById('color');
const body = document.body;

btn.addEventListener('click', function() {
  const randomNumber = getRandomNum();
  colorEl.innerText = colors[randomNumber];
  body.style.backgroundColor=colors[randomNumber];
})


function getRandomNum() {
  let i = Math.random();
  i = i * colors.length;
  i = Math.floor(i);
  return i;
}
