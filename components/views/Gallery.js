import html from "html-literal";
import ellaDrawing from '/assets/img/ellaDrawing.jpg';
import HairUp from '/assets/music/HairUp.mp3';
import butterflyBow from '/assets/video/butterflyBow.mp4';
import silverMetallic from '/assets/video/silverMetallic.mp4';
import fancy from '/assets/video/fancy.mp4';
import goldfancy from '/assets/video/goldfancy.mp4';
import fairySound from '/assets/music/fairySound.mp3';
import liltouchofclass from '/assets/img/liltouchofclass.jpg';
import playground from '/assets/img/playground.jpg';
import paintSplash from '/assets/img/paintSplash.jpg';
import blueButterfly from '/assets/img/blueButterfly.jpg';
import crownElla from '/assets/img/crownElla.jpg';
import goldie from '/assets/img/goldie.jpg';
import metalic from '/assets/img/metalic.jpg';
import pinkCrown from '/assets/img/pinkCrown.jpg';



export default st => html`
<section id= "gallery">

<div class="jumbotron">
<div class="container">
      <h1>Gabriella's Bows</h1>

      <audio autoplay>
<source src="${fairySound}" type="audio/mpeg">
</audio>

</div>



</div>


<div class="carousel-container">
      <i class="fas fa-chevron-circle-left" id="prevBtn"></i>
      <i class="fas fa-chevron-circle-right" id="nextBtn"></i>
      <div class="carousel-slide">
            <img src="${liltouchofclass}" id="lastClone" alt="" />
            <video width="320" height="240" autoplay loop muted>
            <source src="${goldfancy}" type="video/mp4">
            </video>
            <img src="${liltouchofclass}" />
            <video width="320" height="240" autoplay loop muted>
            <source src="${fancy}" type="video/mp4">
            </video>
            <video width="320" height="240" autoplay loop muted>
            <source src="${silverMetallic}" type="video/mp4">
            </video>
            <img src="${blueButterfly}" />
            <img src="${crownElla}" />
            <img src="${goldie}" />
            <img src="${metalic}" />
            <img src="${paintSplash}" />
            <img src="${pinkCrown}" />
            <video width="320" height="240" autoplay loop muted>
            <source src="${butterflyBow}" type="video/mp4">
            </video>
            <img src="${playground}" />
            <img src="${liltouchofclass}" id="firstClone" alt=""/>
      </div>
</div>

</section>`
