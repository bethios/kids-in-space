import { Component, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { PlanetInfo } from './planet-info';
import { PLANETINFO } from './fixtures';

@Component({
  selector: 'console',
  templateUrl: 'console.component.html',
  styleUrls: ['console.component.css']
})
export class ModalComponent {
  @Input() app: AppComponent;
  @Input('activePlanet') activePlanet: string;

}
