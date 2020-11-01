import { Component, ViewChild, ElementRef } from "@angular/core";
import Note from "./notes/note";
import { NOTES } from "./notes/notes";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  createNote = false;
  constructor() {}
  notes: Note[] = NOTES;

  showListCreator() {
    this.createNote = !this.createNote;
  }

  addNote(newNote: string) {
    this.notes.push({
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id : 11,
      content: newNote,
    });

    this.createNote = !this.createNote;
  }

  deleteNote(note: Note) {
    const index = this.notes.findIndex((o) => {
      return o.id === note.id;
    });
    if (index !== -1) this.notes.splice(index, 1);
  }
}
