
import { Component, OnInit,NgZone } from '@angular/core';
import { Book } from '../list-book/test-book';



@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  book:Book = JSON.parse(sessionStorage.getItem('book')||'');
  constructor(){

  }

  ngOnInit(): void {

  }
}
