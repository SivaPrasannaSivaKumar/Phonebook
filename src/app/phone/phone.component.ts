import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  number:number = 1231231230

  code = {
    "india": "+91",
    "us":"+1",
    "china":"+86"
  }

  result:any = ""

}
