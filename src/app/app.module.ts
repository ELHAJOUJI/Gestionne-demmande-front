import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreedemmandeComponent } from './components/creedemmande/creedemmande.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemmandeListComponent } from './components/demmande-list/demmande-list.component';
import { EditDemmandeComponent } from './components/edit-demmande/edit-demmande.component';
import { Demmandeservice } from './service/demmande.service';
import { DisplayDemmandeComponent } from './components/display-demmande/display-demmande.component';
import * as jsPDF from 'jspdf';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
 
  {
    path:'',
    redirectTo:'/pageaccueil',
    pathMatch:'full',
  
  },


  { path: "pageaccueil", component: DemmandeListComponent }, 
  { path: "ajout", component:  CreedemmandeComponent },
  { path: "afficher/:id", component:  DisplayDemmandeComponent },

  { path: "editedemmande/:id", component: EditDemmandeComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    CreedemmandeComponent,
 
    DemmandeListComponent,
    EditDemmandeComponent,
    DisplayDemmandeComponent,
    
      
  ],
  imports: [
   

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  







    ToastrModule.forRoot(),

    
    RouterModule.forRoot(routes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
