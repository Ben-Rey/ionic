import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  createNote = false;
  constructor() {}
  notes = [];

  showListCreator() {
    this.createNote = !this.createNote;
    console.log(this.createNote);
  }

  addNote(newNote: string) {
    this.notes.push(newNote);
    this.createNote = !this.createNote;
  }
}
