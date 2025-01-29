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
   ```

## API Credentials

### APIs Used

#### Geonames API
- **Purpose:** Provides geographical coordinates (latitude and longitude) for the destination.
- **Documentation:** [Geonames API Documentation](http://www.geonames.org/export/web-services.html)

#### Weatherbit API
- **Purpose:** Fetches weather forecasts for the specified location and date.
- **Documentation:** [Weatherbit API Documentation](https://www.weatherbit.io/api)

#### Pixabay API
- **Purpose:** Supplies destination-related images.
- **Documentation:** [Pixabay API Documentation](https://pixabay.com/api/docs/)

---

## Technologies Used

### Frontend
- **HTML5:** Semantic structure.
- **SCSS:** Styling with variables, mixins, and responsive design.
- **JavaScript (ES6):** Dynamic UI and API integrations.

### Backend
- **Node.js:** Server-side runtime.
- **Express.js:** Lightweight server framework.

### Build Tools
- **Webpack:** Module bundler and asset management.
- **Babel:** Transpiling modern JavaScript.

---

## Development Strategy

### Phase 1: Project Setup
- Initialize the project using `npm`.
- Configure Webpack to handle SCSS, JavaScript, and asset bundling.

### Phase 2: API Integration
- Integrate **Geonames API** to fetch location data.
- Integrate **Weatherbit API** to retrieve weather information.
- Integrate **Pixabay API** to get images for destinations.

### Phase 3: Frontend Development
- Build a responsive UI using **HTML** and **SCSS**.
- Dynamically update the UI with data retrieved from APIs.

### Phase 4: Testing and Optimization
- Test API responses for valid and invalid inputs.
- Optimize Webpack configuration for production builds.

### Phase 5: Deployment
- Prepare the project for deployment by bundling assets and ensuring environment variables are handled securely.

---

## Features
- Enter a destination and departure date.
- Get weather information for the destination.
- View destination-related images.
- Responsive design for an enhanced user experience.

