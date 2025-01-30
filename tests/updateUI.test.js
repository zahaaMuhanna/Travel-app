import { updateUI } from "../src/client/js/updateUI.js";

describe("Update UI Functionality", () => {
  test("should update the DOM with trip data", () => {
    // Mock the DOM
    document.body.innerHTML = `
      <div id="trip-info"></div>
    `;

    // Mock data
    const data = {
      destination: "London",
      date: "2025-02-07",
      weather: {
        description: "Sunny",
        temp: 20,
      },
      image: "https://example.com/london.jpg",
    };

    // Call the function
    updateUI(data);

    // Assert the DOM changes
    const tripInfo = document.getElementById("trip-info");
    expect(tripInfo.innerHTML).toContain("London");
    expect(tripInfo.innerHTML).toContain("2025-02-07");
    expect(tripInfo.innerHTML).toContain("Sunny");
    expect(tripInfo.innerHTML).toContain("20");
    expect(tripInfo.innerHTML).toContain('<img src="https://example.com/london.jpg"');
  });
});
