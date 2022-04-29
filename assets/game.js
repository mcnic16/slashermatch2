// Grabbibng HTML

const section = document.querySelector('section');
const paired = document.querySelector('span');
let same = 0;

paired.textContent = same;

// game pictures

const pictures = () => [{
        imgsrc: "assets/images/1.jpg",
        name: "1"
    },
    {
        imgsrc: "assets/images/2.jpg",
        name: "2"
    },
    {
        imgsrc: "assets/images/chucky.jpg",
        name: "chucky"
    },
    {
        imgsrc: "assets/images/freddie.jpg",
        name: "freddie"
    },
    {
        imgsrc: "assets/images/jason.jpg",
        name: "jason"
    },
    {
        imgsrc: "assets/images/jigsaw.jpg",
        name: "jigsaw"
    },
    {
        imgsrc: "assets/images/pennywise.jpg",
        name: "pennywise"
    },
    {
        imgsrc: "assets/images/scream.jpg",
        name: "scream"
    },
    {
        imgsrc: "assets/images/1.jpg",
        name: "1"
    },
    {
        imgsrc: "assets/images/2.jpg",
        name: "2"
    },
    {
        imgsrc: "assets/images/chucky.jpg",
        name: "chucky"
    },
    {
        imgsrc: "assets/images/freddie.jpg",
        name: "freddie"
    },
    {
        imgsrc: "assets/images/jason.jpg",
        name: "jason"
    },
    {
        imgsrc: "assets/images/jigsaw.jpg",
        name: "jigsaw"
    },
    {
        imgsrc: "assets/images/pennywise.jpg",
        name: "pennywise"
    },
    {
        imgsrc: "assets/images/scream.jpg",
        name: "scream"
    },
];

// Random Cards
const shuffle = () => {
    const slasherData = pictures();
    slasherData.sort(() => Math.random() - 0.5);
    return slasherData;
};



// card data

const cards = () => {
    const slasherData = shuffle();

    // html data

    slasherData.forEach((item) => {
        const slasherCard = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');
        slasherCard.classList = "slasherCard";
        front.classList = "front";
        back.classList = "back";

        // adding pictures onto the cards

        front.src = item.imgsrc;
        slasherCard.setAttribute('name', item.name);
        section.appendChild(slasherCard);
        slasherCard.appendChild(front);
        slasherCard.appendChild(back);

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

    //To check if cards match

    if (flippedCards.length === 2) {
        if (
            flippedCards[0].getAttribute('name') ===
            flippedCards[1].getAttribute('name')
        ) {
            console.log("correct");
            flippedCards.forEach((slasherCard) => {
                slasherCard.classList.remove("flipped");
                slasherCard.style.pointerEvents = "none";

            });
            same++;
            paired.textContent = same;

            if(same === 9) {
                restart();
        };
            
            
        } else {
            console.log("try again");
            flippedCards.forEach((slasherCard) => {
                slasherCard.classList.remove('flipped');
                setTimeout(() => slasherCard.classList.remove("toggleCard"), 1000);
            });

        }
    };
};


// Restart the game

const restart = () => {
    var slasherData = shuffle ();
    var newFront = document.querySelectorAll(".front");
    var newCards = document.querySelectorAll(".slasherCard");
    slasherData.forEach((item, index) => {
        newCards[index].classList.remove("toggleCard");
   
        // Reshuffle cards
        setTimeout (() => {
        newCards[index].style.pointerEvents = "all";
        newFront[index].src = item.imgsrc;
        newCards[index].setAttribute("name", item.name);
        },1000);
    });
    same = 0;
    paired.textContent = same;

};

function newGame()
    {
        restart();
    }

cards();

