import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { addPreRequestInterceptor } from './request-config/base-address-prefixer';

if (environment.production) {
  enableProdMode();
}

addPreRequestInterceptor();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
