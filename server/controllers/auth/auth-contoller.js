require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/Users");
const clientSecretKey = process.env.CLIENT_SECRET_KEY;

//register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.json({ message: "User already exists with the same email !" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ userName, email, password: hashedPassword });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration successfully",
    });

    // if (!userName || !email || !password) {
    //     return res.status(400).json({ message: "All fields are required" });
    // }
    // const user = await User.findOne({ email });
    // if (user) {
    //     return res.status(400).json({ message: "User already exists" });
    // }
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);
    // const newUser = new User({ userName, email, password: hashedPassword });
    // await newUser.save();
    // return res.status(201).json({ message: "User created successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: `${e.message}` || "Internal server error(Some error occurred)",
    });
  }
};

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.json({
        success: false,
        message: "User does not exists !",
      });
    }

    //check password
    const isMatch = await bcrypt.compare(password, checkUser.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Incorrect password !",
      });
    }

    //create token
    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        userName: checkUser.userName,
      },
      // 'CLIENT_SECRET_KEY',
      clientSecretKey,
      { expiresIn: "7d" }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        // sameSite: "none",
        // maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        message: "User logged in successfully",
        user: {
          id: checkUser._id,
          email: checkUser.email,
          role: checkUser.role,
          userName: checkUser.userName,
        },
      });

    // if (!email || !password) {
    //     return res.status(400).json({ message: "All fields are required" });
    // }
    // const user = await User.findOne({ email });
    // if (!user) {
    //     return res.status(400).json({ message: "User does not exist" });
    // }
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //     return res.status(400).json({ message: "Invalid credentials" });
    // }
    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // res.cookie("token", token, {
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: "none",
    //     maxAge: 24 * 60 * 60 * 1000,
    // });
    // return res.status(200).json({ message: "User logged in successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: `${e.message}` || "Internal server error(Some error occurred)",
    });
  }
};

//logout
const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token").json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: `${e.message}` || "Internal server error(Some error occurred)",
    });
  }
};

//forgot password

//reset password

//auth middleware
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized user !",
    });
  }
  try {
    const decoded = jwt.verify(token, clientSecretKey);
    // req.user = await User.findById(decoded.id).select("-password");
    req.user = decoded;
    next();
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: `${e.message}` || "Internal server error(Some error occurred)",
    });
  }
};

module.exports = { registerUser, loginUser, logoutUser, authMiddleware };
