// ** Play music area ** //
const audio = new Audio("http://regradetres.tk/img/one_more_light.mp3"); // música está hospedada num outro projeto, mudarei em breve.
const playMusicButton = document.querySelector(".music");
playMusicButton.addEventListener("click", toggleMusicOnOff);

function toggleMusicOnOff() {
  if (playMusicButton.classList.contains("fa-play-circle")) {
    audio.play();
    playMusicButton.classList.remove("fa-play-circle");
    playMusicButton.classList.add("fa-pause-circle");
  } else {
    audio.pause();
    playMusicButton.classList.remove("fa-pause-circle");
    playMusicButton.classList.add("fa-play-circle");
  }
}

// ** Phrases area ** //
const phraseArea = document.querySelector(".main-header-area > h1");
phraseArea.addEventListener("click", togglePhrase);

const phraseEN = "Who cares if one more light goes out? Well, I do.";
const phrasePT =
  "Quem se importa se mais uma luz se apagar? Bem, eu me importo.";

function toggleClass() {
  const menu = document.querySelector(".main-menu");
  menu.classList.toggle("toggle-cls");
}

function togglePhrase() {
  if (phraseArea.innerHTML.includes(phraseEN)) {
    phraseArea.innerHTML = phrasePT;
  } else {
    phraseArea.innerHTML = phraseEN;
  }
}
