<script>
  let twitter = "assets/twitter.png";
  let linkedIn = "assets/linkedin.png";
</script>

<div class="social-container">
  <div class="social-links">
    <a href="https://twitter.com/devgrv" target="_blank">
      <img id="twitterLogo" src={twitter} alt="Twitter logo" /></a
    >

    <a href="https://www.linkedin.com/in/devgrv/" target="_blank">
      <img id="linkedLogo" src={linkedIn} alt="Linkedin logo" />
    </a>
  </div>
  <div class="love">
    Made with love ❤️ in <a href="https://svelte.dev/"> Svelte </a>.
  </div>
</div>

<style>
  .social-container {
    background-color: var(--light-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
  }
  .social-container img {
    width: 32px;
    cursor: pointer;
    margin: 0 0.5rem;
  }
  .love {
    margin-top: 1rem;
  }
</style>
