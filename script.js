let images = [
  "dice-01.svg",
  "dice-02.svg",
  "dice-03.svg",
  "dice-04.svg",
  "dice-05.svg",
  "dice-06.svg"
];

let dice = document.querySelectorAll("#die-01, #die-02");

function roll() {
    
    dice.forEach(die => die.classList.add("shake"));

    setTimeout(() => {

        dice.forEach(die => die.classList.remove("shake"));

        
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);

        
        document.querySelector("#die-01").src = images[dieOneValue];
        document.querySelector("#die-02").src = images[dieTwoValue];

        
        document.querySelector("#total").textContent =
          "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1));

    }, 500); 
}


document.getElementById("rollBtn").addEventListener("click", roll);

roll();

