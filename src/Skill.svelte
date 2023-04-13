<script></script>

<div class="skill">
  <div class="header_text">About me</div>

  <div class="content">
    <div class="skill_text">
      <p>
        Hello! My name is Dev and I enjoy creating things that live on the
        internet. My interest in web development started back in 2012 when I
        worked on my college's website. After which I started a web dev club in
        my college.
      </p>

      <p>
        Since 2014 I have worked in various service and product based companies. 
        Currently I am working as a Senior developer
        for <a href="https://www.siemens-advanta.com/" class="highlight">
          Siemens Advanta </a> in Pune, India.
      </p>
    </div>
    <div class="skill_list">
      <div>Here are a few technologies I've been working with recently:</div>

      <ul>
        <li>JavaScript (ES6+)</li>
        <li>Golang</li>
        <li>Angular(v2-v12)</li>
        <li>Svelte</li>
        <li>AWS Cloud</li>
      </ul>
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

  /* progress {
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
  } */
  /* 
  .skill_ele {
    margin-bottom: 2rem;
  } */

  .skill_list {
    justify-self: end;
    margin-top: 2rem;
  }
  .content {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-between;
    grid-gap: 10px;
    max-width: 900px;
    margin-top: 3rem;
    line-height: 2rem;
  }

  .header_text {
    font-size: 2.5rem;
    max-width: 900px;
    text-align: center;
  }

  p {
    margin: 2rem 0;
  }

  ul {
    list-style: none;
    font-size: 1.2rem;
  }

  /* li {
    margin: 8px 0px;
  } */

  li::before {
    content: "▶";
    color: #ffb0bc;
    margin-right: 4px;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 760px) {
    .content {
      grid-template-columns: 1fr;
      justify-content: center;
      max-width: 760px;
      padding: 1rem;
    }

    .skill_list {
      justify-self: center;
    }

    .skill {
      height: auto;
    }
  }
</style>
