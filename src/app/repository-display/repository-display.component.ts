import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GitCodeSearch } from '../git-code-search'
@Component({
  selector: 'app-repository-display',
  templateUrl: './repository-display.component.html',
  styleUrls: ['./repository-display.component.css']
})
export class RepositoryDisplayComponent implements OnInit {
  @Input() searchResults: GitCodeSearch;
  @Input() favorites: Array<number>
  @Output() updateFavorites = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  addFavorite = (item) => {
    return this.updateFavorites.emit(item.id);
  }

  checkFavorite = (item) => {
    return this.favorites.indexOf(item.id) > -1;
  }

}