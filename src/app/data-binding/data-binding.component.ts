import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  message: string = 'Hello Loi';

  changeMess(name: string) {
    this.message = name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
