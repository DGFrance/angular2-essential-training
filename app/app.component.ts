import { Component , Input} from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  //@Input() mediaItem;
   popup = null;
  onMediaItemDelete(mediaItem) {
  
  }
  onMediaItemPreview(mediaItem){
    this.popup = mediaItem;
    }
onMediaClose(){
  this.popup = null;
}
  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  };
}
