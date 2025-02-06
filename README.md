# Dank Meme Generator
> Mobile friendly meme creation tool.
![gif](https://github.com/aracope/meme-generator/blob/main/memgenerator.gif)

## Features
- Create Memes: Users can generate memes by either providing an image URL or uploading an image file.
- Text Overlay: Users can add both top and bottom text to their memes.
- Delete Memes: Each meme is created with a delete button, ('x'), to remove it from the gallery.
- Persistent Storage: Memes are saved in localStorage and reloaded when the page is refreshed.
- Validation: Ensures that users either upload an image or provide a URL (but not both).

## How It Works
  1. Event Listener: The script waits for the DOM to load before executing.
  2. Form Handling:
    - Prevents page reload on form submission.
    - Reads user input (image URL, file upload, top text, bottom text).
    - Ensures that only one image source (URL or file) is provided.
    - Converts uploaded images to data URLs for display.
  3. Meme Creation:
    - Generates an image element and overlays text.
    - Adds a delete button to remove memes from the "meme museum" and updates local storage.
    - Appends the meme to the "meme gallery" and updates local storage.
  4. Local Storage:
    - Saves memes in localStorage as a formatted string.
    - Loads saved memes on page refresh and recreates them.

## Future Enhancements
  - Utilize media queries to make a more aesthetic experience for computer users.
  - Validate whether the provided URL is a valid image link.
  - Add drag-and-drop functionality for a better user experience.
  - Allow users to edit memes after creation.
