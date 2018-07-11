import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ModalDismissDirective } from './shared/modalDialogs/modal-dismiss.directive';
import { SimpleModalComponent } from './shared/modalDialogs/simple-modal.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientJsonpModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        CoreModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        routingComponents
    ],
    bootstrap: [AppComponent],
    providers: []
})

export class AppModule {
}
