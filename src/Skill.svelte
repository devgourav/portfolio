<script></script>

<div class="skill">
  <div class="header_text">Skills & Experience</div>

  <div class="content">
    <div class="skill_text">
      <p>
        Since my beginning my journey as a developer in 2014 I have done work
        for MNC, for startups and also worked as a freelance developer
        collaborating with Indian as well as a Foreign clients and collegues.
      </p>
      <p>
        I have a worked in various roles and worn various hats of backend,
        frontend and fullstack developer working on languages such a Java,
        Python, Javascript, Node.js, Angular2+ etc. Currently I am work as a
        Senior Frontend developer.
      </p>
    </div>
    <div class="skill_list">
      <div class="skill_ele">
        <div class="skill_name">Angular (8.5/10)</div>
        <div class="skill_rate">
          <progress max="100" value="85" />
        </div>
      </div>

      <div class="skill_ele">
        <div class="skill_name">Javascript/Typescript (8/10)</div>
        <div class="skill_rate">
          <progress max="100" value="80" />
        </div>
      </div>

      <div class="skill_ele">
        <div class="skill_name">HTML/CSS (8/10)</div>
        <div class="skill_rate">
          <progress max="100" value="80" />
        </div>
      </div>

      <div class="skill_ele">
        <div class="skill_name">Node.js (7/10)</div>
        <div class="skill_rate">
          <progress max="100" value="70" />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .skill {
    background-color: var(--charcoal);
    height: 100vh;
    font-size: 1.4rem;
    padding: 4rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  progress {
    width: 20rem;
    height: 8px;
    background-color: var(--burnt-sienna);
    border: none;
    border-radius: 6px;
  }
  progress::-webkit-progress-bar {
    width: 20rem;
    height: 8px;
    background-color: var(--burnt-sienna);
    border: none;
    border-radius: 6px;
  }
  progress::-webkit-progress-value {
    width: 20rem;
    height: 8px;
    background-color: var(--burnt-sienna);
    border: none;
    border-radius: 6px;
  }
  progress::-moz-progress-bar {
    width: 20rem;
    height: 8px;
    background-color: var(--burnt-sienna);
    border: none;
    border-radius: 6px;
  }

  .skill_ele {
    margin-bottom: 2rem;
  }

  .skill_list {
    justify-self: end;
    font-size: 1.2rem;
  }
  .content {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-between;
    grid-gap: 10px;
    width: 900px;
    margin-top: 3rem;
  }

  .header_text {
    font-size: 2.5rem;
    max-width: 900px;
    text-align: center;
  }
</style>
