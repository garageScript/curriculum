const num = document.getElementById('num');
const star1 = document.getElementById('star1')
const star2 = document.getElementById('star2')
const star3 = document.getElementById('star3')
const star4 = document.getElementById('star4')
const star5 = document.getElementById('star5')

// Hovering
const hover1 = (star) => {
  star.innerHTML = "&starf;";
  star2.innerHTML = "&star;";
  star3.innerHTML = "&star;";
  star4.innerHTML = "&star;";
  star5.innerHTML = "&star;";
  num.innerHTML = "1";
  return;
}

const hover2 = (star) => {
  star1.innerHTML = "&starf;";
  star.innerHTML = "&starf;";
  star3.innerHTML = "&star;";
  star4.innerHTML = "&star;";
  star5.innerHTML = "&star;";
  num.innerHTML = "2";
  return;
}

const hover3 = (star) => {
  star1.innerHTML = "&starf;";
  star2.innerHTML = "&starf;";
  star.innerHTML = "&starf;";
  star4.innerHTML = "&star;";
  star5.innerHTML = "&star;";
  num.innerHTML = "3";
  return;
}

const hover4 = (star) => {
  star1.innerHTML = "&starf;"
  star2.innerHTML = "&starf;";
  star3.innerHTML = "&starf;";
  star.innerHTML = "&starf;";
  star5.innerHTML = "&star;";
  num.innerHTML = "4";
  return;
}

const hover5 = (star) => {
  star1.innerHTML = "&starf;";
  star2.innerHTML = "&starf;";
  star3.innerHTML = "&starf;";
  star4.innerHTML = "&starf;";
  star.innerHTML = "&starf;";
  num.innerHTML = "5";
  return;
}

// Not hovering
const nothover2 = (star) => {
  star1.innerHTML = "&starf;"
  star3.innerHTML = "&star;";
  star4.innerHTML = "&star;";
  star5.innerHTML = "&star;";
  return;
}

const nothover3 = (star) => {
  star1.innerHTML = "&starf;";
  star2.innerHTML = "&starf;";
  star4.innerHTML = "&star;";
  star5.innerHTML = "&star;";
  return;
}

const nothover4 = (star) => {
  star1.innerHTML = "&starf;";
  star2.innerHTML = "&starf;";
  star3.innerHTML = "&starf;";
  star5.innerHTML = "&star;";
  return;
}

const nothover5 = (star) => {
  star1.innerHTML = "&starf;";
  star2.innerHTML = "&starf;";
  star3.innerHTML = "&starf;";
  star4.innerHTML = "&starf;";
  return;
}

