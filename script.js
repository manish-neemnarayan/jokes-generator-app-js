const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

jokeBtn.addEventListener("click", () => {
    const fetching = async () => {
        let data = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single&idRange=0-319");
        let dataJS = await data.json();
        let returnJoke = await dataJS.joke;
        joke.textContent = returnJoke;
    }
    fetching();    
})
