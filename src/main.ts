import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (window) {
  let console: any = (function(logger: any){
    return {
        log: function(text: any){
          logger.log(`log: ${text}`);
        },
        info: function (text: any) {
          logger.info(`info: ${text}`);
        },
        warn: function (text: any) {
          logger.warn(`warn: ${text}`);
        },
        error: function (text: any) {
          logger.error(`error: ${text}`);
        }
    };
  }(window.console));

  window.console = console;
}

if (environment.production) {
  enableProdMode();
}

function bootstrap() {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
};


if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

