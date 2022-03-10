import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineDetailsModel } from 'src/app/models/medicinedetails-model';
import { MedicineDetailsService } from 'src/app/services/medicine-details.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  medicineDetails!: MedicineDetailsModel;
  editDialog!: MatDialogRef<EditComponent>;

  constructor(private dialogModel: MatDialog, private medicineDetailService: MedicineDetailsService, private actRoute: ActivatedRoute,private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.actRoute.snapshot.paramMap.get('id'));
    this.medicineDetailService.get(id).subscribe(s => {
      this.medicineDetails = s;
    })
  }

  update(medicineDetails: MedicineDetailsModel) {
    this.editDialog = this.dialogModel.open(EditComponent, { data: medicineDetails });
    this.editDialog.afterClosed().subscribe(result => {
      this.router.navigate(['/list']);
    });
  }

}
