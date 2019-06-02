interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'qCJ7FmvAxZCiNKbOJVROQfsFe9BiLUe2',
  domain: 'arne5985-dev.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
