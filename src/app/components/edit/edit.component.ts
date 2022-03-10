import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MedicineDetailsModel } from 'src/app/models/medicinedetails-model';
import { MedicineDetailsService } from 'src/app/services/medicine-details.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: MedicineDetailsModel,
    public dialogRef: MatDialogRef<EditComponent>, private medicineDetails: MedicineDetailsService, private fb: FormBuilder,private router: Router
  ) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      notes: [this.data.notes, [Validators.required]],
    })

  }

  close(): void {
    this.dialogRef.close();
    this.router.navigate(['/list']);

  }

  update() {
    const payload = { "notes": this.editForm.controls['notes'].value };
    this.medicineDetails.update(this.data.id, payload).subscribe(s=>{
      this.dialogRef.close();
      this.router.navigate(['/list']);
    })
  }
}
