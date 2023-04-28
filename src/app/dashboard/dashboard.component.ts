import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tableData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const postData = {
      key: 'RowId',
      value: '0'
    };

    this.http.post('http://68.178.166.216/api/API/BillToPartyMaster/GetData', postData)
      .subscribe((data: any) => {
        this.tableData = data.Table;
      });
  }
}




