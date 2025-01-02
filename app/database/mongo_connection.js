// Conf mongo conection

var mongoose = require('mongoose');

var _default = function _default() {
    var url = process.env.MONGO_URL;
    
    if (!url) {
        throw new Error('MONGO_URL environment variable is not set');
    }

    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to MongoDB');
    });
    };

exports.default = _default;