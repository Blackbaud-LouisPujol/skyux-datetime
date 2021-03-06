import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

import {
  SkyDatepickerInputDirective
} from '../datepicker-input.directive';

@Component({
  selector: 'datepicker-reactive-test',
  templateUrl: './datepicker-reactive.component.fixture.html'
})
export class DatepickerReactiveTestComponent implements OnInit {

  @ViewChild(SkyDatepickerInputDirective)
  public inputDirective: SkyDatepickerInputDirective;

  public minDate: Date;
  public maxDate: Date;
  public datepickerForm: FormGroup;
  public isDisabled: boolean;
  public dateControl: FormControl;
  public initialValue: Date | string;
  public noValidate: boolean = false;
  public startingDay = 0;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit() {
    this.dateControl = new FormControl(this.initialValue);

    this.datepickerForm = this.formBuilder.group({
      date: this.dateControl
    });
  }
}
