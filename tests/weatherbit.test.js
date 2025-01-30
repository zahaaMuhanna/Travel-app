import axios from "axios";

jest.mock("axios");

describe("Weatherbit API", () => {
  test("should fetch weather data for coordinates", async () => {
    const lat = "51.509865";
    const lon = "-0.118092";
    const mockResponse = {
      data: {
        data: [
          {
            temp: 15,
            weather: {
              description: "Partly cloudy",
            },
          },
        ],
      },
    };

    axios.get.mockResolvedValue(mockResponse);

    const response = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=testkey`);
    expect(response.data.data[0].temp).toBe(15);
    expect(response.data.data[0].weather.description).toBe("Partly cloudy");
  });
});
