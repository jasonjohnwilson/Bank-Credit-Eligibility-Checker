import { IEnvironmentSettings } from './environment-settings.model';
import { IAuthenticationSettings } from './authentication-settings.model';
import { IApiSettings } from './api-settings.model';

export interface IAppConfig {
    environment: IEnvironmentSettings;
    auth: IAuthenticationSettings;
    api: IApiSettings;
}
