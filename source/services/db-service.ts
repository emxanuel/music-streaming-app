import mongoose from "mongoose";

const DB_URI = process.env.DB_URI || '';

export = () => {   
    mongoose.Promise = Promise
    mongoose.connect(DB_URI).then(() => console.log('ok'))
    mongoose.connection.on('error', (e: Error) => console.error(e))
};
