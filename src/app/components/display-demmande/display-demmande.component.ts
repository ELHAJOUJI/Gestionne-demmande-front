import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Demmande } from 'src/app/model/Demmande.model';
import { Demmandeservice } from 'src/app/service/demmande.service';

@Component({
  selector: 'app-display-demmande',
  templateUrl: './display-demmande.component.html',
  styleUrls: ['./display-demmande.component.css']
})
export class DisplayDemmandeComponent {
  email:FormControl ;
  nom: FormControl ;
  tel: FormControl  ;
  objectif: FormControl  ;
  datesouhaite: FormControl  ;
  datedemmande: FormControl  ;
  
  typedemande:FormControl  ;
  superficie:FormControl  ;
  ice:FormControl  ;


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
demmandeid:any;
signinForm:FormGroup ;
  formBuilder: any;
  constructor(private demmandeservice:Demmandeservice,private router:Router,private activatedRoute:ActivatedRoute,private fb:FormBuilder){
    this.demmandeid=activatedRoute.snapshot.params['id'];

    this.email=fb.control("")
    this.nom=fb.control("")
    this.tel=fb.control("")
    this.objectif=fb.control("")
    this.datesouhaite=fb.control("")
    this.superficie=fb.control("")
    this.typedemande=fb.control("")
    this.ice=fb.control("")
    this.datedemmande=fb.control("")


      this.signinForm=fb.group({
      email:this.email,
      nom:this.nom,
      tel:this.tel,
      objectif:this.objectif,
      datesouhaite:this.datesouhaite,
      superficie:this.superficie,
      typedemande:this.typedemande,
      ice:this.ice,
      datedemmande:this.datedemmande
      


      
 
     })   

 /*     this.signinForm = new FormGroup({
      nom: new FormControl(),
      tel: new FormControl(),
      objectif: new FormControl(),
      datesouhaite: new FormControl(),
      superficie: new FormControl(),
      typedemande: new FormControl(),
      ice: new FormControl(),

    }); */
  }

  ngOnInit(): void {
   

   





   this.demmandeservice.getDemmande(this.demmandeid).subscribe(demmande=>{
   
   this.D.nom=demmande.nom;
   this.D.email=demmande.email;
   this.D.ice=demmande.ice;
   this.D.objectif=demmande.objectif;
   this.D.superficie=demmande.superficie;
   this.D.tel=demmande.tel;
   this.D.datesouhaite=demmande.datesouhaite;
   this.D.typeDemmandeur=demmande.typeDemmandeur;
   this.D.datemmande=demmande.datemmande;
   console.log(this.D.typeDemmandeur);
   });
}


handleSubmit(){
  this.router.navigateByUrl("/pageaccueil");
}

}
