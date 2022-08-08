const height = document.getElementById("height");
const weight = document.getElementById("weight");
const info = document.querySelector(".modal-body");



const handleClick = () => {

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{2})+(?!\d))/g, '.');
  }
  let newHeight = numberWithCommas(Number(height.value));
  console.log(newHeight)



  const index = weight.value / (newHeight * newHeight);
  info.innerHTML += index;


};
