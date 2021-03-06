import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: "../app/pages/home/home.module#HomeModule",
    pathMatch: "full",
    data: { preload: false },
  },
  {
    path: "git",
    loadChildren: "../app/pages/git/git.module#GitModule",
    data: { preload: false },
  },
  {
    path: "settings",
    loadChildren: "../app/pages/settings/settings.module#SettingsModule",
    data: { preload: false },
  },
  {
    path: "about",
    loadChildren: "../app/pages/about/about.module#AboutModule",
    data: { preload: false },
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: NoPreloading})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
