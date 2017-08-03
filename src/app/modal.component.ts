import { Component, Input } from '@angular/core';
import { AppComponent } from './app.component';
import { PlanetInfo } from './planet-info';
import { PLANETINFO } from './fixtures';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() app: AppComponent;
  @Input('activePlanet') activePlanet: string;

}
