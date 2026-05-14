# Önfeledten Budapesten - Forgotten in Budapest

A personal love letter to Budapest through an interactive web experience. This project celebrates the history, culture, and memories of Hungary's capital city through multiple thematic pages, engaging stories, and user interaction. Created for a University Project.

## 📖 About the Project

"Önfeledten Budapesten" (Forgotten in Budapest) is a multi-page website dedicated to exploring Budapest from various perspectives. The project combines personal narratives with interactive elements to create an immersive experience about the city.

### Key Features

- **Interactive Navigation**: Browse through multiple themed pages
  - **Home Page (Kezdőlap)**: Introduction and user story submission form
  - **Transport (Közlekedés)**: Explore Budapest's public transportation system
  - **Program Map (Programtérkép)**: Discover events and locations throughout the city (personal recommendations)
  - **History (Kialakulása)**: Learn about Budapest's formation and development

- **User Stories**: Submit your favorite Budapest memories through an interactive form
- **Accessibility Features**: 
  - Skip-to-content navigation link
  - High contrast theme option for better readability
  - Responsive design for all device sizes

- **Visual Elements**: Custom pixel art graphics and images throughout the site

## 🛠️ Tech Stack

The project is built with:
- **HTML** (81.8%) - Semantic structure and content
- **CSS** (17.4%) - Styling and layout (responsive design with Bootstrap)
- **JavaScript** (0.8%) - Interactive functionality and theme switching

### Dependencies

- **Bootstrap 5.0.2** - Responsive grid system and UI components

## 📁 Project Structure

```
onfeledten-budapesten/
├── index.html              # Home page with introduction and story submission form
├── kozlekedes.html         # Transportation page
├── programterkep.html      # Program/events map page
├── kialakulasa.html        # History/formation page
├── video.xhtml             # Video content (XHTML format)
├── style.css               # Main stylesheet
├── nagyb.css               # Alternative high-contrast stylesheet
├── script.js               # JavaScript functionality
├── fonts/                  # Custom font files
└── media/                  # Image and graphic assets
    ├── hajo.png           # Pixel boat illustration
    ├── 01_01.jpg          # Boráros Square at sunset
    └── en.png             # Profile illustration
```

## 🎯 Features in Detail

### 1. Story Submission Form
Users can share their favorite Budapest memories by filling out a form that captures:
- Name and email
- Location
- Mode of transportation used
- Detailed description of the experience

Stories are sent via email to the creator for preservation.

### 2. Transport Quiz
An interactive quiz on the home page helps users discover which Budapest public transport vehicle matches their personality, linking to more information on the Transport page.

### 3. Accessibility Options
- **Skip to Content Link**: Quick navigation to main content for screen reader users
- **High Contrast Theme**: Toggle between standard and high-contrast (nagyb.css) stylesheets for improved readability
- **Responsive Design**: Mobile-friendly layout using Bootstrap's responsive grid system
- **Semantic HTML**: Proper use of semantic elements for better accessibility

### 4. Thematic Content
The site includes personal narratives, such as the "Fülesbagoly" (Owl) story, which weaves personal memories with the city's identity.

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server required - this is a static site

### Installation

1. Clone the repository:
```bash
git clone https://github.com/csesztii/onfeledten-budapesten.git
```

2. Open `index.html` in your web browser

### Usage

- **Navigate** between sections using the top navigation bar
- **Submit stories** through the form on the home page
- **Toggle accessibility theme** using the button in the footer
- **View content** on mobile devices with full responsiveness

## 🎨 Customization

### Styling
- **Main stylesheet**: `style.css` - Contains all standard styles
- **Accessibility stylesheet**: `nagyb.css` - High contrast alternative with larger text
- **Bootstrap**: Customizable through CSS overrides

### Adding Content
1. Create new `.html` files for additional pages
2. Add navigation links in the `<nav>` element across all pages
3. Link custom stylesheets in the `<head>` section
4. Place media assets in the `media/` directory

### Changing Colors and Fonts
Edit the CSS variables and color values in:
- `style.css` - Lines containing color definitions
- `nagyb.css` - High contrast color scheme

## 📱 Responsive Design

The site uses Bootstrap's responsive grid system with breakpoints:
- **Extra small (xs)**: < 576px
- **Small (sm)**: ≥ 576px
- **Medium (md)**: ≥ 768px
- **Large (lg)**: ≥ 992px
- **Extra large (xl)**: ≥ 1200px

## 🔗 Links & Resources

- **Creator**: Molnár Eszter ([mol.eszter04@gmail.com](mailto:mol.eszter04@gmail.com))
- **Related Playlist**: [Spotify Playlist](https://open.spotify.com/playlist/2W4whdVtq26Lt2WSVCji4I)
- **Story Sources**: 100 szóban Budapest 2020

### GitHub Pages Deployment
The repository is already configured with GitHub Pages enabled. Visit:
`https://csesztii.github.io/onfeledten-budapesten/`

## 📄 License

This project is a personal creation by Molnár Eszter. Please check with the creator before using content or code for other purposes.

## 🤝 Contributing

This is a personal project. For suggestions or feedback, you're welcome to reach out to the creator at [mol.eszter04@gmail.com](mailto:mol.eszter04@gmail.com).

## 🐛 Known Limitations

- The form submission uses `mailto:` which may not work reliably on all systems
- Video content is in XHTML format (video.xhtml) - ensure compatibility with your use case
- The high contrast theme button functionality requires JavaScript enabled

## 📚 Resources Used

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/)
- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Created with ❤️ for Budapest** | Last Updated: 2026-05-14
