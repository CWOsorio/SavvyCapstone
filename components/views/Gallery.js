import html from "html-literal";
import ellaDrawing from '/assets/img/ellaDrawing.jpg';
import HairUp from '/assets/music/HairUp.mp3';
import butterflyBow from '/assets/video/butterflyBow.mp4';
import silverMetallic from '/assets/video/silverMetallic.mp4';
import fancy from '/assets/video/fancy.mp4';
import goldfancy from '/assets/video/goldfancy.mp4';

export default st => html`
 <section id= "gallery">

 <div class="jumbotron">
    <div class="container">
          <h1>Gabriella's Bows</h1>

    </div>

    GALLERY

<audio controls>
<source src="${HairUp}" type="audio/mpeg">
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
</video>



<img src="${ellaDrawing}" />
<img src="${ellaDrawing}" />
<img src="${ellaDrawing}" />
<img src="${ellaDrawing}" />
<img src="${ellaDrawing}" />

</section>`

// import html from "html-literal";

// export default (st) => html`
//   <section id="gallery">
//     ${st.pictures.reduce(
//       (html, pic) => html + `<img src="${pic.url}" alt="${pic.title}">`,
//       ``
//     )}
//   </section>
// `;
