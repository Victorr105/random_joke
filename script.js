const getJokeBtn = document.getElementById("getJokeBtn");
const jokeForTheDay = document.getElementById("jokeForTheDay");
const thinking = document.getElementById("thinking");
const footForGeneral = document.getElementById("footForGeneral");
const footForSetup = document.getElementById("footForSetup");

getJokeBtn.addEventListener("click", () => {
  // Clear old content first
  jokeForTheDay.textContent = "";
  footForGeneral.textContent = "";
  thinking.textContent = "";
  footForSetup.textContent = "";

  // Fetch every time the button is clicked
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      jokeForTheDay.textContent = "Here is the joke for the day:";
      footForGeneral.textContent = data.setup;

      // Show "thinking" immediately
      thinking.textContent = "Thinking ...............🤔🤔🤔🤔";

      // After 3 seconds, remove "thinking" and show punchline
      setTimeout(() => {
        thinking.textContent = "";
        footForSetup.textContent = data.punchline;
      }, 4000);
    })
    .catch(error => console.log(error));
});
