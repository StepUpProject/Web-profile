const User = require("../models/user");

module.exports.register = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;
    const user = new User({ name, email, username });
    await User.register(user, password);
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports.login = async (req, res) => {
  req.flash("success_msg", "Login Success bang");
  // const data = req.body;
  // console.log(data);
};

module.exports.logout = (req, res) => {
  req.logout();
  req.flash("success_msg", "Logout Success");
  res.redirect("/login");
}