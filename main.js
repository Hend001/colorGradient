const formInput = document.querySelector("form");
const directions = document.querySelectorAll("input[name ='direction']");
const color1 = document.querySelector("input[name='color1']");
const color2 = document.querySelector("input[name='color2']");
const answer = document.querySelector("#demo");
const bgGenerator = () => {
  // console.log("wow");
  let selectedValue;
  for (const item of directions) {
    if (item.checked) {
      selectedValue = item.value;
    }
  }

  let gradiant = `linear-gradient(${selectedValue}, ${color1.value},${color2.value} )`;
  document.body.style.backgroundImage = gradiant;
  answer.textContent = gradiant;
};
formInput.addEventListener("change", bgGenerator);
