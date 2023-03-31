import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent {
  @Input() dataSource: any = [];
  @Output() genderEvent = new EventEmitter<string>();
  @Output() cityEvent = new EventEmitter<string>();
  @Output() phoneEvent = new EventEmitter<string>();
  @Output() streetEvent = new EventEmitter<string>();
  @Output() emailEvent = new EventEmitter<string>();

  GenderChecked: boolean = true;
  CityChecked: boolean = true;
  StreetChecked: boolean = true;
  EmailChecked: boolean = true;
  PhoneChecked: boolean = true;

  sendGenderEvent() {
    this.genderEvent.emit(`${this.GenderChecked}`);
  }

  sendCityEvent() {
    this.cityEvent.emit(`${this.CityChecked}`);
  }

  sendPhoneEvent() {
    this.phoneEvent.emit(`${this.PhoneChecked}`);
  }

  sendStreetEvent() {
    this.streetEvent.emit(`${this.StreetChecked}`);
  }

  sendEmailEvent() {
    this.emailEvent.emit(`${this.EmailChecked}`);
  }

  constructor() {
    const getItem = (key: any) => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : true;
    }

    this.GenderChecked = getItem('GenderChecked');
    this.CityChecked = getItem('CityChecked');
    this.PhoneChecked = getItem('PhoneChecked');
    this.StreetChecked = getItem('StreetChecked');
    this.EmailChecked = getItem('EmailChecked');
  }

  saveToLocalStorage() {
    localStorage.setItem('GenderChecked', `${this.GenderChecked}`);
    localStorage.setItem('CityChecked', `${this.CityChecked}`);
    localStorage.setItem('PhoneChecked', `${this.PhoneChecked}`);
    localStorage.setItem('StreetChecked', `${this.StreetChecked}`);
    localStorage.setItem('EmailChecked', `${this.EmailChecked}`);
  }
}
