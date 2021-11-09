import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import axios from "axios";
import Navigo from "navigo";
import { capitalize } from "lodash";
import dotenv from "dotenv";
dotenv.config();

const router = new Navigo(window.location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;

  router.updatePageLinks();

  addEventListeners(st);
}

// 4. Event Handler Function
function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );
    // adding Javascript for Gallery Page
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    //gallery buttons
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    //counter
    let counter = 1;
    const size = carouselImages[0].clientWidth;

    carouselSlide.style.transform = 'translateX(' +(size * counter)+ 'px)';

    //button listeners

    nextBtn.addEventListener('click',()=>{
      if(counter >= carouselImages.length -1) return;
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      carouselSlide.style.transform = 'translateX(' +(size * counter)+ 'px)';
    });

    prevBtn.addEventListener('click',()=>{
      if (counter <= 0) return;
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter--;
      carouselSlide.style.transform = 'translateX(' +(-size * counter)+ 'px)';
    });

    carouselSlide.addEventListener('transitionend', () => {
      if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' +(-size * counter)+ 'px)';

      }
       if (carouselImages[counter].id === 'firstClone') {
          carouselSlide.style.transition = "none";
          counter = carouselImages.length - counter;
          carouselSlide.style.transform = 'translateX(' +(-size * counter)+ 'px)';
       }
    });



  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
    }
router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";
    if (page === "Home") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
        )
        .then(response => {
          state.Home.weather = {};
          state.Home.weather.city = response.data.name;
          state.Home.weather.temp = response.data.main.temp;
          state.Home.weather.feelsLike = response.data.main.feels_like;
          state.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch(err => console.log(err));
    }
    if (page === "Bow Party") {
      axios
      .get(
        ``)    }
  }
});



router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();


