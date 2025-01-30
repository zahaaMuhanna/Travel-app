import axios from "axios";

jest.mock("axios");

describe("Pixabay API", () => {
  test("should fetch images for a destination", async () => {
    const destination = "London";
    const mockResponse = {
      data: {
        hits: [
          {
            webformatURL: "https://example.com/london.jpg",
          },
        ],
      },
    };

    axios.get.mockResolvedValue(mockResponse);

    const response = await axios.get(`https://pixabay.com/api/?key=testkey&q=${destination}&image_type=photo`);
    expect(response.data.hits[0].webformatURL).toBe("https://example.com/london.jpg");
  });
});
