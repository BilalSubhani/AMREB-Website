import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { ServicesComponent } from './services/services.component';
import { WhyusComponent } from './whyus/whyus.component';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    HerosectionComponent,
    ServicesComponent,
    WhyusComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {}
