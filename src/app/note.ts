export class Note {
    id: string;
    content: string;
    createdDate: Date;
    changedDate: Date;

    constructor(_id: string, _content: string, _createdDate: Date, _changedDate: Date ) {
      this.id = _id;
      this.content = _content;
      this.createdDate = _createdDate;
      this.changedDate = _changedDate;
    }
  }