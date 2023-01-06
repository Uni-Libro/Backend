import { MINIO_ACCESS_KEY, MINIO_PRIVATE_KEY, MINIO_ENDPOINT } from '@/config';
import { Client } from 'minio';

const minioClient = new Client({
  endPoint: MINIO_ENDPOINT,
  port: 9000,
  useSSL: false,
  accessKey: MINIO_ACCESS_KEY,
  secretKey: MINIO_PRIVATE_KEY,
});

export default minioClient;
