<script>
  import Home from "./Home.svelte";
</script>

<main>
  <Home />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap");

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    margin: 0px;
    padding: 0px;
    font-family: "Fira Sans", sans-serif;
  }

  :global(ul) {
    padding: 0px;
  }

  :global(:root) {
    --background: #232946;
    --paragraph: #b8c1ec;
    --headline: #fffffe;
    --button: #ffb0bc;
    --text: #232946;

    --light-background: #d4d8f0;
    --white: #fffffe;
  }

  :global(input, textarea) {
    border-radius: 6px;
    padding: 0.8rem;
  }

  :global(button) {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    margin: 0.5rem;
    cursor: pointer;
  }

  :global(.solid-btn) {
    background-color: var(--button);
    color: var(--text);
    border: 2px solid var(--button);
    transition: linear 0.4s;
  }

  :global(.solid-btn:hover) {
    background-color: var(--white);
  }

  :global(.border-btn) {
    background-color: var(--white);
    color: 2px solid var(--button);
    border: 2px solid var(--button);
  }

  :global(.border-btn:hover) {
    background-color: white;
  }
</style>
