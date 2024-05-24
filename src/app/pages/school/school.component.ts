import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { School } from '../../Interfaces/schools.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './school.component.html',
  styleUrl: './school.component.css'
})
export class SchoolComponent {

  schools: School[] = [];

  constructor(private dataservice: DataService) {
    this.getSchools()
  }

  getSchools() {
    this.dataservice.getSchools().subscribe(res => {
      console.log(res.Schools);
      
      res.Schools.forEach((data) =>{
        this.schools.push(data)
      })
    })
  }
}
