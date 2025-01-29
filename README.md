# Travel App

A web application that helps users plan their travel by providing weather forecasts, destination images, and useful details about their chosen destination.

The Travel App allows users to enter a destination and departure date, and it retrieves weather data, destination information, and relevant images using various APIs. This project demonstrates modern web development techniques, including the use of Webpack, SCSS, and JavaScript, and follows a structured development strategy.

---

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine.
- Git installed for version control.

### Steps to Set Up the Project
1. **Clone the Repository**
   ```bash
   git clone https://github.com/zahaaMuhanna/Travel-app.git
   cd Travel-app

2. **Install Dependencies** Install all required Node.js dependencies:
   ```bash
   npm install

3- **Set Up API Credentials** Create a .env file in the root directory with the following content:
   ```bash
   GEONAMES_USER=YourGeonamesUsername
   WEATHERBIT_KEY=YourWeatherbitAPIKey
   PIXABAY_KEY=YourPixabayAPIKey
   ```

4- **Build the Project** Compile SCSS and bundle JavaScript using Webpack:
   ```bash
   npm run build
   ```

5- **Run the Development Server** Start the development server:
   ```bash
   npm start
   ```

6- **Access the Application** Open your browser and go to:
   ```bash
   http://localhost:8082

