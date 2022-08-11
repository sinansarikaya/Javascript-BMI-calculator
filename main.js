const height = document.getElementById("height");
const weight = document.getElementById("weight");
const info = document.querySelector(".info");
const footer = document.getElementById("footer");
const progressBar = document.querySelector(".w3-green");
const errorPage = document.querySelector(".error-page");
const errorMessage = document.querySelector(".error-message");

const closeError = () => {
  errorPage.style.display = "none";
};
const showAlert = (e) => {
  errorPage.style.display = "block";
  errorMessage.innerHTML = e;
};

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

function removeDot(num) {
  while (num % 1 !== 0) {
    num *= 10;
  }
  return num;
}

const handleClick = () => {
  if (height.value && weight.value) {
    let heightNum = Number(height.value);
    let weightNum = Number(weight.value);

    if (isFloat(heightNum)) {
      weightNum = removeDot(weightNum);
      heightNum = removeDot(heightNum);

      heightNumLen = String(heightNum).length;
      console.log(heightNum);
      if (heightNumLen == 2) {
        heightNum = Number(heightNum);
        heightNum = heightNum * 10;
        showResult(heightNum, weightNum);
      } else if (heightNumLen == 3) {
        showResult(heightNum, weightNum);
      } else {
        showAlert("The height value should be between 30cm and 250cm.");
      }

      // showResult(heightNum, weightNum);
    } else {
      showResult(heightNum, weightNum);
    }

    function showResult(heightNum, weightNum) {
      if (heightNum >= 250 || heightNum <= 30) {
        showAlert("The height value should be between 30cm and 250cm.");
      } else if (weightNum >= 300 || weightNum <= 0) {
        showAlert("The weight value should be between 0kg and 300kg.");
      } else {
        function numberWithCommas(num) {
          return num.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ".");
        }
        let newHeight = numberWithCommas(Number(height.value));
        let index = weight.value / (newHeight * newHeight);
        // console.log(index.toFixed(2));
        index = Math.round(index * 100) / 100;

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
          color = "#ffd186";
        } else if (index > 18.5 && index < 25) {
          bmi = "Normal"; //46,25 //62,5
          percent = 50;
          color = "#5dd782";
        } else if (index > 25 && index < 30) {
          bmi = "Overweight";
          percent = 70;
          color = "#ffd186";
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

        info.innerHTML = `Your body mass index is "<u>${index}</u>". You are ${bmi} person.`;
        progressBar.style.width = `${percent}%`;
        progressBar.style.backgroundColor = color;
        `${color}%`;
        progressBar.innerHTML = `${bmi}`;
        footer.style.height = "25vh";
      }
      return false;
    }
  } else {
    showAlert("You did not enter a weight or height value.");
  }
};
