# Custom React Rendering

This project demonstrates how React works internally by manually rendering a React-like element to the DOM.

## How It Works

1. We define a `reactElement` object that mimics a React component.
   - It contains:
     - `type`: The HTML tag (e.g., `'a'` for an anchor tag).
     - `props`: Attributes like `href` and `target`.
     - `children`: The text inside the element.

2. The `customRender` function creates a real DOM element from `reactElement`:
   - `document.createElement(reactElement.type)`: Creates the HTML tag.
   - `innerHTML`: Adds the text inside the tag.
   - A `for...in` loop sets all attributes dynamically.
   - The final element is appended to `#root`.

3. The script runs automatically when the page loads, rendering the element inside `#root`.

## Example Output

When you open `index.html` in a browser, it creates:

```html
<a href="https://www.google.com/" target="_blank">
  Take me to Google!
</a>
```

Clicking the link takes you to Google in a new tab.

## Learning Takeaway
This example shows:

- How React converts an object into real DOM elements.
- The difference between React’s virtual DOM and direct DOM manipulation.
- How React's render method works behind the scenes.
