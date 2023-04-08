import { Component } from '@angular/core';

@Component({
  selector: 'app-justifier',
  templateUrl: './justifier.component.html',
  styleUrls: ['./justifier.component.css']
})
export class JustifierComponent {

  fakeArray = new Array(4);

  nbre = this.fakeArray.length;
}
