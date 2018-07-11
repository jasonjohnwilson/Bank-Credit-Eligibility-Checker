export interface IAuthenticationSettings {
    enabled: boolean;
    authority: string;
    client_id: string;
    redirect_uri: string;
    post_logout_redirect_uri: string;
    silent_redirect_uri: string;
    scopes: string;
}
