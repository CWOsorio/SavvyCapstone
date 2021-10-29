import html from "html-literal";
import ellaDrawing from '/assets/img/ellaDrawing.jpg';


export default st => html`
 <section id= "gallery"> GALLERY

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
