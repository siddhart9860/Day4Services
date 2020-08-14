import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// boostrap Agular apoplication in browser
// load the AppModule (first Angular module) in browser
// and start executing it.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
