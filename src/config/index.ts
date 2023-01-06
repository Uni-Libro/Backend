import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const PAGE_SIZE = 10;
export const {
  NODE_ENV,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  SECRET_KEY,
  LOG_FORMAT,
  LOG_DIR,
  ORIGIN,
  REDIS_CONN_STRING,
  PATTERNT_ID,
  SMS_USERNAME,
  SMS_PASSWORD,
  SMS_FROM_NUMBER,
  RATE_LIMIT_WINDOW_MS,
  RATE_LIMIT_MAX,
  MINIO_ACCESS_KEY,
  MINIO_PRIVATE_KEY,
  MINIO_ENDPOINT,
} = process.env;
