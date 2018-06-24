import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './containers/index/index.component';
import {RouterModule} from "@angular/router";

import { Dash1Component } from './components/dash1/dash1.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import {ROUTES} from './routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
    ],
    declarations: [
        IndexComponent,
        Dash1Component,
    ]
})
export class SiteModule {
}
