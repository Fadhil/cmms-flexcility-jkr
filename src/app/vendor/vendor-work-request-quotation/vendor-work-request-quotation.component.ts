import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Quotation } from './../../models/quotation.interface';

@Component({
  selector: 'app-vendor-work-request-quotation',
  templateUrl: './vendor-work-request-quotation.component.html',
  styleUrls: ['./vendor-work-request-quotation.component.scss']
})
export class VendorWorkRequestQuotationComponent implements OnInit {
  public quotationForm: FormGroup;
  
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.quotationForm = this._fb.group({
      cost: [''],
      time: [''],
      pic: [''],
      manpower: [''],
      method: [''],
      materials: this._fb.array([
        this.initMaterial()
      ])
    });
  }
  initMaterial() {
    return this._fb.group({
      name: [''],
      quantity: ['']
    });
  }

  addMaterial() {
    const control = <FormArray>this.quotationForm.controls['materials'];
    control.push(this.initMaterial());
  }

  removeMaterial(i: number) {
    const control = <FormArray>this.quotationForm.controls['materials'];
    control.removeAt(i);
  }

  save(model: Quotation) {
    console.log(model);
  }
}
