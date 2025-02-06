document.addEventListener("DOMContentLoaded", () => {
  const memeForm = document.querySelector('.meme-input-form');
  const memeMuseum = document.querySelector('.meme-museum');

  // Helper function to create meme element with conent and class
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
    //**Future: Function that determines if src is actually a URL? */

    // Create meme-gallery div and image
    const memeGalleryDiv = createMemeElement('div', 'meme-gallery')
    const memeImage = createMemeElement('img', 'meme-image')
    memeImage.src = imageUrl;
    memeImage.alt = "Image from URL input.";

    // Create top and bottom text divs
    const topTextDiv = createMemeElement('div', 'top-text', topText);
    const bottomTextDiv = createMemeElement('div', 'bottom-text', bottomText);

    // Create 'x' to delete a created meme
    const deleteSpan = createMemeElement('span', 'delete-meme', '\u00d7');

    // Event listener on span to delete created meme
    deleteSpan.addEventListener("click", () => {
      memeMuseum.removeChild(memeGalleryDiv); // Removes meme from the museum
      saveMemes(); // Saves to localStorage
    });

    // Append elements to the memeGalleryDiv
    memeGalleryDiv.append(memeImage, topTextDiv, bottomTextDiv, deleteSpan);

    // Append memeGalleryDiv to memeMuseum and save to localStorage
    memeMuseum.appendChild(memeGalleryDiv);
    saveMemes();
  }

  // Meme form submission
  function memeFormSubmit(event) {
    event.preventDefault(); // Prevents reloading of page

    // Get values from form input fields
    const imageUrl = document.getElementById('img-url').value;
    const topText = document.getElementById('top-text-input').value;
    const bottomText = document.getElementById('bottom-text-input').value;
    const imageUpload = document.getElementById('img-file').files[0];
    
    // Check if both an image URL and a file upload are provided
    if (imageUrl && imageUpload) {
      alert("Please provide only one image source: either an image URL or an uploaded file, not both.");
      memeForm.reset();
      return;
    } 

    if (imageUpload) {
      // If file is uploaded, read it as a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        createMeme(reader.result, topText, bottomText);
      };
      reader.readAsDataURL(imageUpload); // Convert image to data URL
    } else if (imageUrl) {
      // If URL is provided, use it directly
      createMeme(imageUrl, topText, bottomText);
    } else {
      alert("Please provide either an image URL or an uploaded image.");
      return;
    }

    memeForm.reset(); // Reset form after submission
  }

  // Save created memes to localStorage    
  function saveMemes() {
    let memes = [];

    // Loop through all meme elements
    document.querySelectorAll('.meme-gallery').forEach(meme => {
      const memeImage = meme.querySelector('.meme-image');
      const topText = meme.querySelector('.top-text');
      const bottomText = meme.querySelector('.bottom-text');

      // Skip any incomplete meme (e.g., no image, top or bottom text)
      if (!memeImage || !topText || !bottomText) return;

      // Store meme details as a string, format: 'imageUrl|topText|bottomText'
      memes.push(`${memeImage.src}|${topText.innerText}|${bottomText.innerText}`);
    });
    // Save memes to localStorage as strings. Separate by ';;;' as a delimiter to indicate beginning/end of individual strings, unlikely to be used by user
    localStorage.setItem('savedMemes', memes.join(';;;'));
  }

  // Load memes from localStorage
  function loadMemes() {
    const savedMemes = localStorage.getItem('savedMemes');

    if (savedMemes) {
      const memesArray = savedMemes.split(';;;');

      memesArray.forEach(memeData => {
        const memeParts = memeData.split('|');
        if (memeParts.length === 3) {
          // Recreates memes from the 3 parts of saved data
          createMeme(memeParts[0], memeParts[1], memeParts[2]);
        }
      });
    }
  }
  // Event listener for form submission button
  memeForm.addEventListener("submit", memeFormSubmit);

  // Loads saved memes when page is loaded
  loadMemes();
});