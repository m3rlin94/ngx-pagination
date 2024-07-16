import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { DemoAppComponent } from './app/demo-app.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { NgxPaginationModule } from '@m3rlin94/ngx-pagination';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { MealsService } from './app/providers/meals.service';
import { provideRouter } from '@angular/router';
import { routes } from './app/demo-routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(DemoAppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, NgxPaginationModule, HighlightModule),
        MealsService,
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    xml: () => import('highlight.js/lib/languages/xml')
                },
            }
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes)
    ]
})
  .catch(err => console.error(err));
