import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  exports: [
    A11yModule,
    MatChipsModule,
    MatIconModule,
  ]
})
export class MaterialModule {}