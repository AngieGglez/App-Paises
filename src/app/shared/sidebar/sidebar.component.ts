import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  //Para que aparezca la mano que indica que hay un link SOLO en el sidebar añadir en stiles => cursor:pointer
  styles: [
    `
      li {
        cursor:pointer;
      }
    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
