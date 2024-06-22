let generateBtn = document.querySelector(".box .generate");
let jokeElement = document.querySelector(".box .joke");

const apiKey = "";
const apiUrl =
  "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getData() {
  jokeElement.classList.remove("fade");
  let response = await fetch(apiUrl);
  let data = await response.json();
  console.log(data.joke);
  jokeElement.textContent = data.joke;
  jokeElement.classList.add("fade");
}

generateBtn.onclick = () => {
  getData();
};
getData();
