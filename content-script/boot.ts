// import { ConnectListener } from './connect-listener';
// import { RuntimeListener } from './runtime-listener';
// console.log('content script!');
// const runtimeListener = new RuntimeListener();
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '../src/app/app.module';
import { environment } from '../src/environments/environment';

if (environment.production) {
  enableProdMode();
}

const bodyTag = document.getElementsByTagName("body")[0];
const appRootTag = document.createElement("app-root");
bodyTag.parentNode.replaceChild(appRootTag, bodyTag);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

