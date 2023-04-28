import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Demmande } from "../model/Demmande.model";
import { Observable } from "rxjs/internal/Observable";









@Injectable({providedIn:"root"})
export class Demmandeservice{
    constructor(private http: HttpClient) { }







    SaveDemmande(D:Demmande) {
     


    this.http.post('http://localhost:8080/demmande', D).subscribe(
  (response) => {
    console.log('Client ajouté avec succès', response);
  },
  (error) => {
    console.error('Erreur lors de l\'ajout du client', error);
  }
);

      }


      

      getAllProducts():Observable<Demmande[]>{
        return this.http.get<any>("http://localhost:8080/demmande");
     }

     getDemmande(id:any):Observable<Demmande>{
      return this.http.get<any>("http://localhost:8080/demmande/"+id);
   }

   deleteDemmande(id:any):Observable<any> {
    const url = `http://localhost:8080/demmande/`+id;
    return this.http.delete(url);
   
   }

   UpdateDemmande(D:Demmande,id:any):Observable<any> {
    const url = `http://localhost:8080/demmande/`+id;
    return this.http.put(url,D);
   
   }






   
      

}