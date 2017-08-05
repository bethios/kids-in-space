import { Component } from '@angular/core';
import { ConsoleComponent } from './console.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Kids In Space';
  lastSelectedOrbit ;
  activePlanet = 'the Solar System';

  setActiveItem(planet){
    if(this.lastSelectedOrbit){
      this.removeHighlight();
    }
    this.activePlanet = planet;
  }

  findElement(element){
    let location = document.getElementsByClassName(element)[0];
    this.highlightElement(element);
    location.scrollIntoView();
    let body = document.body;
    let html = document.documentElement;
  }

  highlightElement(element){
    this.setActiveItem(element);

    let orbit = element + "-orbit";
    if(element !== 'sun'){
      document.getElementById(orbit).style.borderStyle = 'solid';
      document.getElementById(orbit).style.borderColor = 'white';
      this.lastSelectedOrbit = orbit;
    }else if(element === 'sun' && this.lastSelectedOrbit){
      this.removeHighlight()
    }
  }

  removeHighlight(){
    document.getElementById(this.lastSelectedOrbit).style.borderStyle = 'dashed';
    document.getElementById(this.lastSelectedOrbit).style.borderColor = '#4A437F';
  }

  zoom(value){
    let main = document.getElementById('circle-orbit-container');
    main.style.transform = 'scale(' + value + ')';
  }

  ngOnInit() {
    this.zoom(0.5);
  }

}
