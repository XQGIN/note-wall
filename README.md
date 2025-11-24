# Note Wall - 温馨提醒墙

[中文文档](README_CN.md) | [English Documentation](README.md)

A beautiful, interactive web application that displays positive and encouraging messages in a visually stunning glass-morphism interface.

## ✨ Features

- **Glass Morphism Design**: Modern glass-effect windows with smooth animations
- **Dynamic Background**: Gradient background with continuous color shifting
- **Responsive Design**: Perfectly adapts to desktop, tablet, and mobile devices
- **Auto Theme Switching**: Automatically switches between day and night themes based on time
- **Interactive Elements**: Mouse-following light effects and floating animations
- **Positive Messages**: 50+ encouraging and uplifting messages in Chinese
- **Touch Friendly**: Optimized for touch devices with appropriate sizing

## 🚀 Quick Start

### Method 1: Direct File Access
```bash
# Clone the repository
git clone https://github.com/XQGIN/note-wall.git

# Open the main file
open note-wall/index.html
```

### Method 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000/note-wall/` in your browser.

## 🎮 How to Use

1. **Start the Experience**: Click the "你准备好了吗？" (Are you ready?) button
2. **Watch the Magic**: 150+ glass windows will appear with positive messages
3. **Interactive Features**:
   - **Left Click**: Start/restart the note wall
   - **Right Click**: Toggle between day/night themes
   - **Mouse Movement**: Glass windows react to mouse position
   - **Click Windows**: Close individual message windows

## 📱 Responsive Design

The application automatically adapts to different screen sizes:

- **Desktop** (>768px): Full glass-morphism experience
- **Tablet** (480px-768px): Optimized for touch interaction
- **Mobile** (320px-480px): Compact layout for small screens
- **Ultra Small** (<320px): Minimalist design for tiny screens

## 🎨 Theme System

### Automatic Theme Switching
- **Day Theme** (6:00-18:00): Bright, colorful gradients
- **Night Theme** (18:00-6:00): Dark, calming gradients

### Manual Control
- Right-click the main button to toggle themes
- Theme preferences are saved in localStorage

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript**: No external dependencies
- **CSS Variables**: Dynamic theming system
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Animations**: Smooth transitions and effects
- **Local Storage**: Theme preference persistence

## 📁 Project Structure

```
note-wall/
├── index.html          # Main application file
├── icon/
│   └── heart.png       # Favicon
├── imgs/
│   └── iphone_17_pro_image.jpg  # Background image (optional)
└── README.md           # This file
```

## 🌟 Features in Detail

### Visual Effects
- **Glass Morphism**: Backdrop-filter based glass effects
- **Gradient Animation**: Continuous background color shifting
- **Floating Animation**: Subtle floating motion for windows
- **Mouse Interaction**: Dynamic lighting effects
- **Smooth Transitions**: CSS-based animations

### User Experience
- **Progressive Enhancement**: Works on all modern browsers
- **Performance Optimized**: Efficient rendering for smooth experience
- **Accessibility**: Proper semantic HTML structure
- **Touch Support**: Optimized for mobile devices

## 🐛 Browser Compatibility

- ✅ Chrome 76+
- ✅ Firefox 70+
- ✅ Safari 12.1+
- ✅ Edge 79+

*Note: Glass morphism effects require browsers that support `backdrop-filter`.*

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by modern glass-morphism design trends
- Built with pure web technologies
- Special thanks to all the positive message contributors

---

**Made with ❤️ for spreading positivity and encouragement**