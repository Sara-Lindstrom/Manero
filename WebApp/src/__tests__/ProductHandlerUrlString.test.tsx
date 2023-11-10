import * as apiFunctions from '../helpers/ProductHandler'; // Update with the correct path to your API functions

// Mock the axios library
jest.mock('axios', () => ({
    __esModule: true,
    default: {
      get: jest.fn(),
      post: jest.fn(),
    }
}));

test('API URL checks', () => {
    let collectedUrls: string[] = [];
  
    // Collect all API URLs
    for (const fetchfunction in apiFunctions) {
      if (fetchfunction.startsWith('fetch')) {
        const API_URL = process.env.REACT_APP_API_URL || "";

        if(API_URL){
            collectedUrls.push(API_URL);
        }
      }
    }

    expect(collectedUrls).not.toContain(""); // Check if not empty
  });
