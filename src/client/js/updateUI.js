export function updateUI(data) {
    const tripInfo = document.getElementById("trip-info");
  
    // Check if the necessary data exists
    if (!data || !data.destination || !data.weather || !data.date || !data.image) {
      tripInfo.innerHTML = `<p>Failed to retrieve trip information. Please try again.</p>`;
      return;
    }
  
    // Update the DOM with the trip information
    tripInfo.innerHTML = `
      <h2>Your Trip to ${data.destination}</h2>
      <p><strong>Departure Date:</strong> ${data.date}</p>
      <p><strong>Weather:</strong> ${data.weather.description}, Temp: ${data.weather.temp}°C</p>
      <img src="${data.image}" alt="Image of ${data.destination}" class="trip-image">
    `;
  }
  