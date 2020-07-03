import { Config } from 'config';
import { ApisauceConfig, ApisauceInstance, create } from 'apisauce';
import merge from 'lodash/merge';
import { DEFAULT_CONFIG } from 'api/default-config';
import { BaseController } from './requests';

/**
 * This client is made to be composed with multiple controllers.
 */
export class ApiClient {
  public api: ApisauceInstance;
  public config: ApisauceConfig;

  constructor(config: ApisauceConfig) {
    const combinedConfig = merge(DEFAULT_CONFIG, config);
    this.api = create(combinedConfig);
    this.config = combinedConfig; 
  }

  public setLanguageHeader(locale: string) {
    this.api.setHeader('Accept-Language', locale);
  }
}
