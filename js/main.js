const hamster = document.getElementById("hamster");

// Aai counter
const hongerText = document.getElementById("hnger");
const aaiBtn = document.getElementById("aai-btn");
const aaiInpt = document.getElementById("aai-counter");
const hartjes = document.getElementById("hartjes")

const audioSpin = new Audio("./assets/audio/hampie-spin.mp3")
let aaiCounter = 0;

aaiBtn.addEventListener("click", () => {
  aaiCounter++
  aaiFunctie();
  aaiInpt.innerHTML = aaiCounter;
})

// -- Functie dat elementen doet veranderen wanneer de aai-counter op een bepaalde value zit
const aaiFunctie = () => {
 if (aaiCounter === 3) {
    hamster.src = "./assets/pictures/hampie-lig.png"
  } else if (aaiCounter === 5) {
    hartjes.classList.remove("invisible");
  } else if (aaiCounter === 10) {
    hartjes.src = "./assets/pictures/spinnen.png";
    audioSpin.play();
  } else if (aaiCounter > 15){
    setTimeout(() => {
      aaiReset();
    }, 1000);
  }
}

// -- Functie dat de counter terug reset na 5sec
const aaiReset = () => {
  aaiCounter = 0;
  aaiInpt.innerHTML = aaiCounter;
 hamster.src = "./assets/pictures/hampie-zit.png";
 hartjes.classList.add("invisible");
 hartjes.src = "./assets/pictures/hartjes_1.png";
}

// Hamster praat
const meowBubble = document.getElementById("praat"); 
const audioMeow = new Audio('../assets/audio/hampie-meow.mp3');

// -- Maakt de bubble zichtbaar na te klikken en speelt audio
hamster.addEventListener("click", () => {
meowBubble.classList.remove("invisible");
audioMeow.play();

// -- Verwijderd de bubbel
setTimeout(() => {
  meowBubble.classList.add("invisible");
}, 3000);
});

// Muisje
document.addEventListener("DOMContentLoaded", function () {
const muisBtn = document.getElementById("muis-btn");

// -- Voegt animatie toe aan element na te klikken
muisBtn.addEventListener("click", () => {
  muisBtn.classList.add("muisAnimatie");
// -- Timer die ervoor zorgt dat de animatie terug wordt verwijderd na deze gedaan is
  setTimeout(() => {
    muisBtn.classList.remove("muisAnimatie");
  }, 1000);
})
});

// QUIZ
// Vraag 1 - leeftijd
const inputAge = document.getElementById("input-age");
const ageBtn = document.getElementById("button-age");
const ageRslt = document.getElementById("result-age");

// -- Checkt of het antwoord juist of niet is
ageBtn.addEventListener("click", () => {
  if (inputAge.value === "14") {
    ageRslt.style.color = "green";
    ageRslt.innerHTML = "Juist!"
  } else {
    ageRslt.style.color = "red";
    ageRslt.innerHTML = "Fout..."
  }
})

// Vraag 2 - eten
const inputEten = document.getElementById("input-eten");
const jaBtn = document.getElementById("button-ja");
const neeBtn = document.getElementById("button-nee");
const quizBtn = document.querySelectorAll(".quiz-button");

const etenRslt = document.getElementById("result-eten");
const etenAmount = document.getElementById("result-eten-amount");

// -- Array met eten
 const eten = [
  {
    naam: "Ajuin", isLust: false,
}, {
  naam: "Tonijn", isLust: true,
}, {
  naam: "Abrikoos", isLust: false,
}, {
  naam: "Melk", isLust: true,
}, {
  naam: "Medicatie", isLust: false,
}, {
  naam: "Katten snoepjes", isLust: true,
}, 
]

let etenCount = 0;
let juistCount = 0;

const toonEten = () => {
  if (etenCount < eten.length) {
    const huidigEten = eten[etenCount];
    inputEten.innerHTML = huidigEten.naam;
  } else {
    etenRslt.innerHTML = "Op :)"
  }
}

// -- Toon na button klik nieuw eten
quizBtn.forEach((button) => {
  button.addEventListener("click", () => {
  etenCount++
  toonEten();
})
});

toonEten();

// -- Functie toepassen op btns
jaBtn.addEventListener("click", () => {
  checkIfLust(false)
});
neeBtn.addEventListener("click",() => {
  checkIfLust(true);
});

// -- Functie voor antwoord te controleren
const checkIfLust = (checkBoolean) => {
  // Check of er nog eten is
  if (etenCount > 7) {
    return;
  }

  huidigEten = eten[etenCount];

  // Check of het juist of fout is
    if(huidigEten.isLust === checkBoolean) {
      juistCount++
      etenRslt.style.color = "Green";
      etenRslt.innerHTML = "Juist";
    } else {
      etenRslt.style.color = "Red";
      etenRslt.innerHTML = "Fout";
    }
    etenAmount.innerHTML = `Je hebt ${juistCount} juist.`
  }

// Vraag 3 - vindt hamster jou leuk?
const naamInput = document.getElementById("input-naam");

const naamBtn = document.getElementById("button-naam");
const naamRslt = document.getElementById("result-naam");

// -- Button event listener
naamBtn.addEventListener("click", () => {
  checkNaam(naamInput.value);
})


// -- Functie die naam controleerd
const hanno = "hanno";
const tot = "tot";

const checkNaam = (naam) => {
if (naam === hanno || naam === tot) {
  naamRslt.innerHTML = "Hamster vindt jou leuk!"
}
// -- Controleer hoe lang de input is
else if (naam.length === 7){
  naamRslt.innerHTML = "Hamster vind jou leuk... met mate."
} 
else {
  naamRslt.innerHTML = "Hamster rook aan jouw hand en liep direct weg... nee dus."
}
}

// Open modals
const quizModal = document.getElementById("quiz-modal");
const infoModal = document.getElementById("info-modal");

const infoBtn = document.getElementById("info-btn");
const vraagBtn = document.getElementById("vraag-btn");
const sluitBtn = document.querySelectorAll("#sluit-btn");

// Functie voor de modal te openen
const modalOpen = (modal) => {
  modal.classList.remove("invisible");
}

infoBtn.addEventListener("click", () => {
  modalOpen(infoModal);
})

vraagBtn.addEventListener("click", () => {
  modalOpen(quizModal);
})

// Functie voor de modal te sluiten
const modalSluit = (modal) => {
  modal.classList.add("invisible");
  }

sluitBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    if (!infoModal.classList.contains("invisible")) {
      modalSluit(infoModal);
    } else if(!quizModal.classList.contains("invisible")) {
      modalSluit(quizModal);
    }
    })
});