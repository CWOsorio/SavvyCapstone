import html from "html-literal";
import ellaDrawing from '/assets/img/ellaDrawing.jpg';
import fairySound from '/assets/music/fairySound.mp3';
import butterflyBow from '/assets/video/butterflyBow.mp4';
import silverMetallic from '/assets/video/silverMetallic.mp4';
export default st => html `
<section>


<audio autoplay>
<source src="${fairySound}" type="audio/mpeg">
</audio>

<div class = "biopic">
<video width="320" height="240" autoplay loop muted>
<source src="${butterflyBow}" type="video/mp4">
</video>

<video width="320" height="240" autoplay loop muted>
<source src="${silverMetallic}" type="video/mp4">
</video>
</div>

<h3>Bows Bow and More Bows</h3>
            <audio>
            <source src="${fairySound}" type="audio/mpeg">
            </audio>

<p>
  Welcome to my site everyone!! I love to do all types of crafts from making sparkly creations to
to creating personalized gear. My favorite craft of all is making handcrafted bows for bows for my little girl! It's exciting thinking of a new creation and having my daugher share her ideas on wht hair accessory she would love to see next. Hair bows are fun accessories that can be worn on ANY occasion! We have created a wide variety that my daughter and I have named. They can be categorized as being <i>"Playground Bows" ,"I Feel Fancy Today!"</i> or fun holiday designs. I LOVE creating
hair bows for my little girl and I hope you enjoy viewing them as much as I do creating them!
</p>
<div>


<br>
<br>
<main>

</main>
</div>
</section>`;
