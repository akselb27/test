import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  isFavourite: boolean;

  constructor() { }

  ngOnInit(): void {
  }

    onClick(){
      this.isFavourite = !this.isFavourite
    }

}
