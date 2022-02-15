const jokes = document.querySelector(".jokes");
const btn = document.querySelector(".btn");

const generateJokes = () => {

  const setHeader = {
    headers: {
      Accept: "application/JSON",}
    }
   
  

    fetch('https://icanhazdadjoke.com', setHeader)
    .then((response) => response.json())
    .then((data)=> jokes.innerHTML = data.joke )
     .catch((error) => {
      console.log('joke not found');
    })
  }

btn.addEventListener("click", generateJokes);
generateJokes();

