import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit{

  Note: any;
  id: any;


   constructor(
        private service : ApiserviceService,
        private route: ActivatedRoute,
        private router: Router ) {
        //get id from url
        this.id = route.snapshot.url[1].path;
  }

  ngOnInit(): void {
    this.service.getNote(this.id).subscribe(q=>{
      this.Note = q;
    })
  }

  //call api service 

  //delete via id
  delete(){
    this.service.delNote(this.id);
  }

  //edit content
  edit(value: string){
    this.service.editNote(this.Note.id, value, this.Note.createdDate);
  }

}
