const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error'));
database.once('open', () => {
    console.log('Database is connected. ');
})