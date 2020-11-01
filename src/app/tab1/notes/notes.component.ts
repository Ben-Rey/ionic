import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import Note from "./note";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"],
})
export class NotesComponent implements OnInit {
  @Input() notes: Note[];
  @Output() deleteNoteEvent = new EventEmitter<Note>();

  constructor() {}

  ngOnInit() {}

  DeleteNote(value: Note) {
    this.deleteNoteEvent.emit(value);
  }
}
