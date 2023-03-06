import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit{
  constructor(private service : ApiserviceService,   private route: ActivatedRoute,
    private router: Router ) {
  }
  Notes: any;

  ngOnInit(): void {
    this.service.getNotes().subscribe(q=>{
      this.Notes = q;
    })
  }
  
  edit(id : string){
    this.router.navigateByUrl('/edit/' + id)
  }

  add(){
    this.router.navigateByUrl('/add')
  }

}
