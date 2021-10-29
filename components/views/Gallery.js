import html from "html-literal";
import ellaDrawing from '/assets/img/ellaDrawing.jpg';
import hairUp from '/assets/music/hairUp.mp3';


export default st => html`
 <section id= "gallery"> GALLERY

<audio autoplay>
<source src="${hairUp}" type="audio/mpeg">
</audio>

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
