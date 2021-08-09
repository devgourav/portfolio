<script></script>

<div class="contact">
  <div class="header_text">
    Thanks for taking the time to reach out. How can I help you today?
  </div>
  <div class="form">
    <div class="name_input">
      <label for="">Name</label>
      <input type="text" id="name" />
    </div>

    <div class="email_input">
      <label for="">Email</label>
      <input type="text" id="email" />
    </div>

    <div class="msg_input">
      <label for="message">Message</label>
      <textarea name="message" id="message" rows="6" />
    </div>
  </div>
  <button class="solid-btn">Submit</button>
</div>

<style>
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text);
    font-size: 1.4rem;
    padding: 4rem 0;
    background-color: var(--white);
  }

  .header_text {
    font-size: 2.5rem;
    max-width: 900px;
    text-align: center;
  }
  .form {
    max-width: 640px;
    margin-top: 4rem;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 50% 50%;
  }

  .name_input {
    grid-row: 1;
    grid-column: 1;
  }
  .email_input {
    grid-row: 1;
    grid-column: 2;
  }

  .msg_input {
    grid-row: 2;
    grid-column: 1/3;
  }

  label {
    color: rgb(122, 122, 122);
    margin-bottom: 1rem;
  }

  #message {
    width: 100%;
  }
</style>
