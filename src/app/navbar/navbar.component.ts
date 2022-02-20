import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() showBook = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  showBookForm(){
    this.showBook.emit(true);
  }
}
