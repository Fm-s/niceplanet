import React from 'react';
import ReactDOM from 'react-dom/client';
import {UserAuthProvider} from './contexts/user-auth';
import {SimpleNavProvider} from './contexts/navigation-context';

import './index.css';
import App from './App';



const main = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    if (window.location.pathname === '/niceplanet') {
          window.location.pathname = '/niceplanet/'
          return
    }
  
    await worker.start({
      serviceWorker: {
        url: '/niceplanet/mockServiceWorker.js'
      },
      onUnhandledRequest: "bypass"
    })
  }

const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <UserAuthProvider>
        <SimpleNavProvider>
          <App/>
        </SimpleNavProvider>
      </UserAuthProvider>
    </React.StrictMode>
  );
}

main()


