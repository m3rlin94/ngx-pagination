import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './components/basic-example/basic-page.component';
import { AdvancedPageComponent } from './components/advanced-example/advanced-page.component';
import { CustomPageComponent } from './components/custom-template-example/custom-page.component';
import { ServerPageComponent } from './components/server-example/server-page.component';
import { DocumentationPageComponent } from './components/documentation/documentation-page.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: DocumentationPageComponent},
  {path: 'basic', component: BasicPageComponent},
  {path: 'advanced', component: AdvancedPageComponent},
  {path: 'custom-template', component: CustomPageComponent},
  {path: 'server-paging', component: ServerPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class DemoRoutingModule { }
