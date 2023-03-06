import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent {

  constructor(private service : ApiserviceService) { }

  add(_content: string){
    this.service.addNote(Guid.create().toString(), _content);
  }
}
