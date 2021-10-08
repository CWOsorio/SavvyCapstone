import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.links)}
  ${Main(st)}
  ${Footer()}`;
}
render(state.Home);
