<script>
  import Footer from "./Footer.svelte";
  import Contact from "./Contact.svelte";
  import Skill from "./Skill.svelte";
  let myImage = "assets/mf-avatar.svg";
</script>

<div class="page-container">
  <div class="landing-container">
    <div class="text-container">
      <li>
        <ul class="name">Namaste🙏,</ul>
        <ul class="name">I'm Debadutta Gourav(Dev).</ul>
        <ul class="description">
          I am a Frontend Web Developer making projects on Angular.
        </ul>
      </li>
    </div>

    <div class="image-container">
      <img src={myImage} alt="my face" />
    </div>

    <div class="btn-container">
      <button class="solid-btn">Contact</button>
      <button class="solid-btn">Resume</button>
    </div>
  </div>

  <Skill />

  <Contact />
</div>

<Footer />

<style>
  .page-container {
    color: white;
  }
  .landing-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--charcoal);
    padding: 4rem 0;
    height: 100vh;
    border-bottom: 1px solid grey;
  }

  .text-container .description {
    font-size: 1.5rem;
  }

  .text-container .name {
    font-size: 3rem;
    font-family: "Frank Ruhl Libre", serif;
  }

  .text-container li {
    list-style: none;
  }

  .btn-container {
    margin-top: 3rem;
  }
</style>
