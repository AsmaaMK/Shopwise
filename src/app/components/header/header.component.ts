import { Component, OnInit } from '@angular/core';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faCart = faCartShopping;

  constructor() { }

  ngOnInit(): void {
  }

}
