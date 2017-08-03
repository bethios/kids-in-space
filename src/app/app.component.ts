import { Component } from '@angular/core';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Kids In Space';
  lastSelectedOrbit ;
  public activePlanet = 'sun';

  setActiveItem(planet){
    this.activePlanet = planet;
    console.log(this.activePlanet)
  }

  scrollTo(element){
    let orbit = element + "-orbit";
    let location = document.getElementsByClassName(element)[0];
    this.highlightElement(element, orbit);
    location.scrollIntoView();
    let body = document.body;
    let html = document.documentElement;
    body.scrollLeft += 100;
    html.scrollLeft += 100;
    body.scrollTop -= 100;
    html.scrollTop -= 100;
  }

  highlightElement(element, orbit){
    if(element !== 'sun'){
      document.getElementById(orbit).style.borderStyle = 'solid';
      document.getElementById(orbit).style.borderColor = 'white';

      if(this.lastSelectedOrbit){
        this.removeHighlight();
      }
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
    this.scrollTo('sun')
  }

  ngOnInit() {
    let location = document.getElementsByClassName('sun')[0];
    location.scrollIntoView();
  }

}
