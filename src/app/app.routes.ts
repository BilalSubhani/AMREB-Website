import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PropertylistingComponent } from './pages/propertylisting/propertylisting.component';
import { PropertydetailsComponent } from './pages/propertydetails/propertydetails.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SellpropertyComponent } from './pages/sellproperty/sellproperty.component';
import { LegalpageComponent } from './pages/legalpage/legalpage.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

// import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'properties', component: PropertylistingComponent },
  { path: 'property/:id', component: PropertydetailsComponent },
  { path: 'login', component: LoginpageComponent },
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [AuthGuard],
  },
  { path: 'about-us', component: AboutusComponent },
  { path: 'sell-property', component: SellpropertyComponent },
  { path: 'legal', component: LegalpageComponent },
  { path: '**', component: PagenotfoundComponent },
];
