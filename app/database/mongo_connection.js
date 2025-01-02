// Conf mongo conection

var mongoose = require('mongoose');

var connectToDatabase = function connectToDatabase() {
    return new Promise((resolve, reject) => {
        var url = process.env.MONGO_URL;

        if (!url) {
            return reject(new Error('MONGO_URL environment variable is not set'));
        }

        mongoose.connect(url);
        var db = mongoose.connection;
        db.on('error', (error) => {
            console.error('connection error:', error);
            reject(error);
        });
        db.once('open', function () {
            console.log('Connected to MongoDB');
            resolve();
        });

        db.on('disconnected', function () {
            console.log('Mongoose default connection to DB : disconnected');
        }
        );
    });
};

exports.connectToDatabase = connectToDatabase;