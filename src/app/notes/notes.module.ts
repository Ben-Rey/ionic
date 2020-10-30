import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NotesComponent } from "./notes.component";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MatInputModule],
  declarations: [NotesComponent],
  exports: [NotesComponent],
})
export class NotesComponentModule {}
