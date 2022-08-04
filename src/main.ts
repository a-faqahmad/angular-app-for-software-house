import { AppModule } from './app/modules/app.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { SignupModule } from './app/signup.module'
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//platformBrowserDynamic().bootstrapModule(SignupModule)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
