const express = require('express');
const mongo = require('./app/database/mongo_connection');
const signupRoutes = require('./app/routes/Signup.routes');
require("dotenv").config();

const app = express();

// Configura o express para receber dados em JSON
app.use(express.json());

// Configura as rotas
app.use("/api/signup", signupRoutes);

// Inicia o banco de dados
mongo.connectToDatabase().then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
