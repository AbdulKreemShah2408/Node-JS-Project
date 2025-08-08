const { validateToken } = require("../service/authentication");

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];

    if (!tokenCookieValue) {
      req.user = null;
      return next(); // ✅ exit early
    }

    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload;
    } catch (error) {
      console.error("Invalid token:", error.message); // helpful log
      req.user = null; // ✅ fallback
    }

   return next();
  };
}

module.exports = {
  checkForAuthenticationCookie,
};
