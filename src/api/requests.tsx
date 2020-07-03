import {
    ApiErrorResponse,
    ApiResponse,
    ApisauceConfig,
    ApisauceInstance,
    CLIENT_ERROR,
    CONNECTION_ERROR,
    NETWORK_ERROR,
    SERVER_ERROR,
    TIMEOUT_ERROR,
  } from 'apisauce';
  import { AxiosRequestConfig } from 'axios';
  import { from, Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
import { ApiClient } from 'api/client';
import { Config } from 'config';
  //import { ServerError } from 'js/error/server-error';
  

  const apiClient = new ApiClient(
    {
      baseURL: Config.baseUrl,
      withCredentials: true,
    }
  );

  export class BaseController {
    protected api: ApisauceInstance;
    protected config: ApisauceConfig;
  
    constructor() {

      this.api = apiClient.api;
      this.config = apiClient.config;
    }
    
  /**
   * This version returns back an Observable with ApiResponse so that layers above can access the HTTP status code.
   * It does examine the response and handles 401 unauthorized => redirect to login
   *
   * **/
  public get<T>(
    url: string,
    params?: {},
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this.handleAuthenticationResponse(this.api.get<T>(url, params, config));
  }
  
    /**
     * This version returns back an Observable with ApiResponse so that layers above can access the HTTP status code.
     * It does examine the response and handles 401 unauthorized => redirect to login
     *
     * **/
    public put<T>(
      url: string,
      params?: {},
      config?: AxiosRequestConfig,
    ): Observable<ApiResponse<T>> {
      return this.mapAndExamineResponse(this.api.put<T>(url, params, config));
    }
    
    
    protected handleAuthenticationResponse<T>(promise: Promise<ApiResponse<T>>): Promise<ApiResponse<T>> {
      promise.then((response) => {
        this.examineResponseGlobalHandler(response)
      });
      return promise;
    }

    protected mapAndExamineResponse<T>(promise: Promise<ApiResponse<T>>): Observable<ApiResponse<T>> {
      return from(promise).pipe(
        map((response: ApiResponse<T>) => this.examineResponseGlobalHandler(response)),
      );
    }
  
    protected examineResponseGlobalHandler<T>(response: ApiResponse<T>): ApiResponse<T> {
      const { status } = response;
  
      if (status === 401) {
        this.handleUnauthorized(); // sign out
      }
  
      if (!response.ok) {
        // TODO maybe add logger ?
      }
  
      return response;
    }
  
    protected handleUnauthorized() {
      //FIXME persistedStores.sessionStore.logout();
      //trunk.persist();
    }
  }
  
    export const controller = new BaseController();