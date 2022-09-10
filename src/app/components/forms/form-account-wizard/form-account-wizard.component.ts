import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/shared/validations/passwordValidator';

@Component({
  selector: 'app-form-account-wizard',
  templateUrl: './form-account-wizard.component.html',
  styleUrls: ['./form-account-wizard.component.scss']
})
export class FormAccountWizardsComponent implements OnInit {
  stepperOrientation: Observable<StepperOrientation>;

  isLinear = false;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private toaster: ToastrService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  firstEditFormGroup!: FormGroup;
  secondEditFormGroup!: FormGroup;
  isEditable = false;

  ngOnInit(): void {
    //Archwizard Content
    this.firstArcFormGroup = this._formBuilder.group({
      vatNumber: ['', Validators.required],
      companyName: ['', Validators.required],
      dateCompanyCreation: ['', Validators.required],
      companyAddress: ['', Validators.required],
      country: ['', Validators.required]
    });
    this.secondArcFormGroup = this._formBuilder.group({
      activitySector: ['', [Validators.required, Validators.email]],
      officialArticles: ['', Validators.required],
      beneficialOwners: ['', Validators.required],
      companyIBAN: ['', Validators.required]
    },
      {
        validator: MustMatch('password', 'cnfPassword')
      });
    this.thirdArcFormGroup = this._formBuilder.group({
      tableSelect: ['', Validators.required],
    })
    this.fourthArcFormGroup = this._formBuilder.group({
      titlePerson: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      nationality: ['', Validators.required],
    })
    this.fiftArcFormGroup = this._formBuilder.group({
      identityDocument: ['', Validators.required],
      documentFileUpload: ['', Validators.required],
      documentValidUntil: ['', Validators.required]
    })
  }

    //Archwizard Content
    firstArcFormGroup!: FormGroup;
    secondArcFormGroup!: FormGroup;
    thirdArcFormGroup!: FormGroup;
    fourthArcFormGroup!: FormGroup;
    fiftArcFormGroup!: FormGroup;
    maxDate!: Date | any;

    public finish() {
      this.toaster.success('Successfully Done!')
    }
}
