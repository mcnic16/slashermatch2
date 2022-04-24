// grabbing html
const section = document.querySelector('section');
const playermoves = document.querySelector('span');
const moves = 0;
playermoves.textContent = moves;

// game data
const gameData = () => [
    {imgsrc: "images/1.jpg", name: "1"},
    {imgsrc: "images/2.jpg", name: "2"},
    {imgsrc: "images/chucky.jpg", name: "chucky"},
    {imgsrc: "images/freddie.jpg", name: "freddie"},
    {imgsrc: "images/jason.jpg", name: "jason"},
    {imgsrc: "images/jigsaw.jpg", name: "jigsaw"},
    {imgsrc: "images/pennywise.jpg", name: "1pennywise"},
    {imgsrc: "images/scream.jpg", name: "scream"},
    {imgsrc: "images/1.jpg", name: "1"},
    {imgsrc: "images/2.jpg", name: "2"},
    {imgsrc: "images/chucky.jpg", name: "chucky"},
    {imgsrc: "images/freddie.jpg", name: "freddie"},
    {imgsrc: "images/jason.jpg", name: "jason"},
    {imgsrc: "images/jigsaw.jpg", name: "jigsaw"},
    {imgsrc: "images/pennywise.jpg", name: "1pennywise"},
    {imgsrc: "images/scream.jpg", name: "scream"},
];

// Random Cards
const shuffle = () => {
    const slasherData = gameData();
    console.log(slasherData);
};

shuffle ();



