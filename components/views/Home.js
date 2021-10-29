import html from "html-literal";
import ellaDrawing from '/assets/img/ellaDrawing.jpg';

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`
<h3>
Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)} F, feels
like ${kelvinToFahrenheit(st.weather.feelsLike)} F
</h3>

<<<<<<< HEAD
<img src="${ellaDrawing}" />
=======
<img src="assets/Images/EllaDrawing.jpg">
>>>>>>> 54346611f7448c0214953ed088722bfde7bf1f4a

<div class="jumbotron">
    <div class="container">
          <h1>Gabriella's Bows</h1>

    </div>
  </div?

  `;
