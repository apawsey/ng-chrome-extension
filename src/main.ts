import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
console.log("booting angular");
const targetTag = document.getElementById('footcnt'); // document.getElementsByTagName("body")[0];

//parse data...

const appRootTag = document.createElement("app-root");
targetTag.parentNode.replaceChild(appRootTag, targetTag);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));