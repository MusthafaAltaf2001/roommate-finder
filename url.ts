const prod = {
  url: {
    BASE_URL: "https://roommate-finder-backend.onrender.com",
    AUTH_URL: "https://roommate-finder-backend.onrender.com",
  },
};

const dev = {
  url: {
    BASE_URL: "http://localhost:3001",
    AUTH_URL: "http://localhost:3001",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
