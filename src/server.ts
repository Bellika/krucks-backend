import app from './app';
import env from "../src/util/validateEnv";
import mongoose from 'mongoose';

const PORT = env.PORT || 5001;

mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log('Mongoose connected')
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        })
    })
    .catch(console.error);

