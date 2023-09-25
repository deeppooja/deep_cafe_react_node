// routes/products.js
const express = require('express');
const router = express.Router();
const User = require('../model/user')


// Define routes related to products
router.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post('/api/users/register', async (req, res) => {
    try {
        const { formData } = req.body;
        const userModal = await User.findOne({ email: formData.email });
        if (userModal) {
            return res.send({
                status: false,
                message: "User already Register"
            })
        } else {
            const users = new User({
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                password: formData.password,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            await users.save();
            res.send({
                status: true,
                result: users
            })
            res.json(users);
        }
    } catch (error) {
        console.log("error", error)
    }
});


router.post('/api/users/login', async (req, res) => {
    try {
        const { formData } = req.body;
        const userModal = await User.findOne({ email: formData.email });
        if (!userModal) {
            return res.send({ message: 'User Not Exist' });
        } else {
            if (userModal.password !== formData.password) {
                return res.send({ message: 'Wrong Password' });
            } else {
                return res.send({
                    status: true,
                    data: userModal
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
});


module.exports = router;
