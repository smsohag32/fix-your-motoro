// middleware.js
export function middleware(req) {
  // Split the cookie string into an array of individual cookies
  const cookiesArray = req.headers.cookie ? req.headers.cookie.split(";") : [];

  // Initialize a variable to store the token value
  let tokenValue = null;

  // Loop through the cookies to find the "token" cookie
  for (const cookie of cookiesArray) {
    const [name, value] = cookie.trim().split("=");

    // Check if the current cookie is the "token" cookie
    if (name === "token") {
      tokenValue = value;
      break; // Exit the loop once the "token" cookie is found
    }
  }
  return;
}
