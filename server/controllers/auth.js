const User = require("../models/user");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({id},"StepUp Projects",{
    expiresIn: 3 * 24 * 60 * 60,

  })
}

const errorHandler = (err) => {
  let errors = { email: "", password: "" };
  
  if(err.message === "Email is not registered"){
    errors.email = "Email is not registered";
  }

  if(err.message === "Password is incorrect"){
    errors.password = "Password is incorrect";
  }

  if(err.code === 11000) {
    errors.email = "Email already exists";
    return errors;
  }
  
  if(err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  return errors;
}
return errors;
}

module.exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password })
    const token = createToken(user._id)

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly : false,
      maxAge: 3 * 24 * 60 * 60 * 1000
    });
    res.status(201).json({ user: user._id, created: true, token: token });
  } catch (error) {
    res.status(400).json({ error, created: false });
    console.log(error)
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.login(email, password)
    const token = createToken(user._id)

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly : false,
      maxAge: 3 * 24 * 60 * 60 * 1000
    });
    res.status(200).json({ user: user._id, created: true, token: token });
  } catch (error) {
    const errors = errorHandler(error)
    res.status(400).json({ errors , created: false });
  }
};
module.exports.logout = async (req, res) => {
  const token = req.cookies.jwt;
  console.log(token);
  try {
    if (token) {
      res.clearCookie("jwt", {
      });
      return res.status(200).json({ loggedOut: true });
    } else {
      return res.status(200).json({ loggedOut: false });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message, loggedOut: false });
  }
};

