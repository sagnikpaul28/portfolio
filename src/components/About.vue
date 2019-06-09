<template>
    <div class="about">
      <div class="container">
        <div class="image-container">
          <img src="/sagnik.jpg" />
        </div>
        <p>
          <span v-for="(word, index1) in getWords" :key="index1">
            <span class="animated" v-for="(character, index2) in getCharacters(word)" :key="index2" @mouseover="onMouseOver(index1, index2)" @mouseout="onMouseOut(index1, index2)" :class="{heartBeat: (showAnimation[index1] ? showAnimation[index1][index2] : false) }">
              {{ character }}
            </span>
            <span>&nbsp;</span>
          </span>
        </p>
      </div>
    </div>
</template>

<script>
import Translations from "../transations/default.json";
import { setTimeout } from 'timers';

export default {
  name: "About",
  data() {
    return {
      about: Translations.About,
      showAnimation: []
    }
  },
  computed: {
    getWords() {
      return this.about.split(' ');
    },
    getCharacters() {
      return function(word) {
        return word.split('');
      };
    }
  },
  methods: {
    onMouseOver(index1, index2) {
      if (!this.showAnimation[index1]) {
        this.$set(this.showAnimation, index1, []);
      }
      this.$set(this.showAnimation[index1], index2, true);
    },
    onMouseOut(index1, index2) {
      setTimeout( () => {
        this.$set(this.showAnimation[index1], index2, false);
      }, 2000)
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

      span {
        display: inline-block;

        span {
          &.heartBeat {
            color: #ff4040;
          }
        }
      }
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
