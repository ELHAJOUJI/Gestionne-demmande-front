import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Demmande } from 'src/app/model/Demmande.model';
import { Demmandeservice } from 'src/app/service/demmande.service';

@Component({
  selector: 'app-demmande-list',
  templateUrl: './demmande-list.component.html',
  styleUrls: ['./demmande-list.component.css']
})
export class DemmandeListComponent {

  DemmandeSub: Subscription | undefined

  Demmandes:Demmande[]=[] ;
  nom: FormControl;
  signinForm:FormGroup ;
  name:any;
  constructor(private demmandeservice:Demmandeservice,private router:Router,private fb:FormBuilder){
    this.nom=fb.control("")

    this.signinForm=fb.group({
     
      nom:this.nom
     })
     
  }


  ngOnInit(): void {

    this.DemmandeSub=this.demmandeservice.getAllProducts().subscribe({

      next:(value:Demmande[])=>{

        this.Demmandes=value
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
  

this.demmandeservice.deleteDemmande(id).subscribe(
  (response) => {
    // Handle successful response from the server
  },
  (error) => {
    // Handle error response from the server
  }
);
 
/* this.refreshComponent() ;

//this.router.navigate(['/example']);
*/
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
  console.log();
  this.DemmandeSub=this.demmandeservice.SearchDemmande(this.name).subscribe({

    next:(value:Demmande[])=>{

      this.Demmandes=value
      console.log(this.Demmandes)
      console.log(value);

    },

    error:(error:any)=>{
      console.log(error);  
    },
    complete:()=>{
      //console.log("Completed");

    }



  }

  )

}

}