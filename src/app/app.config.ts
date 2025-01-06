import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

//PrimeNG
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import MaterialCyanOrangePreset from '../themes/material-cyan-orange-preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
        providePrimeNG({ 
            theme: {
                preset: MaterialCyanOrangePreset,
                options: {
                  
                },
            },
            ripple: true,
            csp: {
              nonce: 'Diego2024$'
          }
        })
  ]
};
