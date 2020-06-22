import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isShow: boolean = true;
  isLogin: boolean = false;
  name: string = "Loi Duong";
  color: string = "red";
  dssv: any[] = [
    {hoTen: 'Lợi', lop: '16DTHA1'},
    {hoTen: 'Long', lop: '16DTHA1'},
    {hoTen: 'Lân', lop: '16DTHA1'},
    {hoTen: 'Lộc', lop: '16DTHA1'},
  ]


  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isShow = !this.isShow;
  }

  Login() {
    this.isLogin = true;
  }
  Logout() {
    this.isLogin = false;
  }
}
