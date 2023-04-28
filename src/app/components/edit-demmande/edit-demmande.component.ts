import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Demmande as Demands, Demmande } from 'src/app/model/Demmande.model';
import { Demmandeservice } from 'src/app/service/demmande.service';

@Component({
  selector: 'app-edit-demmande',
  templateUrl: './edit-demmande.component.html',
  styleUrls: ['./edit-demmande.component.css']
})
export class EditDemmandeComponent {
  email:FormControl ;
  nom: FormControl ;
  tel: FormControl  ;
  objectif: FormControl  ;
  datesouhaite: FormControl  ;
  
  typedemande:FormControl  ;
  superficie:FormControl  ;
  ice:FormControl  ;


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
    this.D.id=demmande.id;
   this.D.nom=demmande.nom;
   this.D.email=demmande.email;
   this.D.ice=demmande.ice;
   this.D.objectif=demmande.objectif;
   this.D.superficie=demmande.superficie;
   this.D.tel=demmande.tel;
   this.D.datesouhaite=demmande.datesouhaite;
   this.D.typedemande=demmande.typedemande;
   });
}


Update(){

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


this.demmandeservice.UpdateDemmande(this.D,this.D.id).subscribe(
  (response) => {
    // Handle successful response from the server
  },
  (error) => {
    // Handle error response from the server
  }
);

}

}
