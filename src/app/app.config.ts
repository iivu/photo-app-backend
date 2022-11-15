import dotenv from 'dotenv';

dotenv.config();

export const { APP_PORT, MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } =
  process.env;

const { PRIVATE_KEY_BASE64, PUBLIC_KEY_BASE64 } = process.env;

export const PRIVATE_KEY = Buffer.from(PRIVATE_KEY_BASE64 as string, 'base64').toString();
export const PUBLIC_KEY = Buffer.from(PUBLIC_KEY_BASE64 as string, 'base64').toString();
