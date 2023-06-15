import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "mfe1",
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:7001/remoteEntry.js',
      exposedModule: './MfeSharedModule'
    }).then(m => m.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
