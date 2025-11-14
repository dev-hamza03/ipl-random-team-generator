const iplTeams = [
    {
        team: "CSK",
        fullName: "Chennai Super Kings",
        primary: "yellow",
        secondary: "#0A3D62",  // deep navy blue
        trophies: "⭐ Trophies: 5",
        logo: "./assets/images/CSK-img.png"
    },
    {
        team: "MI",
        fullName: "Mumbai Indians",
        primary: "blue",
        secondary: "#F1C40F",  // clean gold
        trophies: "⭐ Trophies: 5",
        logo: "./assets/images/MI-img.png"
    },
    {
        team: "KKR",
        fullName: "Kolkata Knight Riders",
        primary: "purple",
        secondary: "#F7D358",  // soft gold
        trophies: "⭐ Trophies: 3",
        logo: "./assets/images/KKR-img.png"
    },
    {
        team: "SRH",
        fullName: "Sunrisers Hyderabad",
        primary: "orange",
        secondary: "#2C3E50",  // deep blue-black
        trophies: "⭐ Trophies: 2",
        logo: "./assets/images/SRH-img.png"
    },
    {
        team: "RR",
        fullName: "Rajasthan Royals",
        primary: "pink",
        secondary: "#1A237E",  // royal blue
        trophies: "⭐ Trophies: 1",
        logo: "./assets/images/RR-img.png"
    },
    {
        team: "RCB",
        fullName: "Royal Challengers Bengaluru",
        primary: "red",
        secondary: "#F7DC6F",  // soft premium gold
        trophies: "⭐ Trophies: 0",
        logo: "./assets/images/RCB-img.png"
    },
    {
        team: "DC",
        fullName: "Delhi Capitals",
        primary: "blue",
        secondary: "#C0392B",  // deep red
        trophies: "⭐ Trophies: 0",
        logo: "./assets/images/DC-img.png"
    },
    {
        team: "LSG",
        fullName: "Lucknow Super Giants",
        primary: "skyblue",
        secondary: "#E67E22",  // soft orange
        trophies: "⭐ Trophies: 0",
        logo: "./assets/images/LSG-img.png"
    },
    {
        team: "GT",
        fullName: "Gujarat Titans",
        primary: "navy",
        secondary: "#F1C40F",  // clean gold
        trophies: "⭐ Trophies: 1",
        logo: "./assets/images/GT-img.png"
    },
    {
        team: "PBKS",
        fullName: "Punjab Kings",
        primary: "red",
        secondary: "#BDC3C7",  // silver grey
        trophies: "⭐ Trophies: 0",
        logo: "./assets/images/PBKS-img.png"
    }
];


let btn = document.querySelector("button");
let img = document.querySelector(".img");
let teamName = document.querySelector("h2");
let trophies = document.querySelector("h3");
let card = document.querySelector(".card");



btn.addEventListener("click", () => {
    let num = Math.floor(Math.random() * iplTeams.length);


    console.log(iplTeams[num].fullName)

    card.style.backgroundColor = iplTeams[num].primary;

    img.style.backgroundImage = `url(${iplTeams[num].logo})`;



    teamName.style.color = iplTeams[num].secondary;
    trophies.style.color = iplTeams[num].secondary;

    teamName.innerHTML = iplTeams[num].fullName;
    trophies.innerHTML = iplTeams[num].trophies;

});