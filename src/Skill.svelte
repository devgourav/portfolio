<script></script>

<div class="skill">
  <div class="header_text">Skills & Experience</div>

  <div class="content">
    <div class="skill_text">
      <p>
        Since beginning my journey as a developer in 2014 I have worked for a
        MNC, for startups and also as a freelancer collaborating with Indian as
        well as a Foreign clients and collegues.
      </p>
      <p>
        I have worked in many roles as backend, frontend and fullstack developer
        working on languages such a Java, Python, Javascript, Node.js, Angular2+
        etc. I also have experience in AWS cloud.Currently I am working as a
        Senior Frontend developer for <a
          href="https://www.engagely.ai/"
          class="highlight"
        >
          Engagely.ai</a
        >
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
    background-color: var(--light-background);
    height: 60vh;
    font-size: 1.4rem;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: var(--text);
  }

  progress {
    width: 20rem;
    height: 8px;
    background-color: var(--white);
    border: 0;
    border-radius: 6px;
  }
  progress::-webkit-progress-bar {
    width: 20rem;
    height: 8px;
    background-color: var(--white);
    border: 0;
    border-radius: 6px;
  }
  progress::-webkit-progress-value {
    width: 20rem;
    height: 8px;
    background-color: var(--button);
    border: 0;
    border-radius: 6px;
  }
  progress::-moz-progress-bar {
    width: 20rem;
    height: 8px;
    background-color: var(--white);
    border: 0;
    border-radius: 6px;
  }

  .skill_ele {
    margin-bottom: 2rem;
  }

  .skill_list {
    justify-self: end;
    font-size: 1.2rem;
    margin-top: 2rem;
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

  p {
    margin: 2rem 0;
  }
</style>
