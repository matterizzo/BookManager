import { Component } from '@angular/core';
import { Book } from './models/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercizioConMichele';
  formStatus: boolean = false;

  showForm(x: boolean){
    this.formStatus = x;
  }

  books:Book []=[
    {
      titolo: "titolo a caso",
      autore: "salvo",
      casaEditrice: "sanpaolo",
      genere: "giallo",
      prezzo: 20
    }
  ]

  createBook(book: Book){
    this.books.push(book);
  }

  deleteBook(book: Book){
    let index = this.books.indexOf(book);
    this.books.splice(index, 1);

  }
}

