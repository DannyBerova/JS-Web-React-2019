const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/home-agent', {
        useCreateIndex: true,    
        useNewUrlParser: true
    });
    const db = mongoose.connection;
    db.once('open', err => {
        if (err) {
            console.log(err);
        }

        console.log('Database ready');
    }).catch((reason) => {
        console.log('Something went wrong');
        console.log(reason);
    });

    db.on('error', reason => {
        console.log(reason);
    });
};