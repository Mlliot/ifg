import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    provideAuth0({
      domain: 'dev-t8buvtxe81bsgzlz.us.auth0.com',
      clientId: '8PyODJubsM79xgq4mZfoJcbUO2kH8G0y',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200'
      }
    }),
  ]
};
