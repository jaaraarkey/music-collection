"use strict";

const records = [
  {
    cover: "./img/a-moon-shaped-pool.png",
    band: "Radiohead",
    album: "A Moon Shaped Pool",
    year: 2016,
    genre: ["post rock", "art rock", "chamber", "ambient"],
    label: "XL",
    spotify: "https://open.spotify.com/album/2ix8vWvvSp2Yo7rKMiWpkg",
  },
  {
    cover: "./img/Hail-To-The-Thief.png",
    band: "Radiohead",
    album: "Hail to the Thief",
    year: 2003,
    genre: "experimental rock",
    label: "Parlophone",
    spotify: "https://open.spotify.com/album/5mzoI3VH0ZWk1pLFR6RoYy",
  },
  {
    cover: "./img/kid-a.png",
    band: "Radiohead",
    album: "Kid A",
    year: 2000,
    genre: "electronic rock",
    label: "Parlophone",
    spotify: "https://open.spotify.com/album/6GjwtEZcfenmOf6l18N7T7",
  },
  {
    cover: "./img/tyron.jpeg",
    band: "slowthai",
    album: "TYRON",
    year: 2021,
    genre: ["punk rock", "hip-hop", "uk grime"],
    label: "Interscope",
    spotify: "https://open.spotify.com/album/7qE3WaOVAAIxgH8WtjbBBj",
  },
  {
    cover: "./img/ugly.jpeg",
    band: "slowthai",
    album: "UGLY",
    year: 2023,
    genre: ["punk rock", "hip-hop", "uk grime"],
    label: "Interscope ",
    spotify: "https://open.spotify.com/album/0zKG6mYOsobBuhlBqgnGRs",
  },
  {
    cover: "./img/among-heads.jpeg",
    band: "Deki Alem",
    album: "Among Heads",
    year: 2022,
    genre: ["hip-hop", "uk grime"],
    label: "DEKI ALEM ",
    spotify: "https://open.spotify.com/album/1Jkh2XEpMKKDsrCVH94e9y",
  },
  {
    cover: "./img/Beasty-Boys.jpeg",
    band: "Beasty Boys",
    album: "The Best of Beasty Boys",
    year: 2024,
    genre: ["punk rock", "hip-hop"],
    label: "Def Jam Recordings ",
    spotify: "https://open.spotify.com/artist/03r4iKL2g2442PT9n2UKsx",
  },
  {
    cover: "./img/the-battle-of-la.jpeg",
    band: "Rage Against the Machine",
    album: "The Battle of Los Angeles",
    year: 2024,
    genre: ["rap core", "nu metal"],
    label: "Epic ",
    spotify: "https://open.spotify.com/album/2eia0myWFgoHuttJytCxgX",
  },
  {
    cover: "./img/listeners.jpeg",
    band: "Scrimshire",
    album: "Listeners",
    year: 1999,
    genre: ["rap core", "nu metal"],
    label: "Albert’s Favourites",
    spotify: "https://open.spotify.com/album/3XcbDWpOFOEj0BzzC3iMqt",
  },
  {
    cover: "./img/blk-to-the-future.jpeg",
    band: "Sons Of Khemet",
    album: "Black To The Future",
    year: 2021,
    genre: ["rap core", "hip-hop"],
    label: ["Naim", " Impulse!"],
    spotify: "https://open.spotify.com/album/6AfA0FZhzRTpjDDYHkCd5B",
  },
  {
    cover: "./img/ahead.jpeg",
    band: "Karl Hector & The Malcouns",
    album: "Unstraight Ahead",
    year: 2001,
    genre: ["nu jazz", "acid jazz", "post rock"],
    label: ["Now-Again Records"],
    spotify: "https://open.spotify.com/artist/1RrTQU4gM94QB6XWSBy8yB",
  },
  {
    cover: "./img/jaga-2001.jpeg",
    band: "Karl Hector & The Malcouns",
    album: "A Livingroom Hash",
    year: 2001,
    genre: ["nu jazz", "acid jazz", "post rock"],
    label: ["Ninja Tune"],
    spotify: "https://open.spotify.com/artist/68HFSFMCZzyRjkkm9bv5Vt",
  },
  {
    cover: "./img/amyl-sniffers-comfort-me.png",
    band: " Amyl and the Sniffers",
    album: "Comfort to Me",
    year: 2021,
    genre: ["punk rock"],
    label: ["Flightless"],
    spotify: "https://open.spotify.com/artist/3NqV2DJoAWsjl787bWaHW7",
  },
];

const html = document.querySelector("html");
html.style.height = "100%";

const body = document.body;
body.style.color = "white";
body.style.fontFamily = "Roboto";
body.style.margin = "0";
body.style.padding = "0";
body.style.background =
  "linear-gradient(106deg, rgba(32,2,78,0.958420868347339) 0%, rgba(15,15,15,1) 100%)";
body.style.backgroundRepeat = "no-repeat";
body.style.height = "100vh";
body.style.backgroundAttachment = "fixed";
body.style.marginBottom = "10rem";

const collectionTitle = document.querySelector(".collection-title");
collectionTitle.style.textAlign = "left ";
collectionTitle.style.with = "100vw";
collectionTitle.style.maxWidth = "98rem";
collectionTitle.style.margin = "0 auto";
collectionTitle.style.color = "white";
collectionTitle.style.background = "rgba(255, 255, 255, .3";
collectionTitle.style.borderRadius = ".5rem";
collectionTitle.style.fontWeight = "300";
collectionTitle.style.fontSize = "4.4rem";
collectionTitle.style.padding = "1rem 1rem";
collectionTitle.style.position = "sticky";
collectionTitle.style.top = "0";
collectionTitle.style.zIndex = "1";
collectionTitle.style.backdropFilter = "blur(5px)";

