import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';;
import { GameComponent } from './game/game.component';
import { WordService } from './word-service.service';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
	CommonModule,
	FormsModule
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }