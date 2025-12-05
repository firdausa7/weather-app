<img width="3024" height="1652" alt="image" src="https://github.com/user-attachments/assets/79211790-6a94-42c9-bf12-59414f81fb0d" />

### WeatherSphere 🌤️

A beautiful, responsive weather application with stunning visuals and smooth animations. Get real-time weather forecasts for any city or your current location with an immersive user experience.

https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1965&q=80

✨ Features

· 🌍 Location-Based Weather: Get weather for your current location using geolocation
· 🔍 City Search: Search for weather in any city worldwide
· 🎨 Dynamic Backgrounds: Background changes based on weather conditions
· 📊 Detailed Forecast: Current weather + 5-day forecast
· 💫 Beautiful UI: Glass morphism design with smooth animations
· 📱 Fully Responsive: Works perfectly on desktop, tablet, and mobile
· ⚡ Real-Time Updates: Get the latest weather data
· 🌈 Weather Details: Includes humidity, wind speed, pressure, visibility, and more

🚀 Live Demo

[Add your live demo link here]

🛠️ Installation

1. Clone the repository

bash
git clone https://github.com/yourusername/weathersphere.git
cd weathersphere


1. Get an API Key
   · Visit OpenWeatherMap
   · Sign up for a free account
   · Get your API key from the dashboard
2. Configure API Key
   · Open app.js
   · Replace the apiKey variable with your own API key:
   javascript
   const apiKey = "YOUR_API_KEY_HERE";
   
3. Open the Application
   · Simply open index.html in your web browser
   · Or use a local server for better performance

📁 Project Structure


weathersphere/
│
├── index.html          # Main HTML file with styles
├── app.js              # Main JavaScript application logic
└── README.md           # This file


🎯 Usage

1. Search by City
   · Type a city name in the search box
   · Click "Search" or press Enter
2. Use Your Location
   · Click the "My Location" button
   · Allow location access when prompted
3. View Weather Information
   · Current temperature and conditions
   · 5-day forecast
   · Detailed weather metrics
   · Dynamic background based on weather

🎨 Customization

Change Background Images

Modify the updateBackground function in app.js to use your own images:

javascript
case 'clear':
    gradient = 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("YOUR_IMAGE_URL_HERE")';
    break;


Customize Colors

Edit the CSS in index.html to match your brand:

css
.glass {
    background: rgba(255, 255, 255, 0.1); /* Adjust opacity */
    backdrop-filter: blur(10px); /* Adjust blur effect */
}


Add New Weather Conditions

Extend the updateBackground function to handle additional weather conditions:

javascript
case 'fog':
case 'mist':
    gradient = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("FOG_IMAGE_URL")';
    break;


🔧 API Reference

This application uses the OpenWeatherMap API:

· Current Weather: https://api.openweathermap.org/data/2.5/weather
· 5-Day Forecast: https://api.openweathermap.org/data/2.5/forecast

API Response Example

json
{
    "weather": [{
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
    }],
    "main": {
        "temp": 22.5,
        "feels_like": 23.1,
        "humidity": 65,
        "pressure": 1015
    },
    "wind": {
        "speed": 4.1
    },
    "name": "London",
    "sys": {
        "country": "GB"
    }
}


🌐 Browser Support

1. Supported Browsers:
   · Chrome 60+
   · Firefox 55+
   · Safari 11+
   · Edge 79+
2. Required Features:
   · ES6 JavaScript support
   · Fetch API
   · Geolocation API
   · CSS Grid & Flexbox

🚫 Limitations

1. API Rate Limits: OpenWeatherMap free tier has 60 calls/minute limit
2. Location Accuracy: Geolocation accuracy depends on device and browser settings
3. Weather Icons: Uses OpenWeatherMap's icon set
4. No Backend: All API calls are made directly from the client

📝 Troubleshooting

Common Issues

1. Weather Not Loading
   · Check your internet connection
   · Verify your API key is valid
   · Check browser console for errors (F12 → Console)
2. Location Not Working
   · Ensure location services are enabled
   · Check browser permissions
   · Try searching for a city instead
3. Blank Screen
   · Check JavaScript is enabled in browser
   · Verify all files are in the same directory
   · Check for CORS errors in console

Console Error Messages

· 401 Unauthorized: Invalid API key
· 404 Not Found: City not found
· 429 Too Many Requests: API rate limit exceeded

🚀 Future Enhancements

Planned features for future releases:

· 🌙 Dark/Light mode toggle
· 📍 Save favorite cities
· 📈 Weather graphs and charts
· 🌡️ Temperature unit toggle (C/F)
· 🗺️ Interactive weather map
· 📱 PWA support
· 🌍 Multiple language support
· 📅 Historical weather data
· ⚡ Offline mode with cached data

🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch

bash
git checkout -b feature/amazing-feature


1. Commit your changes

bash
git commit -m 'Add some amazing feature'


1. Push to the branch

bash
git push origin feature/amazing-feature


1. Open a Pull Request

Development Guidelines

· Follow existing code style
· Add comments for complex logic
· Test changes on multiple devices
· Update documentation as needed

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments

· OpenWeatherMap for providing the weather API
· Unsplash for beautiful background images
· FontAwesome for icons
· Tailwind CSS for utility-first CSS framework
· Google Fonts for the Poppins font family

📧 Contact

Your Name - @yourtwitter - email@example.com

Project Link: https://github.com/yourusername/weathersphere

⭐ Support

If you like this project, please give it a ⭐ on GitHub!

---

Happy Weather Tracking! ☀️🌧️⛅❄️

Made with ❤️ for weather by FIRDAUSA SALAT
