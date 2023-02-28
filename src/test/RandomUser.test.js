import { fireEvent, render, screen } from "@testing-library/react";
import { RandomUser } from "components/RandomUser/RandomUser";
import axios from "axios";

jest.mock("axios");

describe("<RandomUser/>", () => {
  it("loads a user", async () => {
    render(<RandomUser />);

    axios.get.mockResolvedValueOnce({
      data: FAKE_USER_RESPONSE_1,
    });

    const button = screen.getByRole("button");
    fireEvent.click(button);
    let titleEl = await screen.findByText("Bilbo Baggins");
    expect(titleEl.textContent).toBeDefined();

    axios.get.mockResolvedValueOnce({
      data: FAKE_USER_RESPONSE_2,
    });
    fireEvent.click(button);
    let titleEl2 = await screen.findByText("Cod Iku");
    expect(titleEl2.textContent).toBeDefined();
  });
});

const FAKE_USER_RESPONSE_1 = {
  results: [
    {
      gender: "female",
      name: {
        title: "Mister",
        first: "Bilbo",
        last: "Baggins",
      },
      location: {
        street: {
          number: 5989,
          name: "Mechelininkatu",
        },
        city: "Kihniö",
        state: "South Karelia",
        country: "Finland",
        postcode: 26106,
        coordinates: {
          latitude: "-23.2805",
          longitude: "4.1855",
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "neea.nikula@example.com",
      login: {
        uuid: "aa18964b-2932-47eb-8383-2966be464a42",
        username: "bluedog629",
        password: "kkkkk",
        salt: "JojE5Srm",
        md5: "4600313dcb12828f066a3753727f45f8",
        sha1: "759e7f6ab800fe6b4db01786b28e9c86e0b862bf",
        sha256:
          "f47a32dbfa5cb9a6f584ac63203570feb55821602a5b02cf292becc1e88fb50a",
      },
      dob: {
        date: "1969-04-22T02:04:51.568Z",
        age: 53,
      },
      registered: {
        date: "2010-01-04T03:38:54.922Z",
        age: 13,
      },
      phone: "09-233-631",
      cell: "049-202-48-72",
      id: {
        name: "HETU",
        value: "NaNNA446undefined",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/67.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/67.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
      },
      nat: "FI",
    },
  ],
};

const FAKE_USER_RESPONSE_2 = {
  results: [
    {
      gender: "Male",
      name: {
        title: "Mister",
        first: "Cod",
        last: "Iku",
      },
      location: {
        street: {
          number: 5989,
          name: "Mechelininkatu",
        },
        city: "Kihniö",
        state: "South Karelia",
        country: "Finland",
        postcode: 26106,
        coordinates: {
          latitude: "-23.2805",
          longitude: "4.1855",
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "neea.nikula@example.com",
      login: {
        uuid: "aa18964b-2932-47eb-8383-2966be464a42",
        username: "bluedog629",
        password: "kkkkk",
        salt: "JojE5Srm",
        md5: "4600313dcb12828f066a3753727f45f8",
        sha1: "759e7f6ab800fe6b4db01786b28e9c86e0b862bf",
        sha256:
          "f47a32dbfa5cb9a6f584ac63203570feb55821602a5b02cf292becc1e88fb50a",
      },
      dob: {
        date: "1969-04-22T02:04:51.568Z",
        age: 53,
      },
      registered: {
        date: "2010-01-04T03:38:54.922Z",
        age: 13,
      },
      phone: "09-233-631",
      cell: "049-202-48-72",
      id: {
        name: "HETU",
        value: "NaNNA446undefined",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/67.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/67.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
      },
      nat: "FI",
    },
  ],
};
