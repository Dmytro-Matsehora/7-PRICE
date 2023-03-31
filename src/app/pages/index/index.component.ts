import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Person } from 'src/assets/types';

@Component({
  templateUrl: 'index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent {
  dataSource: any;
  response: any;
  baseUrl = 'https://randomuser.me/api/';
  seed = 'myseed';
  inc = `picture,gender,name,location,email,phone`

  getVisible = (key: any) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : true;
  }

  GenderVisible = this.getVisible('GenderVisible');
  PhoneVisible = this.getVisible('PhoneVisible');
  CityVisible = this.getVisible('CityVisible');
  StreetVisible = this.getVisible('StreetVisible');
  EmailVisible = this.getVisible('EmailVisible');

  masterDetail() {
    if (!this.CityVisible && !this.StreetVisible && !this.EmailVisible) {
      return false;
    }

    return true;
  }

  handleGenderEvent(event: any) {
    this.GenderVisible = !JSON.parse(event);
    localStorage.setItem('GenderVisible', JSON.stringify(this.GenderVisible))
  }

  handlePhoneEvent(event: any) {
    this.PhoneVisible = !JSON.parse(event);
    localStorage.setItem('PhoneVisible', JSON.stringify(this.PhoneVisible))
  }

  handleCityEvent(event: any) {
    this.CityVisible = !JSON.parse(event);
    localStorage.setItem('CityVisible', JSON.stringify(this.CityVisible))
  }

  handleStreetEvent(event: any) {
    this.StreetVisible = !JSON.parse(event);
    localStorage.setItem('StreetVisible', JSON.stringify(this.StreetVisible))
  }

  handleEmailEvent(event: any) {
    this.EmailVisible = !JSON.parse(event);
    localStorage.setItem('EmailVisible', JSON.stringify(this.EmailVisible))
  }

  constructor(private http: HttpClient) {
    this.dataSource = {
      store: {
        type: 'array',
        key: 'id',
        data: []
      },
      paginate: {
        enabled: true,
        pageSize: 25
      },
      select: [
        'id',
        'picture',
        'name',
        'gender',
        'phone',
        'city',
        'street',
        'email'
      ]
    };
  }

  ngOnInit() {
    this.http.get<any>(`${this.baseUrl}?inc=${this.inc}&results=100&seed=${this.seed}`)
      .subscribe(data => {
        this.dataSource = data.results
        .map((result: Person, index: number) => ({
          id: index + 1,
          picture: result.picture.medium,
          name: result.name.first + ' ' + result.name.last,
          gender: result.gender,
          phone: result.phone,
          city: result.location.city,
          street: result.location.street.number + ' ' + result.location.street.name,
          email: result.email
        }))
    });
  }
}
