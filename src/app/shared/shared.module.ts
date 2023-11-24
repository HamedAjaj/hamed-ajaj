import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ServiceComponent } from './service/service.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProfileComponent,
    ServiceComponent,
    ProjectComponent,
    SkillsComponent,
    FooterComponent
  ],
  
  exports:[
    NavbarComponent,
    ProfileComponent,
    ServiceComponent,
    ProjectComponent,
    SkillsComponent,
    FooterComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
