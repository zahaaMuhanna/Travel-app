export async function handleSubmit(event) {
    event.preventDefault();

    const destination = document.getElementById("destination").value;
    const date = document.getElementById("departure-date").value;

    const response = await fetch("http://localhost:8081/addTrip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ destination, date }),
    });

    const data = await response.json();
    updateUI(data);
}

function updateUI(data) {
    const tripInfo = document.getElementById("trip-info");
  
    if (!data || !data.weather) {
      tripInfo.innerHTML = `<p>Error: Unable to retrieve weather data. Please try again later.</p>`;
      console.error("Invalid data received:", data);
      return;
    }
  
    tripInfo.innerHTML = `
      <h2>Your Trip to ${data.destination}</h2>
      <p>Departure Date: ${data.date}</p>
      <p>Weather: ${data.weather.description || "No description available"}, Temp: ${data.weather.temp || "N/A"}°C</p>
      <img src="${data.image || "https://via.placeholder.com/300"}" alt="${data.destination}">
    `;
  }
