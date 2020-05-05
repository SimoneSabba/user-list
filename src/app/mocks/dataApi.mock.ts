import { ApiResponse } from '../interfaces/api-response.interface';

export const mockResponse: ApiResponse = {
  "list": {
    "pagination": {
      "count": 4,
      "hasMoreItems": false,
      "totalItems": 4,
      "skipCount": 0,
      "maxItems": 100
    },
    "entries": [
      {
        "entry": {
          "firstName": "Luke Skywalker",
          "emailNotificationsEnabled": true,
          "company": {
            "organization": "Star Wars",
            "address1": "Galaxy Far Far Away",
            "address2": "Tatooine",
            "address3": "",
            "postcode": "STW"
          },
          "id": "1",
          "enabled": true
        }
      },
      {
        "entry": {
          "firstName": "Leia Skywalker",
          "emailNotificationsEnabled": true,
          "company": {
            "organization": "Moresby, Garland and Wedge",
            "address1": "Galaxy Far Far Away",
            "address2": "Alderaan",
            "address3": "",
            "postcode": "STW"
          },
          "id": "2",
          "enabled": true
        }
      },
      {
        "entry": {
          "firstName": "Han Solo",
          "emailNotificationsEnabled": true,
          "company": {
            "organization": "Moresby, Garland and Wedge",
            "address1": "Galaxy Far Far Away",
            "address2": "Millenium Falcon",
            "address3": "",
            "postcode": "STW"
          },
          "id": "3",
          "enabled": false
        }
      },

    ]
  }
}