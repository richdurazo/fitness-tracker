import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule, MatCardModule, MatListModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatCardModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatCardModule,
        MatListModule
    ]
})
export class MaterialModule {}