import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  isFavourite: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavourite = !this.isFavourite
    if (this.isFavourite) {
      console.log("Favorite was clicked");
    }
    else {
      console.log("Favorite is not clicked")
    }
  }

}
