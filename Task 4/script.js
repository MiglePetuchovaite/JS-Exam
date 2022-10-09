/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error(error);
  }
};

const buildCard = (data) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const brand = document.createElement("h2");
  brand.innerText = "Brand: " + data.brand;

  card.appendChild(brand);

  data.models.forEach((element) => {
    const model = document.createElement("p");
    model.innerText = element;

    card.appendChild(model);
  });

  return card;
};

const output = document.getElementById("output");

fetchData(ENDPOINT).then((brands) => {
  brands.forEach((element) => {
    output.appendChild(buildCard(element));
  });
});
