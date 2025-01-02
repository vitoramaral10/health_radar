const User = require('../models/User.model');
const bcrypt = require('bcrypt');

function create(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    // Verifica se o email já está cadastrado
    if (User.findOne({ email })) {
        return res.status(400).json({
            message: "Email already registered"
        });
    }

    // Criptografa a senha usando o secret do .env
    const secret = process.env.SECRET;
    const hash = bcrypt.hashSync(password, secret);

    const user = new User({
        name,
        email,
        password: hash
    });

    user.save()
        .then(() => {
            res.status(201).json({
                message: "User created successfully"
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Internal server error",
                error: error.message
            });
        });
}


module.exports = {
    create
};
