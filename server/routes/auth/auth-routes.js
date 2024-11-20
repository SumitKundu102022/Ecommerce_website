const express = require('express');
const { registerUser, loginUser, logoutUser, authMiddleware } = require('../../controllers/auth/auth-contoller');



const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/checkAuth', authMiddleware, (req, res) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        message: "Authorized user !",
        user,
    });
});

module.exports = router;