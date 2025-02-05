document.addEventListener("DOMContentLoaded", function () {
  const memeForm = document.querySelector('.meme-input-form');
  const memeMuseum = document.querySelector('.meme-museum');

  // Helper function to create meme element with text
  function createMemeElement(tag, className, content = '') {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    element.innerHTML = content;
    return element;
  }

  // Create the meme element with image and text
  function createMeme(imageUrl, topText, bottomText) {
    if (!imageUrl) {
      alert("Please provide a valid image URL!");
      return;
    }
    // Create meme-gallery div and image
    const memeGallery = createMemeElement('div', 'meme-gallery')
    const memeImage = createMemeElement('img', 'meme-image')
    memeImage.src = imageUrl;
    memeImage.alt = "Image from URL input.";

    // Create top and bottom text divs
    const topText = createMemeElement('div', 'top-text', topText);
    const bottomText = createMemeElement('div', 'bottom-text', bottomText);

    // Create 'x' to delete a meme
    const deleteSpan = createMemeElement('span', 'delete-meme', '\u00d7');

    // Append elements to the memeGallery
    memeGallery.append(memeImage, topText, bottomText, deleteSpan);

    // Append to memeMuseum and save
    memeMuseum.appendChild(memeGallery);
    saveMeme();
  }

  // Meme form submission
  function memeFormSubmit(event) {
    event.preventDefault();

    const imageUrl = document.getElementById('img-url').value;
    const topText = document.getElementById('top-text-input').value;
    const bottomText = document.getElementById('bottom-text-input').value;

    createMeme(imageUrl, topText,bottomText);
    memeForm.reset();
  }
  
  memeForm.addEventListener("submit", memeFormSubmit);
  deleteSpan.addEventListener("click", memeDeletion);
});


// document.addEventListener("DOMContentLoaded", function () {
//   const memeForm = document.querySelector('.meme-input-form');
//   const memeGallery = document.querySelector('.meme-gallery');

//   memeForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     // create div for meme
//     const memeDiv = document.createElement('div');
//     memeDiv.classList.add('meme-gallery')

//     // create image for meme
//     const memeImage = document.createElement("img");
//     const urlInput = document.getElementById("img-url");
//     const imageUrl = urlInput.value;

//     memeImage.src = imageUrl;
//     memeImage.alt = "Image from URL Input";

//     // create div for top text of meme
//     const topTextDiv = document.createElement('div');
//     topTextDiv.classList.add('top-text');
//     topTextDiv.innerHTML = document.getElementById('top-text-input').value;

//     // create div for bottom text of meme
//     const bottomTextDiv = document.createElement('div');
//     bottomTextDiv.classList.add('bottom-text');
//     bottomTextDiv.innerHTML = document.getElementById('bottom-text-input').value;

//     // create span for deletion of meme
//     const deleteSpan = document.createElement('span');
//     deleteSpan.innerHTML = "\u00d7";
//     deleteSpan.style.pointerEvents="none";

//     //append to gallery
//     memeGallery.appendChild(memeDiv);
//     memeDiv.appendChild(memeImage);
//     memeDiv.appendChild(topTextDiv);
//     memeDiv.appendChild(bottomTextDiv);
//     memeDiv.appendChild(deleteSpan);
//     memeForm.reset();
//     saveMeme();
//   });

//   memeGallery.addEventListener("click", function (e) {
//     e.target.tagName === "SPAN"
//     e.target.parentElement.remove();
//     saveMeme();
//   });

//   //local storage save/recall
//   function saveMeme() {
//     localStorage.setItem("data", memeGallery.innerHTML);
//   }
//   function showMeme() {
//     memeGallery.innerHTML = localStorage.getItem("data");
//   }
//   showMeme();
// });