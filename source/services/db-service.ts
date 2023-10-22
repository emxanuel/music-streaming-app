import mongoose from "mongoose";

const DB_URI = "mongodb://127.0.0.1:27017/sound-wave";

export = () => {   
    mongoose.Promise = Promise
    mongoose.connect(DB_URI).then(() => console.log('ok'))
    mongoose.connection.on('error', (e: Error) => console.error(e))
};
