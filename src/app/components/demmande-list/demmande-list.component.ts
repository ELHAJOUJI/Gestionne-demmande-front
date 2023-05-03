import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import jspdf from 'jspdf';

require('jspdf-autotable');
import autoTable, {UserOptions} from 'jspdf-autotable'
import * as XLSX from 'xlsx';


import { Subscription } from 'rxjs/internal/Subscription';
import { Demmande } from 'src/app/model/Demmande.model';
import { Demmandeservice } from 'src/app/service/demmande.service';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

import * as ExcelJS from 'exceljs';
import * as saveAs from 'file-saver';
import {  ViewEncapsulation, Inject, ViewChild, HostListener, ElementRef } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { ToastComponent,ToastCloseArgs, ToastPositionModel } from '@syncfusion/ej2-angular-notifications';

interface jsPDFWithPlugin extends jspdf{
  autotable:(options:UserOptions)=>jspdf;
}

@Component({
  selector: 'app-demmande-list',
  templateUrl: './demmande-list.component.html',
  styleUrls: ['./demmande-list.component.css']
})
export class DemmandeListComponent {

  DemmandeSub: Subscription | undefined

  Demmandes:Demmande[]=[] ;
  Demmandes2:Demmande[]=[] ;
  Demmandes3:Demmande[]=[] ;
  nom: FormControl;
  search: FormControl;

  signinForm:FormGroup ;
  name:any;
  data2:any;

  D: Demmande={
    id:'',
   nom:'',
   objectif:'',
   email: '',
   tel: '',
   typeDemmandeur: '',
   datesouhaite:new Date(),
   datemmande:new Date(),
   superficie:'',
   ice:'',
  };

  P: Demmande={
    id:'ff',
   nom:'465',
   objectif:'36',
   email: 'yfxy',
   tel: 'fxr',
   typeDemmandeur: 'rth',
   datesouhaite:new Date(),
   datemmande:new Date(),
   superficie:'',
   ice:'',
  };
  constructor(private demmandeservice:Demmandeservice,private router:Router,private fb:FormBuilder,private toastr: ToastrService){
    this.nom=fb.control("")
    this.search=fb.control("")

    this.signinForm=fb.group({
     
      nom:this.nom,
      search:this.search
     })
     
  }


