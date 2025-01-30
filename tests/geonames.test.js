import axios from "axios";

jest.mock("axios");

describe("Geonames API", () => {
  test("should fetch geographical data for a destination", async () => {
    const destination = "London";
    const mockResponse = {
      data: {
        geonames: [
          {
            lat: "51.509865",
            lng: "-0.118092",
            countryName: "United Kingdom",
          },
        ],
      },
    };

    axios.get.mockResolvedValue(mockResponse);

    const response = await axios.get(`http://api.geonames.org/searchJSON?q=${destination}&maxRows=1&username=testuser`);
    expect(response.data.geonames[0].lat).toBe("51.509865");
    expect(response.data.geonames[0].lng).toBe("-0.118092");
    expect(response.data.geonames[0].countryName).toBe("United Kingdom");
  });
});
