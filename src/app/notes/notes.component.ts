import { Component, OnInit } from "@angular/core";
import { Note } from "./note";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"],
})
export class NotesComponent implements OnInit {
  note: Note = {
    id: 1,
    content: "This is a note",
  };

  constructor() {}

  ngOnInit() {}
}