  ngOnInit(): void {

    this.DemmandeSub=this.demmandeservice.getAllProducts().subscribe({

      next:(value:Demmande[])=>{

        this.Demmandes=value
        this.Demmandes3=value
        console.log(this.Demmandes)

      },

      error:(error:any)=>{
        console.log(error);  
      },
      complete:()=>{
        //console.log("Completed");
  
      }



    }

    )
console.log("/////////////////////////////////////////////////////////////////////////////");

    
    
    
}

onDelete(id:any){

  
  
 
  this.toastr.success('Supprimer le demmande!', ' Vous avez bien', { 
    positionClass: 'toast-center' 
  });

 
this.demmandeservice.deleteDemmande(id).subscribe(
  (response) => {
    // Handle successful response from the server
  },
  (error) => {
    // Handle error response from the server
  }
);
 



 setTimeout(() =>{ window.location.reload()},2000); 
} 

onEdit(id:any){
  
  this.router.navigateByUrl("/editedemmande/"+id);

}
onDisplay(id:any){

  this.router.navigateByUrl("/afficher/"+id);
}


/* refreshComponent() {
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['pageaccueil']);
  });
} */

SearchDemmande(){
  this.name=this.nom.value;

  console.log(this.name);
  
  console.log("//////////////////////////////////////////////////");

  console.log(this.search.value);
  
if(this.search.value=="Nom"){
  this.DemmandeSub=this.demmandeservice.SearchDemmande(this.name).subscribe({

    next:(value:Demmande[])=>{

      this.Demmandes=value
     
  

    },

    error:(error:any)=>{
      console.log(error);  
    },
    complete:()=>{
      //console.log("Completed");

    }

  }

  )
  if(this.name==""){
      this.Demmandes=[];
    }
  
}

else if(this.search.value=="Id"){
console.log("/////////////////////////////////");



if(this.name=="" || (this.name<1|| this.name>this.Demmandes3.length)){
  this.Demmandes=[];
}


  else{
    this.demmandeservice.getDemmande(this.name).subscribe(demmande=>{
      this.Demmandes2=[];
      this.D.id=demmande.id;
      this.D.nom=demmande.nom;
      this.D.email=demmande.email;
      this.D.ice=demmande.ice;
      this.D.objectif=demmande.objectif;
      this.D.superficie=demmande.superficie;
      this.D.tel=demmande.tel;
      this.D.datesouhaite=demmande.datesouhaite;
      this.D.typeDemmandeur=demmande.typeDemmandeur;
      this.D.datemmande=demmande.datemmande;
      this.Demmandes2.push(this.D);
      this.Demmandes=this.Demmandes2;
      console.log("lalaho///////////////////");
      console.log(this.D.datemmande);
      console.log("lalaho///////////////////");
      console.log(this.Demmandes2);
      console.log(this.D.id);
      console.log(this.name);
      
      
     
      });
  
  }
  
    
  
}

else{

  this.Demmandes=[];



}
 

}

generatePdf(id:any) {
 /*  const doc = new jsPDF();
 
  doc.text('Mon objet TypeScript : ' + JSON.stringify(this.P), 20, 20);


  
  doc.save('mon-document.pdf'); */
  
  this.demmandeservice.getDemmande(id).subscribe(demmande=>{
   this.D.id=demmande.id;
   this.D.nom=demmande.nom;
   this.D.email=demmande.email;
   this.D.ice=demmande.ice;
   this.D.objectif=demmande.objectif;
   this.D.superficie=demmande.superficie;
   this.D.tel=demmande.tel;
   this.D.datesouhaite=demmande.datesouhaite;
   this.D.datemmande=demmande.datemmande;
   this.D.typeDemmandeur=demmande.typeDemmandeur;
   });

  const doc = new jspdf('portrait','px','a3') as jsPDFWithPlugin;
/*d oc.autotable({
  
  head:[['Name','Email','Country']],
  body:[

    ['David','tafhef','AZERTY']
  ]

})
   */


// Example usage of columns property. Note that America will not be included even though it exist in the body since there is no column specified for it.

console.log("lllllllllllllllllllllll");

autoTable(doc, {
  head:[['ID','NOM','EMAIL','SUPERFICIE','ICE','OBJECTIF','TYPEDEMANDEUR','DATESOUHAITE','TELEPHONE','DATEDEMMANDE']],
  body:[

  [this.D.id,this.D.nom,this.D.email,this.D.superficie,this.D.ice,this.D.objectif,this.D.typeDemmandeur,this.D.datesouhaite,this.D.tel,this.D.datemmande]
  ]
})

doc.save('mon-demmande.pdf');
  }

  exportToExcel(){
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Nom_de_la_feuille');
    worksheet.pageSetup.paperSize = ExcelJS.PaperSize.Envelope_10;
worksheet.pageSetup.orientation = 'landscape';
worksheet.pageSetup.fitToPage = true;
worksheet.pageSetup.fitToHeight = 0;
worksheet.pageSetup.fitToWidth = 1;
worksheet.pageSetup.margins = {
  top: 0.25,
  left: 0.25,
  right: 0.25,
  bottom: 0.25,
  header: 0.1,
  footer: 0.3,
};

    worksheet.columns = [
      { header: 'ID', key: 'id' },
      { header: 'NOM', key: 'nom' },
      { header: 'EMAIL', key: 'email' },
      { header: 'SUPERFICIE', key: 'superficie' },
      { header: 'ICE', key: 'ice' },
      { header: 'OBJECTIF', key: 'objectif' },
      { header: 'TYPEDEMANDEUR', key: 'typedemandeur' },
      { header: 'DATESOUHAITE', key: 'datesouhaite' },
      { header: 'TELEPHONE', key: 'telephone' },
      { header: 'DATEDEMMANDE', key: 'datedemmande' },
    ];

    this.Demmandes.forEach(item => {
      const data = [
      

        { id: item.id, nom:item.nom, email:item.email,superficie:item.superficie,ice:item.ice,objectif:item.objectif,typedemandeur:item.typeDemmandeur,telephone:item.tel,datedemmande:item.datemmande },
       
      ];

    
      worksheet.addRows(data);
    });


    const fileName = 'nom_du_fichier.xlsx';
    workbook.xlsx.writeBuffer().then((buffer: ArrayBuffer) => {
      const blob = new Blob([buffer],{ type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, fileName);
    });
            

    
  }


}


