import html from "html-literal";

export default st => html `

<section>

<h3>HAVE A BOW PARTY WITH SPOTIFY</h3>
<br>
<br>
<h3>Would you like to create customized hair accessories for your little girl! Let me know! Send me your contact information below and I can point you in the right direction! Enjoy the playlist below with your little one while having fun creating your very own customized hair bows!!
</h3>
<br>

<form
  action="https://formspree.io/f/meqvbgry"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="_replyto">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>
<br>
<br>
<iframe src="https://open.spotify.com/embed/playlist/6wAPbA4KFcsMNGLCNl4qY6?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>




</section>`
