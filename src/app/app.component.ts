import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kids In Space';
  lastSelectedOrbit ;

  scrollTo(element){
    let orbit = element + "-orbit";
    let location = document.getElementsByClassName(element)[0];
    
    if(element !== 'sun'){
      document.getElementById(orbit).style.borderStyle = 'solid';
      document.getElementById(orbit).style.borderColor = 'white';

      if(this.lastSelectedOrbit){
        document.getElementById(this.lastSelectedOrbit).style.borderStyle = 'dashed';
        document.getElementById(this.lastSelectedOrbit).style.borderColor = '#4A437F';
      }

      this.lastSelectedOrbit = orbit;
    }

    location.scrollIntoView();
    let body = document.body;
    let html = document.documentElement;
    body.scrollTop -= 200;
    html.scrollTop -= 200;
  }

  ngOnInit() {
      let body = document.body;
      let html = document.documentElement;
      body.scrollLeft = 500;
      body.scrollTop = 570;
      html.scrollLeft = 500;
      html.scrollTop = 570;
  }

  changeZoom(value) {
    console.log(value);
    document.getElementById('circle-orbit-container').style.transform = 'scale({{value}})';

  }

}
