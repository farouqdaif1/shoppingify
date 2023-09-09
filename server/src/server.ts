import app from './app';
import mongoose from 'mongoose';
import { env } from './util/validateEnv';
mongoose.connect(env.MONGO_CONNECTION_STRING).then(() => {
    console.log('Connected to MongoDB');
    app.listen(env.PORT, () => {
        console.log(`Server is running on port ${env.PORT}`);
    });
}).catch((error) => console.log(`${error} did not connect`));
