/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function convertToLb(kgValue) {
  return kgValue * 2.2046;
}

function convertToG(kgValue) {
  return kgValue * 0.001;
}

function convertToOz(kgValue) {
  return kgValue * 35.274;
}

const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  outputDiv.classList.add("d-none");

  const kgValue = document.getElementById("search").value;

  if (kgValue < 1) {
    return;
  }

  outputDiv.classList.remove("d-none");

  const lbValue = convertToLb(kgValue);
  const gValue = convertToG(kgValue);
  const ozValue = convertToOz(kgValue);

  const lbDiv = document.createElement("div");
  lbDiv.appendChild(document.createTextNode("lb: " + lbValue));

  const gDiv = document.createElement("div");
  gDiv.appendChild(document.createTextNode("g: " + gValue));

  const ozDiv = document.createElement("div");
  ozDiv.appendChild(document.createTextNode("oz: " + ozValue));

  outputDiv.appendChild(lbDiv);
  outputDiv.appendChild(gDiv);
  outputDiv.appendChild(ozDiv);
});
