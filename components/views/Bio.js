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

<p>On my site you will see handcrafted bows that any little girl
will enjoy wearing. Hair bows are fun accessories that can be worn on ANY occasion! We
have a wide variety that range from "Playground Bows" to "I Feel Fancy Today!" I enjoy creating
hair bows for my little girl and I hope you enjoy viewing them as much as I do creating them!
</p>
<div>
<!-- It contains an article -->

<br>
<br>
<main>

</main>
</div>
</section>`;
