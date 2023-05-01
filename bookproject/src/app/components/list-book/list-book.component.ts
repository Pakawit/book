import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from './test-book';


@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  bookList:Book[] = [];

  constructor (private http: HttpClient){
    }

  ngOnInit(): void {
    this.http.get<Book[]>('https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json').subscribe(response=>{
      console.log('response',response) ;
      this.bookList = response ;
    })
  }

  dataSave(i:number) {
    console.log(this.bookList[i]);
    sessionStorage.setItem('book', JSON.stringify(this.bookList[i]));

  }

}
