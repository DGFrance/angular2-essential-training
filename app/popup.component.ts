import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'popup',
  templateUrl: 'app/popup.component.html', 
  styleUrls: ['app/popup.component.css']
})
export class PopUpComponent{
  picPath = [{path:'/media/01.png', visibility:true},{path:'/media/02.png', visibility:false},{path:'/media/03.png', visibility:false} {path:'/media/04.png', visibility:false}];
  @Input() mediaItem;
  @Input() Next = 0;
  @Output() close = new EventEmitter();

isPop(){
  return this.mediaItem?"": "hidden";
}
  onClose() {
  this.close.emit();
}
isNext(){
  this.picPath[this.Next].visibility = false;
  if ( this.Next < this.picPath.length -1 ){
    this.Next++; 
  }else{
    this.Next = 0;
  }
  this.picPath[this.Next].visibility = true;
}
isPrev(){
  this.picPath[this.Next].visibility = false;
  if ( this.Next > 0){
    this.Next--;
  }else{
    this.Next = this.picPath.length -1;
}
this.picPath[this.Next].visibility = true;
}
}