import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//Por aca es como arranca la aplicación
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
