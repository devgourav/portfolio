<script>
  import Footer from "./Footer.svelte";
  import Contact from "./Contact.svelte";
  import Skill from "./Skill.svelte";
  import Projects from "./Projects.svelte";
  let myImage = "assets/avatar_nobg.png";
  let resume = "assets/Debadutta_Gourav_Resume.pdf";
  let download = "assets/download.png";

  const scrollToBottom = () => window.scrollTo(0, document.body.scrollHeight);
</script>

<div class="page-container">
  <div class="landing-container">
    <div class="text-container">
      <li>
        <ul class="greeting">Hello, I am</ul>
        <ul class="name">Debadutta Gourav(Dev)</ul>
        <ul class="description">
          Frontend Web Developer making projects on Angular and Svelte
        </ul>
      </li>
    </div>

    <div class="image-container">
      <img class="avatar" src={myImage} alt="my face" />
    </div>

    <div class="btn-container">
      <button class="solid-btn" on:click={scrollToBottom}>Contact</button>

<!--       <a href={resume} download>
        <button class="solid-btn download-btn">
          <span>Resume</span>
          <img src={download} alt="Download Resume" />
        </button>
      </a> -->
    </div>
  </div>

  <Skill />

  <Projects />

  <div id="contact">
    <Contact />
  </div>
</div>

<Footer />

<style>
  .page-container {
    color: rgb(247, 223, 223);
  }
  .landing-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 4rem 0;
    height: 100vh;

    background-image: linear-gradient(
      109.6deg,
      rgba(62, 161, 219, 1) 11.2%,
      rgba(93, 52, 236, 1) 100.2%
    );
  }

  .text-container .description {
    font-size: 1.5rem;
  }

  .text-container {
    line-height: 0.6rem;
  }

  .text-container .name {
    font-size: 3rem;
    font-family: "Frank Ruhl Libre", serif;
    color: var(--button);
  }

  .text-container .greeting {
    font-size: 3rem;
    font-family: "Frank Ruhl Libre", serif;
  }

  .text-container li {
    list-style: none;
  }

  .btn-container {
    margin-top: 3rem;
  }

  .image-container {
    background-image: radial-gradient(
      circle farthest-corner at 1.3% 2.8%,
      rgba(239, 249, 249, 1) 0%,
      rgba(182, 199, 226, 1) 100.2%
    );
    border-radius: 50%;
    margin-top: 5rem;
  }

  .avatar {
    object-fit: contain;
    max-width: 400px;
    position: relative;
    top: 10px;
  }

  .download-btn img {
    object-fit: contain;
    max-width: 16px;
  }

  @media screen and (max-width: 760px) {
    .text-container {
      line-height: 2.5rem;
      text-align: center;
    }

    .landing-container {
      height: auto;
    }

    .avatar {
      max-width: 300px;
    }
  }
</style>
