import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'app-shell';
import { extractClaimsFromToken } from './authentication-utils';

const Page = React.lazy(() => import('./Page'));

export async function setup(app: PiletApi) {
  app.registerPage('/page', Page);

  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(() => <Link to="/page">Page</Link>);

  const userToken = await app.getAccessToken();
  const payload = extractClaimsFromToken(userToken);
  if (!payload) return;
  
  app.registerTile(() => <div>Welcome {payload.name}</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
