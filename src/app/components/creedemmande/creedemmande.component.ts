import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Demmandeservice } from 'src/app/service/demmande.service';
import { Demmande } from 'src/app/model/Demmande.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creedemmande',
  templateUrl: './creedemmande.component.html',
  styleUrls: ['./creedemmande.component.css']
})
export class CreedemmandeComponent {
  signinForm:FormGroup ;
  email:FormControl ;
  nom: FormControl ;
  tel: FormControl  ;
  objectif: FormControl  ;
  datesouhaite: FormControl  ;
  
  typedemande:FormControl  ;
  superficie:FormControl  ;
  ice:FormControl  ;

  DemmandeSub: Subscription | undefined

  Demmandes:Demmande[]=[] ;

  D: Demmande={
    id:'',
   nom:'',
   objectif:'',
   email: '',
   tel: '',
   typedemande: '',
   datesouhaite:new Date(),
   superficie:'',
   ice:'',
  };
  

  constructor(private fb:FormBuilder,private demmandeservice:Demmandeservice,private router:Router){
    this.email=fb.control("")
    this.nom=fb.control("")
    this.tel=fb.control("")
    this.objectif=fb.control("")
    this.datesouhaite=fb.control("")
    this.superficie=fb.control("")
    this.typedemande=fb.control("")
    this.ice=fb.control("")

     
    this.signinForm=fb.group({
      email:this.email,
      nom:this.nom,
      tel:this.tel,
      objectif:this.objectif,
      datesouhaite:this.datesouhaite,
      superficie:this.superficie,
      typedemande:this.typedemande,
      ice:this.ice,
      


      

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
      
      
  }


     handleSubmit(){

      this.D.nom=this.nom.value;
      this.D.email=this.email.value;
      this.D.objectif=this.objectif.value;
      this.D.tel=this.tel.value;
      this.D.typedemande=this.typedemande.value;
      this.D.superficie=this.superficie.value;
      this.D.datesouhaite=this.datesouhaite.value;
      this.D.ice=this.ice.value;

    console.log(this.D.nom);
    console.log(this.D.email);
    console.log(this.D.objectif);
    console.log(this.D.tel);
    console.log(this.D.superficie);
    console.log(this.D.typedemande);
    console.log(this.D.ice);
      
     
      this.demmandeservice.SaveDemmande(this.D);
      
      this.router.navigate(["/pageaccueil"]); 
     
    
    }

}
