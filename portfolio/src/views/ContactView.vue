<template>
  <section class="contact-container">
  <h2 class="section-title">Contact me</h2>
  <div class="contact-content">
    <div class="contact-section">
      <div class="mail-box">
        <form ref="form" @submit.prevent="sendEmail" class="mail-form">
          <input type="text" name="name" id="name" placeholder="Your Name ...">
          <input type="text" name="email" id="email" placeholder="Your Mail ...">
          <textarea name="message" cols="60" rows="5" placeholder="Your Message ..."></textarea>
          <div class="test">
            <input class="btn animate" type="submit" value="Submit">
            <div class="icon-rs">
              <a href="tel:0762041007">
                <font-awesome-icon icon="fa-solid fa-mobile-screen-button" class="icon" size="xl" />
              </a>
              <a class="animate" href="mailto:vincent.becker@epitech.eu">
                <font-awesome-icon icon="fa-solid fa-envelope" class="icon" size="xl" />
              </a>
              <a class="animate" href="https://www.facebook.com/vincent.becker.7">
                <font-awesome-icon icon="fa-brands fa-facebook" class="icon" size="xl"/>
              </a>
              <a class="animate" href="https://www.instagram.com/vinc_bf/?hl=fr">
                <font-awesome-icon icon="fa-brands fa-instagram" class="icon" size="xl"/>
              </a>
              <a class="animate" href="https://twitter.com/Gungnir2307">
                <font-awesome-icon icon="fa-brands fa-twitter" class="icon" size="xl"/>
              </a>
              <a class="animate" href="https://www.linkedin.com/in/vincent-becker1/">
                <font-awesome-icon icon="fa-brands fa-linkedin" class="icon" size="xl"/>
              </a>
              <a class="animate" href="https://github.com/Gungnir54">
                <font-awesome-icon icon="fa-brands fa-github" class="icon" size="xl"/>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
 </section>
</template>

<script setup>
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

function sendEmail() {
  const form = ref(null);
  const serviceID = 'service_1q2q8qf';
  const templateID = 'template_1q2q8qf';
  const userID = 'user_1q2q8qf';

  emailjs.sendForm(serviceID, templateID, form, userID)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
}
</script>

<style lang="scss" scoped>
.contact-container {
  background-color: rgba(32, 32, 32, 0.8);
  border-radius: 1%;
  margin-top: 2%;
  width: 100%;
}

.contact-section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: auto;
}

.test {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
}

.icon-rs {
  width: 50%;
  text-align: end;
  a {
    margin: 0.5% 1%;
    color: var(--white-font-color);
    text-decoration: none;

    &:hover {
      color: var(--grey-font-color);
    }

    &:active {
      color: var(--activated-link);
    }
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  font-size: 15px;
}

.mail-form {
  display: flex;
  flex-direction: column;
  border: none;

  input {
    font-size: 14px;
    padding: 15px;
    margin: 0 0 20px 0;
    background-color: #333333;
    border: 1px solid #333333;
    color: var(--white-font-color);

    &:hover {
      background-color: var(--activated-link);
    }

    &:focus {
      outline-color: var(--grey-font-color);
    }
  }

  textarea {
    font-size: 14px;
    padding: 15px;
    background-color: #333333;
    resize: none;
    border: 1px solid #333333;
    color: var(--white-font-color);

    &:hover {
      background-color: var(--activated-link);
    }

    &:focus {
      outline-color: var(--grey-font-color);
    }
  }

  .btn {
    margin-top: 30px;
    padding: 10px 0;
    width: 125px;
    height: auto;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    background: transparent;
    color: var(--white-font-color);
    border: 2px solid var(--grey-font-color);

    &:hover {
      background-color: var(--grey-font-color);
      color: var(--white-font-color);
    }

    &:active {
      background-color: var(--activated-link);
    }
  }
}

.mail-box {
  width: 90%;
}

.animate {
  transition: all .5s;
  -moz-transition: all .5s;
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  -ms-transition: all .5s;
}
</style>
