const height = document.getElementById("height");
const weight = document.getElementById("weight");
const info = document.querySelector(".info");
const footer = document.getElementById("footer");
const progressBar = document.querySelector(".w3-green");


const handleClick = () => {
  if (height.value && weight.value) {

    function numberWithCommas(num) {
      return num.toString().replace(/\B(?=(\d{2})+(?!\d))/g, '.');
    }
    let newHeight = numberWithCommas(Number(height.value));
    let index = weight.value / (newHeight * newHeight);
    index = Math.round(index * 100) / 100

    if (index < 16) {
      bmi = "Severe Thinness";
      percent = 20;
      color = "#dc3545";
    } else if (index > 16 && index < 17) {
      bmi = "Moderate Thinness";
      percent = 30;
      color = "#dc3545";
    } else if (index > 17 && index < 18.5) {
      bmi = "Mild Thinness";
      percent = 46;
      color = "#ffc107";
    } else if (index > 18.5 && index < 25) {
      bmi = "Normal"; //46,25 //62,5
      percent = 50;
      color = "#28a745";
    } else if (index > 25 && index < 30) {
      bmi = "Overweight";
      percent = 70;
      color = "#ffc107";
    } else if (index > 30 && index < 35) {
      bmi = "Obese Class I";
      percent = 85;
      color = "#dc3545";
    } else if (index > 35 && index < 40) {
      bmi = "Obese Class II";
      percent = 95;
      color = "#dc3545";
    } else {
      bmi = "Obesity III";
      percent = 100;
      color = "#dc3545";
    }

    info.innerHTML = `Your body mass index is ${index}. You are ${bmi} person.`;
    progressBar.style.width = `${percent}%`;
    progressBar.style.backgroundColor = color; `${color}%`;
    progressBar.innerHTML = `${bmi}`;
    footer.style.height = "30vh";


  } else {
    console.log(false)
  }

};

