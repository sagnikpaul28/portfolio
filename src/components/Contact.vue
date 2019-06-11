<template>
    <div class="contact">
      <div class="container">
        <p>{{ title }}</p>
        <form>
          <div class="input-group">
            <label :class="{active: labelActive.name}">{{ labels.name }}</label>
            <input type="text" class="input" name="name" @focus="onFocus($event)" @blur="onBlur($event)" v-model="values.name" />
          </div>
          <div class="input-group">
            <label :class="{active: labelActive.email}">{{ labels.email }}</label>
            <input type="email" class="input" name="email" @focus="onFocus($event)" @blur="onBlur($event)" v-model="values.email" />
          </div>
          <div class="input-group">
            <label :class="{active: labelActive.message}">{{ labels.message }}</label>
            <textarea class="input" rows="5" name="message" @focus="onFocus($event)" @blur="onBlur($event)" v-model="values.message" />
          </div>
          <button class="btn" @click="onSubmit()" type="button">{{ labels.submit }}</button>
        </form>
      </div>
      <div class="error-message" :class="{active: error && !success}">{{ errorMessage }}</div>
      <div class="success-message" :class="{active: success}">{{ success }}</div>
    </div>
</template>

<script>
import axios from 'axios';
import { setTimeout, clearTimeout, clearInterval } from 'timers';
import Translations from "../transations/default.json";

export default {
  name: "Contact",
  data() {
    return {
      labelActive: {
        name: false,
        email: false,
        message: false
      },
      values: {
        name: '',
        email: '',
        message: ''
      },
      error: false,
      errorMessage: '',
      success: false,
      timeout: null,
      title: Translations.Contact.title,
      labels: {
        name: Translations.Contact.labels.name,
        email: Translations.Contact.labels.email,
        message: Translations.Contact.labels.message,
        submit: Translations.Contact.labels.submit,
      }
    };
  },
  methods: {
    onFocus(event) {
      this.labelActive[event.target.name] = true;
    },
    onBlur(event) {
      if (event.target.value === '') {
        this.labelActive[event.target.name] = false;
      }
    },
    onSubmit() {
      this.error = false;
      this.timeout ? clearInterval(this.timeout) : '';
      if (!this.values.name) {
        this.errorMessage = 'Name can not be empty';
      }else if (!this.values.email) {
        this.errorMessage = 'Email can not be empty';
      }else if (!this.values.message) {
        this.errorMessage = 'Message can not be empty';
      }else {
        this.errorMessage = 'Submitting your response';
        this.error = true;
        axios.post("https://calm-temple-25672.herokuapp.com/", {
          body: JSON.stringify({
            mailto: "sagnikpaul2882@gmail.com",
            mailfrom: this.email,
            subject: "Contact Form - Portfolio",
            message: `Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`
          })
        }).then(res => {
          this.success = 'Your message has been successfully sent.';
          this.timeout = setTimeout(() => {
            this.success = false;
          }, 3000);
          console.log(res);
        }).catch(err => {
          this.errorMessage = "Some error occured. Please try again."
          this.error = true;
          this.timeout = setTimeout(() => {
            this.error = false;
          }, 3000);
        })
        return;
      }
      this.error = true;
      this.timeout = setTimeout(() => {
        this.error = false;
      }, 3000);
    }
  }
}
</script>

<style lang="scss">
.contact {
  background: #ff4040;
  position: relative;
  padding: 190px 0 80px;
  cursor: url("/circle-white.svg") 18 18, auto;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
    border-top: 120px solid #111;
    border-bottom: 50px solid transparent;
  }

  .container {
    max-width: 700px;
    display: block;
    margin: 0 auto;
    width: 90%;

    p {
      margin: 0 auto 35px;
      color: white;
      font-size: 1.75em;
      font-weight: bold;
      line-height: 1.1;
    }

    form {
      .input-group {
        position: relative;

        label {
          color: white;
          font-weight: 500;
          font-size: 1.1em;
          position: absolute;
          top: 11px;
          left: 12px;
          display: block;
          background: #ff4040;
          padding: 0 5px;
          transition: .3s;

          &.active {
            top: -7px;
            font-size: 0.9em;
          }
        }

        .input {
          width: calc(100% - 34px);
          background: transparent;
          border: 2px solid white;
          margin-bottom: 15px;
          border-radius: 4px;
          padding: 10px 15px;
          color: white;
          font-size: 1.2em;
          outline: 0;
          cursor: inherit;
        }
      }

      .btn {
          width: 100%;
          padding: 12px;
          background: transparent;
          border: 2px solid white;
          border-radius: 4px;
          transition: .3s;
          color: white;
          font-size: 1.2em;
          cursor: pointer;
        }
    }
  }

  .error-message, .success-message {
    border-radius: 4px;
    position: fixed;
    bottom: -70px;
    right: 25px;
    background: #11111188;
    color: white;
    padding: 12px 25px;
    font-size: 1.2em;
    font-weight: bold;
    letter-spacing: -1px;
    border: 2px solid white;
    transition: .5s ease;
    opacity: 0;
    z-index: 10;

    &.active {
      bottom: 20px;
      opacity: 1;
    }
  }
}
</style>
