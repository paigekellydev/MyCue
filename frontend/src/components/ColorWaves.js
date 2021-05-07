import React from 'react';
import pinkLayer1 from '/Users/paigekelly/flatiron/projects/cueme/frontend/src/images/pink-layer-1.png'
import orangeLayer1 from '/Users/paigekelly/flatiron/projects/cueme/frontend/src/images/orange-layer-1.png'
import lightOrangeLayer from '/Users/paigekelly/flatiron/projects/cueme/frontend/src/images/light-orange-layer.png'
import orangeLayer2 from '/Users/paigekelly/flatiron/projects/cueme/frontend/src/images/orange-layer-2.png'
import pinkLayer2 from '/Users/paigekelly/flatiron/projects/cueme/frontend/src/images/pink-layer-2.png'

export default function ColorWaves() {
    return (
        <div class="color-waves">
            <img id="pink-1" class="color-waves" src={pinkLayer1} alt="pink"/>
            <img id="orange-1" class="color-waves" src={orangeLayer1} alt="pink"/>
            <img id="light-orange" class="color-waves" src={lightOrangeLayer} alt="pink"/>
            <img id="orange-2" class="color-waves" src={orangeLayer2} alt="pink"/>
            <img id="pink-2" class="color-waves" src={pinkLayer2} alt="pink"/>
        </div>
    )
}
