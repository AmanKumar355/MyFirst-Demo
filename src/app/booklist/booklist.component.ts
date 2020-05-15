import { Component, OnInit } from '@angular/core';
import { Bookservice } from '../book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  title = 'Book Details';
  field:string;
  books:any;
  constructor(private bookser:Bookservice) { }

  ngOnInit() {
    this.books=this.bookser.getBookDetails().subscribe(data=>this.books=data);
  }

}
