# Scrolling Message Demo

A simple mini-project that displays a **scrolling message** on a webpage using **JavaScript**, with basic **HTML** and **CSS**.  

Demonstrates **DOM manipulation**, **arrays**, and **timed updates**.


## Demo

The message: <em><strong> ---THIS IS MY SCROLLING MSG BAR </em></strong> scrolls continuously inside a webpage element.

![Scrolling Message Screenshot](screenshot.png)  


## Project Structure

    scrolling_demo_1/
    ├── index.html        # Basic HTML structure
    ├── style.css         # Minimal styling for the message
    └── scrolling_demo.js # JavaScript logic for scrolling text


## How to Run

1. Clone or download this repository.  
2. Open `index.html` in your web browser.  
3. You should see the scrolling message in the designated display area.

## How It Works

- The message is stored as an array of characters.  
- Every 75ms, the first character is moved to the end of the array.  
- The HTML element with ID `message-display` is updated with the current array state.  
- This creates a continuous scrolling effect.

## Future Improvements

- Allow custom messages via an input field.  
- Adjust scroll speed dynamically.  
- Smooth scrolling animation with CSS transitions.  
- Add pause/resume controls.  

## License

Open source — feel free to copy, modify, and learn from this project.

