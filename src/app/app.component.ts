import { Component } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //fuckMig = fuck benjamin og alle de switch cases
  fuckMig: string;

  onChange(input: string){
    this.fuckMig = input;
  }

  hasher(){
    return Md5.hashStr(this.fuckMig);
  }
}
