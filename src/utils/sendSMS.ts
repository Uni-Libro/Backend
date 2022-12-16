import { PATTERNT_ID, SMS_FROM_NUMBER, SMS_PASSWORD, SMS_USERNAME } from '@/config';
import request from 'request';
import { logger } from './logger';

const sendOTP = (phone: string, token: string) => {
  logger.info('sendOTP', phone, token);
  return request.post(
    {
      url: 'http://ippanel.com/api/select',
      body: {
        op: 'pattern',
        user: SMS_USERNAME,
        pass: SMS_PASSWORD,
        fromNum: SMS_FROM_NUMBER,
        toNum: phone,
        patternCode: PATTERNT_ID,
        inputData: [{ token }],
      },
      json: true,
    },
    function (error, response) {
      if (!error && response.statusCode === 200) {
        logger.error(response.body);
      } else {
        logger.error('Something went wrong');
      }
    },
  );
};

export { sendOTP };
