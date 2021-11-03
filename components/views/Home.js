import html from "html-literal";
//import ellaDrawing from '/assets/img/ellaDrawing.jpg';
import HairUp from '/assets/music/HairUp.mp3';

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`
<h3>
Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)} F, feels
like ${kelvinToFahrenheit(st.weather.feelsLike)} F
</h3>

<audio controls>
<source src="${HairUp}" type="audio/mpeg">
</audio>






</div>
</div>

`;

