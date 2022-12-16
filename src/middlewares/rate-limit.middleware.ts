import { RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS } from '@/config';
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: Number(RATE_LIMIT_WINDOW_MS) || 4 * 60 * 1000,
  max: Number(RATE_LIMIT_MAX) || 3,
  standardHeaders: true,
  legacyHeaders: false,
});

export default limiter;
