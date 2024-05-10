require("dotenv").config();
module.exports = {
  deserializeUserCustom: (req, res, next) => {
    try {
      //google auth
      console.log(req.session);
      if (req.session && req.session.passport && req.session.passport.user) {
        console.log("user found");
        req.user = req.session.passport.user;
        console.log(req.session.passport, "fromm midleware");
        return next();
      }
      //write else if for local strategy
      else {
        console.log("returned from this");
        next();
      }
    } catch (e) {
      next(e);
    }
  },
};
