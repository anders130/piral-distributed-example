import { setupAdalClient } from 'piral-adal';
import { config } from './config';

export const client = setupAdalClient({
    clientId: config.clientId,
    authority: config.authority,
    redirectUri: `${location.origin}/auth`
});