<script>
  let twitter = "assets/twitter.png";
  let linkedIn = "assets/linkedin.png";
</script>

<div class="header-container">
  <div class="social-container">
    <img src={twitter} alt="Twitter logo" />
    <img src={linkedIn} alt="Linkedin logo" />
  </div>
</div>

<style>
  .header-container {
    padding: 1rem 0;
  }
  .social-container {
    display: flex;
    justify-content: center;
  }
  .social-container img {
    width: 32px;
    padding: 0 0.5rem;
    cursor: pointer;
  }
</style>
