/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

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

const buildUserCard = (user) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const avatar = document.createElement("img");
  avatar.src = user.avatar_url;

  const userName = document.createElement("p");
  userName.innerText = "username: " + user.login;

  card.appendChild(avatar);
  card.appendChild(userName);

  return card;
};

document.addEventListener("click", () => {
  fetchData(ENDPOINT).then((users) => {
    const outputDiv = document.getElementById("output");
    document.getElementById("message").remove();
    users.forEach((user) => {
      outputDiv.appendChild(buildUserCard(user));
    });
  });
});
