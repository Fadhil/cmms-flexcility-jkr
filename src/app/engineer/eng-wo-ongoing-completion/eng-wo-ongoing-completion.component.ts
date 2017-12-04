import { Complete } from './../../models/complete.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-eng-wo-ongoing-completion',
  templateUrl: './eng-wo-ongoing-completion.component.html',
  styleUrls: ['./eng-wo-ongoing-completion.component.scss']
})
export class EngWoOngoingCompletionComponent implements OnInit {
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
