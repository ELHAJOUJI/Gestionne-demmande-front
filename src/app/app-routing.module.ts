import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemmandeListComponent } from './components/demmande-list/demmande-list.component';
import { Demmandeservice } from './service/demmande.service';


/* const routes: Routes = [
 
  {
    path: "",
    component: DemmandeListComponent,
    canActivate:[Demmandeservice]
  },


  { path: "pageaccueil", component: DemmandeListComponent }, 
 

];
*/
@NgModule({
  /* imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] */
}) 
export class AppRoutingModule { }
