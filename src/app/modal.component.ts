import { Component } from '@angular/core';
import { PlanetInfo } from './planet-info';
import { PLANETINFO } from './fixtures';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  planetInfo: PlanetInfo[];

  ngOnInit(){
    this.planetInfo = PLANETINFO;
  }

}
