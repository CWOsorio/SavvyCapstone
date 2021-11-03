import html from "html-literal";

export default st => html `

<section id="party">

<h2>HAVE A BOW PARTY WITH SPOTIFY</h2>
<br>
<br>
<p>Would you like to create customized hair accessories for your little girl! Let me know! Send me your contact information below and I can point you in the right direction! Enjoy the playlist below with your little one while your have fun creating your own customized hair bows!!
</p>
<br>
<form action="https://formspree.io/f/{form_id}" method="post">
  <label for="email">Your Email</label>
  <input name="Email" id="email" type="email">
  <button type="submit">Submit</button>
</form>
<br>
<br>
<iframe src="https://open.spotify.com/embed/playlist/6wAPbA4KFcsMNGLCNl4qY6?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>




</section>`
