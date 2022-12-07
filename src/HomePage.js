import React from 'react';
import 'aframe'
import { motion } from 'framer-motion';
import {Entity, Scene} from 'aframe-react';
import { useNavigate } from 'react-router-dom';

function HomePage (){

    const navigate = useNavigate();

    function gooPage2 (){
        navigate('/page2')
    }

    function gooPage1 (){
        navigate('/page1')
    }

    const device = document.querySelector(".a-orientation-modal");
    const device1 = document.querySelector("a-scene .a-orientation-modal");
    console.log(device)
    console.log(device1)

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        >
        <Scene cursor="rayOrigin: mouse" raycaster="objects:[clickable]"  
        //  device-orientation-permission-ui="
        //  enabled: true; 
        //  denyButtonText: Ne pas activer; 
        //  allowButtonText: Activer ; 
        //  cancelButtonText: Fermer ; 
        //  deviceMotionMessage: Ce site immersif nécessite l'accès aux capteurs de mouvement de votre appareil ;
        //  mobileDesktopMessage: Ce site immersif nécessite l'accès aux capteurs de mouvement de votre appareil;
        //  httpsMessage: Accéder à ce site via HTTPS pour passer en mode VR et accorder l'accès aux capteurs de l'appareil;
        //  "
        device-orientation-permission-ui={{enabled: true }}
        >
        <a-assets>
          {/* <img id="groundTexture" alt='img1' src="https://cdn.aframe.io/a-painter/images/floor.jpg"/> */}
          {/* <img id="skyTexture" alt='img2' src="https://cdn.aframe.io/a-painter/images/sky.jpg"/> */}
          <img id="skyTexturehome" alt='img3' src={require('./street.jpeg')}/>
          <img id="imageTexture" alt='img4' src={require('./marker.png')}/>
        </a-assets>

        {/* <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/> */}
        {/* <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/> */}
        {/* <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/> */}
        <Entity primitive="a-sky"  src="#skyTexturehome"/>
        {/* <Entity particle-system={{preset: 'snow', particleCount: 2000}}/> */}
        <Entity text={{value: 'Hello, A-Frame React!', align: 'center'}} position={{x: 0, y: 2, z: -1}} 

        />


        <Entity primitive="a-image" clickable position={{x: 2, y: 1, z: -3}} src="#imageTexture" scale="0.5 0.5 0.5"
        animation="property: scale; to: 0.75 0.75 0.75; dur: 2000; easing: linear; elasticity: 400; delay: 0; dir: normal; loop: false;"
         events={{click: gooPage1 }}
        />

        <Entity primitive="a-image" clickable position={{x: 0, y: 1, z: -3}} src="#imageTexture" scale="0.5 0.5 0.5"
        animation="property: scale; to: 0.75 0.75 0.75; dur: 1000; easing: linear; elasticity: 400; delay: 0; dir: normal; loop: false;"
         events={{click: gooPage2}}
        />

        {/* <Entity id="box"
          geometry={{primitive: 'box'}}
          material={{color: this.state.color, opacity: 0.6}}
          animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          position={{x: 0, y: 1, z: -3}}
          events={{click: this.changeColor.bind(this)}}>
          <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
                  geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
                  material={{color: '#24CAFF'}}/>
        </Entity> */}

        <Entity primitive="a-camera">
          {/* <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/> */}
        </Entity>
      </Scene>
      </motion.div>
    );
  }


export default HomePage;