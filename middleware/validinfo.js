// we created this middleware for checking if the email is valid or not

module.exports = function(req, res, next) {
    const { name, email, password } = req.body;
  
    function validEmail(userEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }
  
    if (req.path === "/register") {
      console.log(!email.length);
      if (![email, name, password].every(Boolean)) { // this for checking if there's no empty values
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(email)) { // this for checking if the email is valid
        return res.status(401).json("Invalid Email");
      }

    } else if (req.path === "/login") {
      if (![email, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.status(401).json("Invalid Email");
      }
    }
  
    next(); // if everything is okay, it goes on of the route
  };