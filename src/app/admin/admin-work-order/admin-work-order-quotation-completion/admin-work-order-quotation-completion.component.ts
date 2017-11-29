import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Complete } from './../../../models/complete.interface';

@Component({
  selector: 'app-admin-work-order-quotation-completion',
  templateUrl: './admin-work-order-quotation-completion.component.html',
  styleUrls: ['./admin-work-order-quotation-completion.component.scss']
})
export class AdminWorkOrderQuotationCompletionComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      finding: [''],
      further: [''],
      corrective: [''],
      cost: [''],
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
    const control = <FormArray>this.myForm.controls['materials'];
    control.push(this.initMaterial());
  }

  removeMaterial(i: number) {
    const control = <FormArray>this.myForm.controls['materials'];
    control.removeAt(i);
  }

  save(model: Complete) {
    console.log(model);
  }
}
