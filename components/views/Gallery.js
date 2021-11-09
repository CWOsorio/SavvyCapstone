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


export default st => html`
 <section id= "gallery">

 <div class="jumbotron">
    <div class="container">
          <h1>Gabriella's Bows</h1>

          <audio autoplay>
<source src="${fairySound}" type="audio/mpeg">
</audio>

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
            <img src="${playground}" />
            <video width="320" height="240" autoplay loop muted>
            <source src="${butterflyBow}" type="video/mp4">
            </video>
            <img src="${playground}" />
            <img src="${liltouchofclass}" id="firstClone" alt=""/>

      </div>
</div>
<!-- <button id="prevBtn">Prev</button>
<button id="nextBtn">Next</button> -->

<!-- <audio controls>
<source src="${HairUp}" type="audio/mpeg">
</audio>

 <audio controls>
<source src="${fairySound}" type="audio/mpeg">
</audio>

<video width="320" height="240" autoplay loop muted>
<source src="${butterflyBow}" type="video/mp4">
</video>

<video width="320" height="240" autoplay loop muted>
<source src="${silverMetallic}" type="video/mp4">
</video>

<video width="320" height="240" autoplay loop muted>
<source src="${fancy}" type="video/mp4">
</video>

<video width="320" height="240" autoplay loop muted>
<source src="${goldfancy}" type="video/mp4">
</video> -->





</section>`
