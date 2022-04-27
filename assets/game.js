
// grabbing html
const gameData = document.querySelector('.slasherCard');


// Swap Cards around
const shuffle = () => {
    const slasherData = gameData();
    slasherData.sort(() => Math.random() -0.5);
    return slasherData;
   };


// card data
const cards = () => {
const slasherData = shuffle ();
slasherData.forEach((item) => {
slasherCard.setAttribute('name', item.name);
slasherCard.addEventListener("click", (e) => {
    slasherCard.classList.toggle("toggleCard");
    checkCards(e);
 
   
});
});
};

 // checkCards
 const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    
    //Logic
if(flippedCards.length === 2) {
   if (
   flippedCards[0].getAttribute('name') ===
   flippedCards[1].getAttribute('name')
   ) {
       console.log("match");
       flippedCards.forEach((slasherCard) => {
           slasherCard.classList.remove("flipped");
           slasherCard.style.pointerEvents = "none";
       });
   } else {
       console.log ("wrong");
       flippedCards.forEach((slasherCard) => {
           slasherCard.classList.remove('flipped');
           setTimeout(() => slasherCard.classList.remove("toggleCard"), 1000);
       });

   }
};
};
cards ();
