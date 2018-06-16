import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './containers/index/index.component';
import {RouterModule} from "@angular/router";

import {ROUTES} from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [IndexComponent]
})
export class SiteModule { }
