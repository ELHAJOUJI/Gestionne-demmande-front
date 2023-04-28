import { Component } from '@angular/core';
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

  constructor(private demmandeservice:Demmandeservice,private router:Router){}


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
 
this.router.navigate(["/pageaccueil"]); 
this.router.navigateByUrl("/pageaccueil");
//this.router.navigate(['/example']);

}

onEdit(id:any){
  
  this.router.navigateByUrl("/editedemmande/"+id);

}
onDisplay(id:any){

  this.router.navigateByUrl("/afficher/"+id);
}

}