document.addEventListener("DOMContentLoaded", function () {
  const memeForm = document.querySelector('.meme-input-form');
  const memeGallery = document.querySelector('.meme-gallery');

  
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