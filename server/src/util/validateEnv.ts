import { cleanEnv } from 'envalid';
import { port, str } from 'envalid/dist/validators';

export const env = cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str(),
    PORT: port(),
    SECRET_KEY: str(),
})