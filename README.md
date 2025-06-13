# Game Landing Page

This is a responsive landing page created to promote a fictional game. It includes sections for a hero banner, newsletter subscription, about the game, and a footer with navigation and social media links. The site adapts to various screen sizes including desktop, tablet, and mobile.

## Technologies Used

- HTML5  
- CSS3 (with custom fonts and responsive media queries)  
- JavaScript (Vanilla)

## Features

- Responsive design for phones, tablets, and desktops
- Sticky header that appears on scroll
- Mobile hamburger menu with click-to-close functionality
- Fog transition effect between sections
- Email newsletter subscription form
- Custom typography with `@font-face`
- Fixed footer with social icons and responsive layout

## Responsive Design

The page includes multiple media queries to support:
- Desktop (1366px and up)
- Tablet (600px to 1024px)
- Phone (below 768px)

Each layout adjusts typography, spacing, image sizes, and navigation style for optimal usability.

## How It Works

- `script.js` handles:
  - Making the header sticky when scrolling
  - Toggling the mobile menu visibility
  - Closing the menu when clicking outside of it
  - Adjusting padding to prevent footer overlap

- `styles.css` includes:
  - Layout and design styles for each section
  - Font definitions using `@font-face`
  - Color variables for easy customization
  - Animations like `floatUpDown` for the scroll indicator

## Setup Instructions

1. Clone or download the repository.
2. Make sure all fonts are placed correctly inside the `Fonts/` directory as referenced in `styles.css`.
3. Open `index.html` in a modern web browser to view the site.

## Future Improvements

- Connect the newsletter form to a backend service or API
- Add scroll-based animations for improved visual effects
- Improve accessibility with ARIA attributes


