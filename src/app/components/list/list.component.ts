import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MedicineDetailsModel } from 'src/app/models/medicinedetails-model';
import { MedicineDetailsService } from 'src/app/services/medicine-details.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'brand', 'quantity', 'expiryDate'];

  dataSource = new MatTableDataSource(<MedicineDetailsModel[]>[]);

  quantityAlertCheck: number = 10;
  expiryAlertCheck: number = 30;

  constructor(private medicineDetailService: MedicineDetailsService, private router: Router) { }

  ngOnInit(): void {
    this.medicineDetailService.getAll().subscribe(s => {
      this.dataSource = new MatTableDataSource(s);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigate(data: any) {
    this.router.navigate(['/details', data?.id]);
  }

  IsExpire(value: Date): boolean {
    const date1 = new Date(value);
    const currentDate = new Date();
    const oneDay = 1000 * 60 * 60 * 24;

    const diffInTime = date1.getTime() - currentDate.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays < this.expiryAlertCheck ? true : false;
  }

}
