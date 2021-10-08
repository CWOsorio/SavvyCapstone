const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => `
<div class="jumbotron">
    <div class="container">

      <h1>Gabriella's Bows</h1>
      <div style="width:100%;height:0;padding-bottom:10%;position:relative;"><iframe src="https://giphy.com/embed/LU4yhvZPbccSc" width="100%" height="75%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
    </div>
  </div>
   <h3>
   Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)} F, feels
   like ${kelvinToFahrenheit(st.weather.feelsLike)}F
 </h3>

  `;
