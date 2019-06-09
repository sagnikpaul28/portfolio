<template>
    <div class="about">
      <div class="container">
        <div class="image-container">
          <img src="/sagnik.jpg" />
        </div>
        <p>{{ about }}</p>
      </div>
    </div>
</template>

<script>
import Translations from "../transations/default.json";

export default {
  name: "About",
  data() {
    return {
      about: Translations.About
    }
  }
}
</script>

<style lang="scss">
.about {
  background: #111;
  padding: 5em 0 10em;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;

    .image-container {
      flex-basis: 300px;
      position: relative;
      margin-right: 50px;
      
      img {
        height: auto;
        width: 100%;
        border-radius: 50%;
        border: 3px solid white;
      }

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    p {
      flex: 1;
      font-size: 1.5em;
      color: white;
      line-height: 1.2;
      text-align: left;

    }
  }

  @media screen and (max-width: 768px) {
    .container {
      flex-direction: column;

      .image-container {
        margin: 0;

        img {
          max-width: 250px;
        }
      }

      p {
        margin-top: -20px;
        text-align: center;
      }
    }
  }
}
</style>