const recordsContainer = document.getElementById("container");
recordsContainer.style.margin = "0 auto";
recordsContainer.style.display = "flex";
recordsContainer.style.flexWrap = "wrap";
recordsContainer.style.justifyContent = "center";
recordsContainer.style.margin = "1rem auto";
recordsContainer.style.maxWidth = "100rem";

let backgroundColor =
  "linear-gradient(-45deg, rgba(150,2,199,10) 0%, rgba(36,4,173,0.958420868347339) 46%, rgba(46,0,101,10)";

const h1Size = "1.5rem";
const h1Weight = "bold";

const h2Size = "1.2rem";
const h2Weight = "200";

const h3Size = "0.5rem";
const h3Weight = "200";

const h4Size = "1rem";
const h4Weight = "200";

const h5Size = "14px";
const h5Weight = "200";

const h6Size = "12px";
const h6Weight = "200";

const pSize = "0.8rem";
const pWeight = "normal";

const contentPadding = "1rem 3rem 0 1rem";

records.forEach((record) => {
  // ? -> Create card element
  const card = document.createElement("div");
  card.classList.add("card");

  // ? -> Apply Card styles
  const backgroundColor = ``;
  card.style.width = "18rem";
  card.style.background = backgroundColor;
  card.style.border = "1px solid #57007b";
  card.style.borderRadius = "10px";
  card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  card.style.margin = "1rem 1rem";
  card.style.boxShadow = " 0px 0px 269px 0 rgba(160,0,240,0.5)";

  // ? -> Create content div
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("card-content");
  contentDiv.style.padding = "0 0 2rem 0";

  // ? -> Create and append cover image
  const imgDiv = document.createElement("div");
  const img = document.createElement("img");
  img.src = record.cover;
  img.alt = `${record.album} cover`;
  img.width = "100%";
  img.style.borderRadius = "10px 10px 0 0";
  img.style.width = "100%";
  img.style.objectFit = "cover";
  imgDiv.appendChild(img);

  // ? -> Album title
  const albumTitle = document.createElement("h2");
  albumTitle.textContent = record.album;
  albumTitle.style.padding = contentPadding;
  albumTitle.style.fontSize = h2Size;
  albumTitle.style.fontWeight = h2Weight;

  // ? -> Band
  const band = document.createElement("p");
  band.textContent = `${record.band}`;

  band.style.padding = "0.2rem 1rem 0";
  band.style.fontSize = h2Size;
  band.style.fontWeight = pWeight;

  // ? -> Create year
  const year = document.createElement("p");
  year.textContent = `year: ${record.year}`;

  year.style.padding = ".2rem  1rem 0 ";
  year.style.fontSize = h5Size;
  year.style.fontWeight = h3Weight;

  // ? -> Label
  const label = document.createElement("p");
  label.textContent = `label: ${record.label}`;

  label.style.padding = "0 0 0 1rem";
  label.style.fontSize = h5Size;
  label.style.fontWeight = "300";
  label.style.opacity = ".8";

  // ? -> Create genre
  const genre = document.createElement("p");
  genre.textContent = `${
    Array.isArray(record.genre) ? record.genre.join(", ") : record.genre
  }`;

  genre.style.padding = contentPadding;
  genre.style.borderRadius = ".5rem";
  genre.style.backgroundColor = "rgba(0, 66, 55, 0.)";
  genre.style.padding = "0.2rem 1rem 0 1rem ";
  genre.style.margin = "0.5rem auto";
  genre.style.fontSize = h6Size;
  genre.style.fontWeight = h6Weight;

  // ? -> Hr divider
  const hr = document.createElement("hr");

  hr.style.border = "1px solid rgba(255, 255, 255, 0.3)";
  hr.style.alignSelf = "end";
  hr.style.margin = "1rem 0";

  // ? -> Spotify div
  const spotifyDiv = document.createElement("div");
  spotifyDiv.classList.add("spotify-div");

  spotifyDiv.style.display = "flex";
  spotifyDiv.style.alignItems = "center";
  spotifyDiv.style.padding = "0 1rem";

  // ? -> Spotify href
  const spotify = document.createElement("a");
  spotify.classList.add("spotify-href");
  spotify.href = record.spotify;
  spotify.textContent = "Listen on Spotify";

  spotify.style.width = "100%";
  spotify.style.display = "flex";
  spotify.style.alignItems = "center";
  spotify.style.justifyContent = "space-between";
  spotify.style.color = "white";
  spotify.style.fontSize = "pSize";
  spotify.style.fontWeight = "100";
  spotify.style.textDecoration = "none";
  spotify.target = "_blank";

  // ? -> Create and append sptify icon
  const spotifyIcon = document.createElement("i");
  spotifyIcon.classList.add("fa-brands");
  spotifyIcon.classList.add("fa-spotify");
  spotifyIcon.classList.add("spotify-icon");
  spotifyIcon.style.fontSize = "2rem";
  spotifyIcon.style.padding = "0 1rem";

  // ? -> Append elements to content div
  contentDiv.appendChild(imgDiv);
  spotifyDiv.appendChild(spotifyIcon);
  contentDiv.appendChild(albumTitle);
  contentDiv.appendChild(band);
  contentDiv.appendChild(year);
  contentDiv.appendChild(label);
  contentDiv.appendChild(genre);

  contentDiv.appendChild(hr);
  spotifyDiv.appendChild(spotify);
  spotify.appendChild(spotifyIcon);
  contentDiv.appendChild(spotifyDiv);
  card.appendChild(contentDiv);

  // ? -> Append card to container
  recordsContainer.appendChild(card);
});
