import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  message: string = 'Hello Loi';
  fullName: string = 'Duong Tan Loi';
  email: string = '';

  changeMess(name: string) {
    this.message = name;
  }
  changeInputData(fullName: string){
    this.fullName = fullName;
  }

  submit(fullName:string){
    this.fullName = fullName;
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
