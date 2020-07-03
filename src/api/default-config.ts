import https from 'https';
import { ApisauceConfig } from 'apisauce';
import { Config } from 'config';

export const DEFAULT_CONFIG: ApisauceConfig = {
  baseURL: Config.baseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: Config.isDebug,
  }),
};
