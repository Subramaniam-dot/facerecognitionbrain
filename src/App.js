import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'; 
import Rank from './components/Rank/Rank';
import './App.css';

import ParticlesBg from 'particles-bg'

let config = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  // body: "./img/icon.png", // Whether to render pictures
  // rotate: [0, 20],
  alpha: [0.6, 0],
  scale: [1, 0.1],
  position: "center", // all or center or {x:1,y:1,width:100,height:100}
  color: ["random", "#ff0000"],
  cross: "dead", // cross or bround
  random: 15,  // or null,
  g: 5,    // gravity
  // f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
  }
};

class App extends Component {
  render(){
    return(

  
        <div className="App">
          <ParticlesBg type="ball" config={config} bg={true} />
        <Navigation />
        <Logo />
        <Rank/>
        
        <ImageLinkForm />
        
        </div>

    )
  }
}

export default App;
