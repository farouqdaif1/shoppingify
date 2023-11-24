import { cleanEnv } from "envalid";
import { str } from 'envalid/dist/validators';

export const env = cleanEnv(import.meta.env, {
    VITE_PUBLIC_GOOGLE_API_TOKEN: str(),
});