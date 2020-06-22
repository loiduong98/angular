import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  templateUrl: './baitap6.component.html',
  styleUrls: ['./baitap6.component.css']
})
export class Baitap6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dssp: any[] = [
    {maSP: 'Apple', tenSP: 'IphoneX',gia:10000000},
    {maSP: 'Vivo', tenSP: 'Vivo V7',gia:10000000},
    {maSP: 'Samsung', tenSP: 'Samsung J5',gia:10000000},
    {maSP: 'Xiaomi', tenSP: 'Xiaomi 5',gia:10000000},
  ]
  addProduct(maSP: string, tenSP:string, gia:string) {
    const sanPham = {maSP,tenSP,gia}
    this.dssp.push(sanPham);
  }

}
