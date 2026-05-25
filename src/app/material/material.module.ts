import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';



const matArr = [MatButtonModule]
@NgModule({
  declarations: [],
  imports: [CommonModule, ...matArr],
  exports : [...matArr]
  
  
})
export class MaterialModule { }
