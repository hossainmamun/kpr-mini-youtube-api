const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

// authentication
const checkAuthentication = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "authorization token is required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, "goTO_maRiYAnnATraCE_keyS");
    req.user = await userModel.findOne({ _id }).select("_id");
    next();
  } catch (err) {
    res.status(401).json({ error: "Request is not Authorize" });
  }
};

// export module to videoRouter.js
module.exports = checkAuthentication;
