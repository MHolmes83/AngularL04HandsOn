import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsService } from './services/skills.service';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './services/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SkillsService,
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
