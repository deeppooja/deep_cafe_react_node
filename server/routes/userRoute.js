// routes/products.js
const express = require('express');
const router = express.Router();
const User = require('../model/user')


// Define routes related to products
router.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post('/api/users', async (req, res) => {
    try {
        const { formData } = req.body;
        const userModal = await User.findOne({ email: formData.email });
        if (userModal) {
            return res.send({
                status: false,
                message: "User already Register"
            })

        }
        const users = new User({
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        await users.save();
        res.send({
            status: true,
            result: users
        })
        res.json(users);
    } catch (error) {
        throw new Error("Something went wrong!")
    }
});


module.exports = router;
