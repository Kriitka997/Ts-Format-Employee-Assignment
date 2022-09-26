import dotenv from 'dotenv';
import appPath from 'app-root-path';

dotenv.config({ path: `${appPath}/.env` });

export default {
    NODE_ENV: process.env.NODE_ENV,
    APP_ROOT: appPath.path,
    PORT:process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL
}