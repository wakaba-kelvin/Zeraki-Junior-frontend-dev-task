import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { SchoolComponent } from './pages/school/school.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent},
      {
       path: 'invoices',
       component: InvoicesComponent
      },
      {path: 'schools', component: SchoolComponent},
      {path: "**", component: NotFoundComponent}
    ]
  },
];
