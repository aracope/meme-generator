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
    const memeGalleryDiv = createMemeElement('div', 'meme-gallery')
    const memeImage = createMemeElement('img', 'meme-image')
    memeImage.src = imageUrl;
    memeImage.alt = "Image from URL input.";

    // Create top and bottom text divs
    const topTextDiv = createMemeElement('div', 'top-text', topText);
    const bottomTextDiv = createMemeElement('div', 'bottom-text', bottomText);

    // Create 'x' to delete a meme
    const deleteSpan = createMemeElement('span', 'delete-meme', '\u00d7');

    // Event listener on span to delete created meme
    deleteSpan.addEventListener("click", function() {
      deleteMeme(memeGalleryDiv);
    });

    // Append elements to the memeGalleryDiv
    memeGalleryDiv.append(memeImage, topTextDiv, bottomTextDiv, deleteSpan);

    // Append to memeMuseum and save
    memeMuseum.appendChild(memeGalleryDiv);
    saveMeme();
  }

  // Meme form submission
  function memeFormSubmit(event) {
    event.preventDefault();

    const imageUrl = document.getElementById('img-url').value;
    const topMemeText = document.getElementById('top-text-input').value;
    const bottomMemeText = document.getElementById('bottom-text-input').value;

    createMeme(imageUrl, topMemeText,bottomMemeText);
    memeForm.reset();
  }
  
  // Meme deletion
  function deleteMeme(memeGallery) {
    memeMuseum.removeChild(memeGallery);
  }

  // Local storage
  function saveMeme() {
    console.log("Meme has been frozen in carbonite!")
  }

  memeForm.addEventListener("submit", memeFormSubmit)
});