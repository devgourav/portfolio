<script>
  import { projects as projects } from "./data/projects.ts";
  const projectList = projects;
</script>

<div class="project">
  <div class="header_text">Projects</div>

  <div class="project-list">
    {#each projectList as project}
      <div class="project-card">
        <div class="project-top">
          <div class="folder">
            <img src="assets/folder.svg" alt="Folder" />
          </div>

          <div class="link">
            {#if project.link !== ""}
              <a href={project.link} target="_blank">
                <img src="assets/link.svg" alt="Folder" /></a
              >
            {/if}
          </div>
        </div>

        <div class="project-mid">
          <div class="name">{project.name}</div>

          <div class="desc">
            {project.desc}
          </div>
          Build With: {project.buildWith}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .project {
    background-color: #4e69e4;
    height: auto;
    padding: 4rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }

  .header_text {
    font-size: 2.5rem;
    text-align: center;
  }

  .project-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    grid-gap: 3rem;
    min-width: 340px;
    max-width: 70%;

    margin-top: 4rem;
  }

  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .project-mid .name {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .project-mid .desc {
    line-height: 1.5rem;
    margin-bottom:1rem;
  }

  .folder {
    width: 40px;
    height: 40px;
    filter: invert(98%) sepia(29%) saturate(6351%) hue-rotate(287deg)
      brightness(100%) contrast(106%);
  }

  .link {
    width: 24px;
    height: 24px;
    filter: invert(90%) sepia(99%) saturate(0%) hue-rotate(93deg)
      brightness(107%) contrast(100%);
  }

  .link:hover {
    filter: invert(98%) sepia(29%) saturate(6351%) hue-rotate(287deg)
      brightness(100%) contrast(106%);
  }

  .project-card {
    padding: 2rem;
    border-radius: 8px;
    font-size: 1rem;
    border: 1px solid white;
    cursor: pointer;
    min-width: 320px;
    max-width: 340px;
    animation: moveDown 0.3s linear forwards;
  }

  .project-card:hover .name {
    color: #ffb0bc;
  }

  .project-card:hover {
    animation: moveUp 0.3s linear forwards;
  }

  @keyframes moveUp {
    100% {
      transform: translateY(-8px);
    }
  }

  @keyframes moveDown {
    100% {
      transform: translateY(8px);
    }
  }

  /* @media screen and (max-width: 760px) {
    .project-list {
      grid-template-columns: 1fr;
    }
  } */
</style>
