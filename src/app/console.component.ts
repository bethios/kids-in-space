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

  planetInfo= {
    "sun" :{
      'heading': "We're at the very center of the solar system-- the Sun!",
      'facts': 'Our sun is 4.5 billion years old and will keep shining for another 5 billion years. ' +
      'After that it will turn into a red giant an become much dimmer. ',
      'image': 'link to sun image',
      'creativity_prompt': "Cut coffee filters into different size circles, one for each planet and the sun. " +
      " Use an eyedropper to drop watercolors on the coffee filters according to the color of each planet.  " +
      "You'll have your very own solar system!"},
    "mercury":{
      'heading': "Now landing on Mercury, the closest planet to the sun!",
      'facts': "One year on Mercury is just 88 days on Earth.  That means you'd have a birthday on Mercury every" +
        " 3 months! Because Mercury spins so slowly the sun only rises every 180 Earth days. ",
      'image': 'link to sun image',
      'creativity_prompt': "Mercury has lots of holes or craters.  Roll some playdough into a ball and use rocks" +
        " you find outside to make big craters all over.  How do you think Mercury got its craters? "},
    "venus":{
      'heading': "We've arrived at Venus!",
      'facts': "Even though Venus isn't the closest planet to the Sun its still the hottest! The thick atmosphere" +
        " holds in heat causing the greenhouse affect. Its rotates very slowly but orbits the sun very fast, a day" +
        " on Venus is a little longer than a year on Venus.",
      'image': 'link to sun image',
      'creativity_prompt': "Get two jars and two thermometers. Place one thermometer in the jar.  Place both on a sunny" +
        " windowsil, making sure the jar's lid doesn't cast a shadow on either.  Wait 10 minutes and record the" +
        " temperatures.  The jar temperature should be higher because of the greenhouse effect! Can you think of another" +
        " time you have experienced this effect? Ever gotten into a hot car? "},
    "earth" :{
      'heading': "Now orbiting Earth on the International Space Station!",
      'facts': "this is going to be ISS current # astronauts, current location, last time over your location. use your imagination Caila :)",
      'image': 'link to sun image',
      'creativity_prompt': "Astronauts in the International Space Station can't have crumbs in space, they can get into " +
        "equipment and cause big problems.  Can you make yourself a snack fit for an astronaut? Some ideas for your mission" +
        " are raisins, fresh fruit, granola and cashew! Time to get packing for outer space!"},
    "mars":{
      'heading': "Now approaching the red planet, Mars!",
      'facts': "We've sent 20 spacecrafts to visit Mars and is the only planet we've landed a rover on. There are signs " +
        "of water on Mars though most is now thin clouds and icy dirt. ",
      'image': 'link to sun image',
      'creativity_prompt': "When humans go to Mars we'll need to build a habitat to keep us safe! Use recyclables, paper" +
        " and things around your house to build a model of your habitat.  What will you need? A place to grow food maybe?" +
        " A place to do scientific experiments? To eat? "},
    "jupiter":{
      'heading': "Approaching Jupiter, the largest gas giant.",
      'facts': "Jupiter is the biggest planet in our solar system and has over 50 moons! Jupiter can be seen without a " +
        "telescope so we've known about it for a very long time. ",
      'image': 'link to sun image',
      'creativity_prompt': "Jupiter is the stormiest planet in the Solar System.  Rub a balloon against your hair and " +
        "watch your hair reach up to meet the balloon.  This is caused by static electricity, the very same thing that " +
        "causes lightning.  "},
    "saturn":{
      'heading': "Out the window on your left, Saturn's beautiful rings!",
      'facts': "Saturn isn't the only planet that has rings but they certainly are the most beautiful! The rings are " +
        "made of big chunks of ice and rock and instead of one ring its actually a series of tiny rings beside one another. ",
      'image': 'link to sun image',
      'creativity_prompt': "Download the images of Saturn and its rings, carefully use scissors to cut them out.  Then" +
        " play pin the rings on Saturn! Take Saturn to the wall, close your eyes and then spin around and try to tape " +
        "Saturn's rings to it! "},
    "uranus":{
      'heading': "Ready for a gentle landing on Uranus",
      'facts': "Unlike all the other planets Uranus rotates sideways.  Astronomers think this happened because of a big " +
        "collision between Uranus and another object when the universe was still forming. ",
      'image': 'link to sun image',
      'creativity_prompt': "Place a ball on the ground, that'll be Uranus in this experiment.  Take another ball and roll" +
        " it across the floor so it bangs into Uranus.  Does where you hit Uranus change where it moves? Does rolling it " +
        "hard or soft change the result? "},
    "neptune":{
      'heading': "Brrr! Landing on Neptune!",
      'facts': "Neptune is the coldest planet in the solar system and is 30 times further from the sun as earth. ",
      'image': 'link to sun image',
      'creativity_prompt': "Make some Neptune popsicles! Use a blender to puree 1 cup of greek yogurt, 1/2 cup of half" +
        " and half and 1 pint of blueberries. Freeze in popsicle molds, yummy Neptune!"},
    "pluto":{
      'heading': "Watch out! Lots of objects to dodge here in the Kuiper Belt.",
      'facts': "Pluto is the biggest of the many objects past neptune in a region called the Kuiper Belt called dwarf " +
        "planets. The New Horizons spacecraft passed Pluto in 2015 and is still exploring all the amazing objects in the " +
        "Kuiper Belt",
      'image': 'link to sun image',
      'creativity_prompt': "You’ve landed on Pluto but somone forgot to pack a toolbox! What materials can you use from" +
        " around your house to make a hammer, a wrench and a screwdriver."},
    "ufo":{
      'heading': "Did you see that? An alien spaceship!",
      'facts': "In 1977 we launched the voyager space probe loaded with sounds and images all about life on earth. " +
        " The idea was that if any aliens found it they could learn more about us and maybe stop by to say hello!",
      'image': 'link to sun image',
      'creativity_prompt': "We haven't met any aliens,.. yet! What do you think an aliens looks like? sounds like? Draw" +
        " a picture of your new aliens friend.  Make up some fun alien words for 'hello', 'space' and 'planet'"},
    "rocket":{
      'heading': "3-2-1 Blastoff! Your rocket is zooming through the solar system!",
      'facts': "NASA has plans to send humans to an asteroid in 2025 and Mars in the 2030's. After that the possibilities are endless!",
      'image': 'link to sun image',
      'creativity_prompt': "You are an astronaut on the first mission to land on another planet! Write a letter (or draw" +
        " pictures) home to tell all about your journey and what you discover when you land."},
    "comet":{
      'heading': "Look out your window, there goes Halley's comet!",
      'facts': "Halley's comet passes earth every 74-79 years making it the only comet regularly visible from Earth with just the" +
      "naked eye! The next time the comet will be visible from Earth is in the year 2061.",
      'image': 'link to sun image',
      'creativity_prompt': "Cut the bottom half off of a water bottle and discard.  Tape or glue strips of red, orange or yellow tissue" +
      "paper to the cut edge of the top of the water bottle making the comet's tail. Play catch with your comet!"}
  }
}
