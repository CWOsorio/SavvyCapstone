import html from "html-literal";
import ellaDrawing from '/assets/img/ellaDrawing.jpg';
import hairUp from '/assets/music/hairUp.mp3';

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`
<h3>
Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)} F, feels
like ${kelvinToFahrenheit(st.weather.feelsLike)} F
</h3>

<audio autoplay>
<source src="${hairUp}" type="audio/mpeg">
</audio>

<img src="${ellaDrawing}" />


<div class="jumbotron">
    <div class="container">
          <h1>Gabriella's Bows</h1>

    </div>

</div>
</div>

`;

