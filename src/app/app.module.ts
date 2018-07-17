import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaiComponent } from './mai/mai.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mai',      component: MaiComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
