import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Geolocation} from '@ionic-native/geolocation/ngx'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'user-home',
    loadChildren: () => import('./user-home/user-home.module').then( m => m.UserHomePageModule)
  },
  {
    path: 'passgeneration',
    loadChildren: () => import('./passgeneration/passgeneration.module').then( m => m.PassgenerationPageModule)
  },
  
  {
    path: 'alert-window',
    loadChildren: () => import('./alert-window/alert-window.module').then( m => m.AlertWindowPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  // {
  //   path: 'verute',
  //   loadChildren: () => import('./verute/verute.module').then( m => m.VerutePageModule)
  // },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'fine',
    loadChildren: () => import('./fine/fine.module').then( m => m.FinePageModule)
  },
  {
    path: 'fineleft',
    loadChildren: () => import('./fineleft/fineleft.module').then( m => m.FineleftPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'myaccount',
    loadChildren: () => import('./myaccount/myaccount.module').then( m => m.MyaccountPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'verute',
    loadChildren: () => import('./verute/verute.module').then( m => m.VerutePageModule)
  },
  // {
  //   path: 'autocomplete',
  //   loadChildren: () => import('./autocomplete/autocomplete.module').then( m => m.AutocompletePageModule)
  // },
  // {
  //   path: 'samplemap',
  //   loadChildren: () => import('./samplemap/samplemap.module').then( m => m.SamplemapPageModule)
  // },
];

@NgModule({
  imports: [
   RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
 
  exports: [RouterModule],
  providers: [
    Geolocation,
  ]
})
export class AppRoutingModule {}
