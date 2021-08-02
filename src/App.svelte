<script>
  import Home from "./Home.svelte";
</script>

<main>
  <Home />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap");

  :global(body) {
    margin: 0px;
    padding: 0px;
    font-family: "Fira Sans", sans-serif;
  }

  :global(:root) {
    --charcoal: #264653ff;
    --persian-green: #2a9d8fff;
    --orange-yellow-crayola: #e9c46aff;
    --sandy-brown: #f4a261ff;
    --burnt-sienna: #e76f51ff;
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
    background-color: var(--persian-green);
    color: white;
    border: 2px solid var(--persian-green);
  }

  :global(.solid-btn:hover) {
    background-color: white;
    color: var(--persian-green);
    border: 2px solid var(--persian-green);
  }

  :global(.border-btn) {
    background-color: white;
    color: 2px solid var(--persian-green);
    border: 2px solid var(--persian-green);
  }

  :global(.border-btn:hover) {
    background-color: white;
    color: 2px solid var(--persian-green);
    border: 2px solid var(--persian-green);
  }
</style>
