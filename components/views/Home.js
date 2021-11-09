import html from "html-literal";
import ellaDrawing from '/assets/img/ellaDrawing.jpg';
import HairUp from '/assets/music/HairUp.mp3';
import fairySound from '/assets/music/fairySound.mp3';

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`
<h3>
Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)} F, feels
like ${kelvinToFahrenheit(st.weather.feelsLike)} F
</h3>
<br>
<br>
<br>
<p>WELCOME TO THE WORLD OF BOWS!! I HOPE YOU ENJOY YOUR STAY</p>
<section id="jumbotron">
    <h2>Gabriella loves Bows</h2>
    <br>
    <audio controls>
<source src="${HairUp}" type="audio/mpeg">
</audio>

<audio autoplay>
<source src="${fairySound}" type="audio/mpeg">
</audio>


<br>
<img src="${ellaDrawing}" />
</section>


`;

