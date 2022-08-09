const height = document.getElementById("height");
const weight = document.getElementById("weight");
const info = document.querySelector(".info");
const footer = document.getElementById("footer");


const handleClick = () => {

  console.log(height.value, weight.value)

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{2})+(?!\d))/g, '.');
  }
  let newHeight = numberWithCommas(Number(height.value));
  console.log(newHeight)

  const index = weight.value / (newHeight * newHeight);
  info.innerHTML = index;

  footer.style.height = "30vh";

};
