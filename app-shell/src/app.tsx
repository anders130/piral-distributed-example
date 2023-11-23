import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createAdalApi } from 'piral-adal';
import { createInstance, Piral } from 'piral-core';
import { createBlazorApi } from "piral-blazor";
import { client } from './adal';
import { layout, errors } from './layout';
import { createStandardApi } from 'piral';

const feedUrl = 'https://feed-service.azurewebsites.net/api/v1/pilet/test-feed';

export function render() {
  const instance = createInstance({
    state: {
      components: layout,
      errorComponents: errors,
    },
    plugins: [...createStandardApi(), createBlazorApi(), createAdalApi(client)],
    requestPilets() {
      return fetch(feedUrl)
        .then((res) => res.json())
        .then((res) => res.items);
    },
  });
  const root = createRoot(document.querySelector('#app'));
  root.render(<Piral instance={instance} />);
}