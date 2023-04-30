import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, Validators, NgForm, FormControl } from '@angular/forms';

interface User {
  gstno: string;
  panno: string;
  code: string;
  name: string;
  address: string;
  pincode: string;
  country: string;
  state: string;
  city: string;
  mobno: string;
  email: string;
  latitude: string;
  longitude: string;
  currency: string;
  cpname: string;
  cpmobile: string;
  cpemail: string;
  cpdepartment: string;
  cpdesignation: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  constructor(private http: HttpClient) {}

  myForm: FormGroup = new FormGroup({
    gstno: new FormControl('', Validators.required),
    panno: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    pincode: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    mobno: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    latitude: new FormControl('', Validators.required),
    longitude: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    cpname: new FormControl('', Validators.required),
    cpmobile: new FormControl('', Validators.required),
    cpemail: new FormControl('', [Validators.required, Validators.email]),
    cpdepartment: new FormControl('', Validators.required),
    cpdesignation: new FormControl('', Validators.required),
  });

  showTable: boolean = false;
  data: any[] = [];
  users: User[] = [];
  gstno: string = '';
  panno: string = '';
  code: string = '';
  name: string = '';
  address: string = '';
  pincode: string = '';
  country: string = '';
  state: string = '';
  city: string = '';
  mobno: string = '';
  email: string = '';
  latitude: string = '';
  longitude: string = '';
  currency: string = '';
  cpname: string = '';
  cpmobile: string = '';
  cpemail: string = '';
  cpdepartment: string = '';
  cpdesignation: string = '';

  onSubmit() {
    const newUser: User = {
      gstno: this.gstno,
      panno: this.panno,
      code: this.code,
      name: this.name,
      address: this.address,
      pincode: this.pincode,
      country: this.country,
      state: this.state,
      city: this.city,
      mobno: this.mobno,
      email: this.email,
      latitude: this.latitude,
      longitude: this.longitude,
      currency: this.currency,
      cpname: this.cpname,
      cpmobile: this.cpmobile,
      cpemail: this.cpemail,
      cpdepartment: this.cpdepartment,
      cpdesignation: this.cpdesignation,
    };
    this.users.push(newUser);
    this.gstno = '';
    this.panno = '';
    this.code = '';
    this.name = '';
    this.address = '';
    this.pincode = '';
    this.country = '';
    this.state = '';
    this.city = '';
    this.mobno = '';
    this.email = '';
    this.latitude = '';
    this.longitude = '';
    this.currency = '';
    this.cpname = '';
    this.cpmobile = '';
    this.cpemail = '';
    this.cpdepartment = '';
    this.cpdesignation = '';
  }
  onCancel() {
    this.myForm.reset();
  }
  onSave() {
    const postData = {
      RowId: 0,
      ActionId: 0,
      Code: this.users[0].code,
      Name: this.users[0].name,
      Address: this.users[0].address,
      Country: this.users[0].country,
      State: this.users[0].state,
      City: this.users[0].city,
      Mobile: this.users[0].mobno,
      Email: this.users[0].email,
      GSTNo: this.users[0].gstno,
      PANNo: this.users[0].panno,
      PinCode: this.users[0].pincode,
      Latitude: this.users[0].latitude,
      Longitude: this.users[0].longitude,
      ContactPersonDetails: [
        {
          RowId: null,
          PersonName: this.users[0].cpname,
          PersonMobile: this.users[0].cpmobile,
          PersonEmail: this.users[0].cpemail,
          Department: this.users[0].cpdepartment,
          Designation: this.users[0].cpdesignation,
        },
      ],
    };

    // make the HTTP POST request
    this.http
      .post(
        'http://68.178.166.216/api/API/BillToPartyMaster/SaveData',
        postData
      )
      .subscribe(
        (response) => {
          console.log('Data saved successfully!');
          console.log(response);
        },
        (error) => {
          console.log('Error while saving data:');
          console.log(error);
        }
      );
  }
}
