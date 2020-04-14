import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';

const modules: any[] = [
 MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialCoreModule { }
