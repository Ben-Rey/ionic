import { Component, OnInit } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-note-creator",
  templateUrl: "./note-creator.component.html",
  styleUrls: ["./note-creator.component.scss"],
})
export class NoteCreatorComponent implements OnInit {
  @Output() newNoteEvent = new EventEmitter<string>();
  note = "";

  constructor() {}

  ngOnInit() {}

  addNewNote(value: string) {
    console.log(value);
    this.newNoteEvent.emit(value);
  }
}
