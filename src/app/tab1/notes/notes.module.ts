import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NotesComponent } from "./notes.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [NotesComponent],
  exports: [NotesComponent],
})
export class NotesComponentModule {}
