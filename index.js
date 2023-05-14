//*COMMENTS AND NOTES

// TODO Ref the following elements/classes
//^ .generate-meme-btn
//^ .meme-title
//^ .meme-author
//^ meme img

//! RESEARCH AND LEARN HOW ALL OF THIS WORKS.

//? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//? ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const loadNewDataFromLink = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = "OC credit: " + author;
};

const fetchDataFromLink = () => {
  fetch("https://meme-api.com/gimme/all")
    .then((response) => response.json())
    .then((data) => {
      loadNewDataFromLink(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", fetchDataFromLink);

let multiplier = (c) => {
  let a = 10;
  let b = 3;
  let multiplierInt = Math.floor(Math.random() * c);

  let sum = a * b * multiplierInt;
  return sum;
};

console.log(multiplier(150));
