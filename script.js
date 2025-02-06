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
    deleteSpan.addEventListener("click", () => {
      memeMuseum.removeChild(memeGalleryDiv);
      saveMemes();
    });

    // Append elements to the memeGalleryDiv
    memeGalleryDiv.append(memeImage, topTextDiv, bottomTextDiv, deleteSpan);

    // Append to memeMuseum and save
    memeMuseum.appendChild(memeGalleryDiv);
    saveMemes();
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

  // Save memes to localStorage    
  function saveMemes() {
    //  console.log("Meme has been frozen in carbonite!");
    let memes = [];
  
    document.querySelectorAll('.meme-gallery').forEach(meme => {
      const memeImage = meme.querySelector('.meme-image');
      const topText = meme.querySelector('.top-text');
      const bottomText = meme.querySelector('.bottom-text');

      // Skip any incomplete meme (e.g., no image, top or bottom text)
      if(!memeImage || !topText || !bottomText) return;

      memes.push(`${memeImage.src}|${topText.innerText}|${bottomText.innerText}`);
    });
    localStorage.setItem('savedMemes', memes.join(';;;'));
    }
  
  // Load memes from localStorage
  function loadMemes() {
    const savedMemes = localStorage.getItem('savedMemes');

    if(savedMemes) {
      const memesArray = savedMemes.split(';;;');

      memesArray.forEach(memeData => {
        const memeParts = memeData.split('|');
        if(memeParts.length === 3) {
          createMeme(memeParts[0], memeParts[1], memeParts[2]);
        }
      });
    }
  }

  memeForm.addEventListener("submit", memeFormSubmit);
  loadMemes();
});