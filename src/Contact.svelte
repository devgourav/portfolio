<script>
  import {
    emailValidator,
    nameValidator,
    requiredValidator,
  } from "./utilities/validators.js";

  import { fade } from "svelte/transition";

  let nameField;
  let emailField;
  let msgField;
  let successMsg;
  let errorMsg;
  let submitting = false;

  const onFocus = () => (errorMsg = "");

  function handleOnSubmit() {
    if (
      !requiredValidator(nameField) ||
      !requiredValidator(emailField) ||
      !requiredValidator(msgField)
    ) {
      errorMsg = "Please fill all the fields.";
    } else if (!emailValidator(emailField)) {
      errorMsg = "Please enter a valid email. i.e abc@xyz.com";
    } else if (!nameValidator(nameField)) {
      errorMsg = "Please enter a valid name";
    } else {
      postForm()
        .then(() => {
          console.log("Form successfully submitted");

          successMsg = "✔️ Thankyou for reaching out.";

          setTimeout(() => {
            successMsg = "";
          }, 2000);
          nameField = emailField = msgField = "";
          submitting = false;
        })
        .catch((error) => {
          console.log("Form could not be submitted.");
          errorMsg =
            "❌ I am having some issues right now. Please contact me from my social links ";
          submitting = false;
        });
    }
  }

  async function postForm() {
    submitting = true;
    let formData = new FormData(document.getElementById("contactForm"));
    const request = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
    return request;
  }
</script>

<div class="contact">
  <div class="header_text">
    Thanks for taking the time to reach out. How can I help you today?
  </div>

  <form
    id="contactForm"
    name="contact"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    on:submit|preventDefault={handleOnSubmit}
  >
    <div class="form">
      <input type="hidden" name="form-name" value="contact" />

      <p style="display: none;">
        <label
          >Don’t fill this out if you’re human: <input
            name="bot-field"
          /></label
        >
      </p>

      <div class="name_input">
        <label for="">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          on:focus={onFocus}
          bind:value={nameField}
        />
      </div>

      <div class="email_input">
        <label for="">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          on:focus={onFocus}
          bind:value={emailField}
        />
      </div>

      <div class="msg_input">
        <label for="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="6"
          on:focus={onFocus}
          bind:value={msgField}
        />
      </div>

      {#if !submitting}
        <button type="submit" class="solid-btn submit-btn">Submit</button>
      {/if}

      {#if submitting}
        <button type="submit" class="border-btn submit-btn">
          <div class="loadingio-spinner-rolling-g24813jisc">
            <div class="ldio-vzgzdesljqo">
              <div />
            </div>
          </div>
        </button>
      {/if}
    </div>
  </form>

  <div class="validation-msg">
    {#if successMsg}
      <span in:fade out:fade style="color: green;">{successMsg}</span>
    {/if}

    {#if errorMsg}
      <span in:fade out:fade style="color: red;"> {errorMsg}</span>
    {/if}
  </div>
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
    padding: 0 1rem;
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

  .submit-btn {
    grid-row: 3;
    grid-column: 1/3;
    justify-self: center;
    width: 6rem;
    height: 42px;
  }

  label {
    color: rgb(122, 122, 122);
    margin-bottom: 1rem;
  }

  #message {
    width: 100%;
  }

  .validation-msg {
    margin-top: 1rem;
    height: 32px;
  }

  @keyframes ldio-vzgzdesljqo {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  .ldio-vzgzdesljqo div {
    position: absolute;
    width: 57px;
    height: 57px;
    border: 7px solid #ffb0bc;
    border-top-color: transparent;
    border-radius: 50%;
  }
  .ldio-vzgzdesljqo div {
    animation: ldio-vzgzdesljqo 0.3194888178913738s linear infinite;
    top: 50px;
    left: 50px;
  }
  .loadingio-spinner-rolling-g24813jisc {
    width: 32px;
    height: 32px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-vzgzdesljqo {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.32);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-vzgzdesljqo div {
    box-sizing: content-box;
  }

  @media screen and (max-width: 760px) {
    .form {
      padding: 0 0.5rem;
    }

    .name_input {
      grid-row: 1;
      grid-column: 1/3;
    }
    .email_input {
      grid-row: 2;
      grid-column: 1/3;
    }
    .msg_input {
      grid-row: 3;
      grid-column: 1/3;
    }

    .submit-btn {
      grid-row: 4;
      grid-column: 1/3;
    }
  }
</style>
