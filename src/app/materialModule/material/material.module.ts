import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatCardModule, MatDividerModule,
    MatSnackBarModule, MatDialogModule
  ],
  exports : [MatCardModule, MatDividerModule, MatSnackBarModule, MatDialogModule]
})
export class MaterialModule { }
