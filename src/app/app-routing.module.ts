import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', component: NoteListComponent},
  {path: 'notes', component: NoteListComponent},
  {path: 'edit/:id', component: NoteEditComponent},
  {path: 'add', component : NoteAddComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
