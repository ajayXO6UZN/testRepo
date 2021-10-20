const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");

exports.registerUser = catchAsyncErrors(
    async (req, res, next) => {
        const { name, email, password } = req.body;

        const user = await User.create({
            name, email, password,
            avatar: {
                public_id: 'this is simple id',
                url: 'profilepicUrl',
            },
        })

        res.json({
            message: "user register successfully",
            user
        })
    }
)


// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
   
  });

 // Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
});

