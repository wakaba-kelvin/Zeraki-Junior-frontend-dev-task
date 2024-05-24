import { Component } from '@angular/core';
import { VisitorsComponent } from '../../components/visitors/visitors.component';
import { RevenueComponent } from '../../components/revenue/revenue.component';
import { CustomerComponent } from '../../components/customer/customer.component';
import { TargetRealityComponent } from '../../components/target-reality/target-reality.component';
import { TopProductsComponent } from '../../components/top-products/top-products.component';
import { VolumeServiceComponent } from '../../components/volume-service/volume-service.component';
import { SalesComponent } from '../../components/sales/sales.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SalesComponent, VisitorsComponent, RevenueComponent, CustomerComponent, TargetRealityComponent, TopProductsComponent, VolumeServiceComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
