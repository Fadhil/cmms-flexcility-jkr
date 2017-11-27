import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Complete } from './../../../models/complete.interface';

@Component({
  moduleId: module.id,
  selector: 'app-admin-work-order-ongoing-completion',
  templateUrl: './admin-work-order-ongoing-completion.component.html',
  styleUrls: ['./admin-work-order-ongoing-completion.component.scss']
})
export class AdminWorkOrderOngoingCompletionComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      action: [''],
      description: [''],
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
