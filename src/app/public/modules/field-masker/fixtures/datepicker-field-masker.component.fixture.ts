import {
  Component,
  ViewChild
} from '@angular/core';

import {
  SkyFieldMaskerInputDirective
} from '../field-masker-input.directive';

import {
  SkyDatepickerInputDirective
} from '../../datepicker';

@Component({
  selector: 'field-masker-test',
  templateUrl: './datepicker-field-masker.component.fixture.html'
})
export class DatepickerFieldMaskerTestComponent {
  @ViewChild(SkyFieldMaskerInputDirective)
  public fieldMaskerInputDirective: SkyFieldMaskerInputDirective;

  @ViewChild(SkyDatepickerInputDirective)
  public datepickerInputDirective: SkyDatepickerInputDirective;

  public minDate: Date;

  public maxDate: Date;

  public selectedDate: any;

  public format: string = 'MM/DD/YYYY';
  public noValidate: boolean = false;
  public startingDay = 0;
  public isDisabled: boolean;
  public showInvalidDirective = false;
}
