import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NotesComponent } from "./notes.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MatCardModule],
  declarations: [NotesComponent],
  exports: [NotesComponent],
})
export class NotesComponentModule {}
