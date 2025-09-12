// .env من  environment variables الملف ده يقرا ال 

// config/env.js
export const ENV = {
API_URL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
APP_NAME: process.env.REACT_APP_APP_NAME || "MyReactApp",
}