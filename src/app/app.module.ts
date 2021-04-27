import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GlobalService } from './global.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';






// NECESARIO PARA QUE FUNCIONA DATABINDING BIDIRECCIONAL!
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

// NECESARIO PARA PIPE CURRENCY!:
import { LOCALE_ID } from '@angular/core';
import '@angular/common/locales/global/es';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { AnuncioComponent } from './anuncio/anuncio.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent,
    MisReservasComponent,
    AnuncioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatBadgeModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
    
    
    
  ],
  providers: [GlobalService, { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
