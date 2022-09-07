//const data = axios(
//  `https://somewebsite.com/getData?secret_api_key=${process.env.SECRET_API_KEY}`
//);

import dotenv from "dotenv";

dotenv.config();

console.log(process.env.SECRET_API_KEY, process.env.URL);
