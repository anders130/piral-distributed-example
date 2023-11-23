import { client } from './adal';

if (location.pathname !== '/auth') {
  if (client.account()) {
    import('./app').then(({ render }) => render());
  } else {
    client.login();
  }
}