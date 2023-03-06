import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {



  constructor(private http: HttpClient) { }

  //list
  getNotes(){
    return this.http.get('https://virtserver.swaggerhub.com/patrickweegen/NoteTakingApp/1.0.0/notes');
  }

  //single
  getNote(id: any){
    return this.http.get('https://virtserver.swaggerhub.com/patrickweegen/NoteTakingApp/1.0.0/note/' + id);
  }

  delNote(id: any){
    return this.http.delete('https://virtserver.swaggerhub.com/patrickweegen/NoteTakingApp/1.0.0/note/' + id);
  }

  editNote(_id: string, _content: string, _createdDate : Date){
    return this.http.put('https://virtserver.swaggerhub.com/patrickweegen/NoteTakingApp/1.0.0/note/'+ _id, new Note(_id, _content, _createdDate, new Date()));
  }

  addNote(_id: string, _content: string){

    return this.http.post('https://virtserver.swaggerhub.com/patrickweegen/NoteTakingApp/1.0.0/notes/', new Note(_id, _content, new Date(), new Date()));
  }
}
