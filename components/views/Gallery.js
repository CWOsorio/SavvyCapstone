import html from "html-literal";
import ellaDrawing from '/assets/img/ellaDrawing.jpg';
import hairUp from '/assets/music/hairUp.mp3';
import butterflyBow from '/assets/video/butterflyBow.mp4';
import silverMetallic from '/assets/video/silverMetallic.mp4';

export default st => html`
 <section id= "gallery"> GALLERY

<audio autoplay>
<source src="${hairUp}" type="audio/mpeg">
</audio>

<video width="320" height="240" autoplay loop muted>
<source src="${butterflyBow}" type="video/mp4">
</video>

<video width="320" height="240" autoplay loop muted>
<source src="${silverMetallic}" type="video/mp4">
</video>

<img src="${ellaDrawing}" />
<img src="${ellaDrawing}" />
<img src="${ellaDrawing}" />
<img src="${ellaDrawing}" />
<img src="${ellaDrawing}" />

</section>`;

// import html from "html-literal";

// export default (st) => html`
//   <section id="gallery">
//     ${st.pictures.reduce(
//       (html, pic) => html + `<img src="${pic.url}" alt="${pic.title}">`,
//       ``
//     )}
//   </section>
// `;
