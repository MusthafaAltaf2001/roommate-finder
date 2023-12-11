const prod = {
  url: {
    BASE_URL: "https://my-heroku-app.herokuapp.com/api/v1/",
    AUTH_URL: "https://my-heroku-app.herokuapp.com/",
  },
};

const dev = {
  url: {
    BASE_URL: "http://localhost:3001/api/v1/",
    AUTH_URL: "http://localhost:3001/",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
