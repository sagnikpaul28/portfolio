<template>
    <div class="about">
      <div class="container">
        <div class="image-container">
          <img src="/sagnik.jpg" />
        </div>
        <div class="content">
          <p>
            <span v-for="(word, index1) in getWords(about1)" :key="index1">
              <span class="animated" v-for="(character, index2) in getCharacters(word)" :key="index2" @mouseover="onMouseOver(1, index1, index2)" @mouseout="onMouseOut(1, index1, index2)" :class="{heartBeat: (showAnimation1[index1] ? showAnimation1[index1][index2] : false) }">
                {{ character }}
              </span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p>
            <span v-for="(word, index1) in getWords(about2)" :key="index1">
              <span class="animated" v-for="(character, index2) in getCharacters(word)" :key="index2" @mouseover="onMouseOver(2, index1, index2)" @mouseout="onMouseOut(2, index1, index2)" :class="{heartBeat: (showAnimation2[index1] ? showAnimation2[index1][index2] : false) }">
                {{ character }}
              </span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p>
            <span v-for="(word, index1) in getWords(about3)" :key="index1">
              <span class="animated" v-for="(character, index2) in getCharacters(word)" :key="index2" @mouseover="onMouseOver(3, index1, index2)" @mouseout="onMouseOut(3, index1, index2)" :class="{heartBeat: (showAnimation3[index1] ? showAnimation3[index1][index2] : false) }">
                {{ character }}
              </span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p>
            <span v-for="(word, index1) in getWords(about4)" :key="index1">
              <span class="animated" v-for="(character, index2) in getCharacters(word)" :key="index2" @mouseover="onMouseOver(4, index1, index2)" @mouseout="onMouseOut(4, index1, index2)" :class="{heartBeat: (showAnimation4[index1] ? showAnimation4[index1][index2] : false) }">
                {{ character }}
              </span>
              <span>&nbsp;</span>
            </span>
          </p>
        </div>
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
      about1: Translations.About.description,
      about2: Translations.About.forte,
      about3: Translations.About.goal,
      about4: Translations.About.other,
      showAnimation1: [],
      showAnimation2: [],
      showAnimation3: [],
      showAnimation4: []
    }
  },
  computed: {
    getWords() {
      return function(sentence) {
        return sentence.split(' ');
      }
    },
    getCharacters() {
      return function(word) {
        return word.split('');
      };
    }
  },
  methods: {
    onMouseOver(arrayNumber, index1, index2) {
      if (arrayNumber === 1) {
        if (!this.showAnimation1[index1]) {
          this.$set(this.showAnimation1, index1, []);
        }
        this.$set(this.showAnimation1[index1], index2, true);
      }else if (arrayNumber === 2) {
        if (!this.showAnimation2[index1]) {
          this.$set(this.showAnimation2, index1, []);
        }
        this.$set(this.showAnimation2[index1], index2, true);
      }else if (arrayNumber === 3) {
        if (!this.showAnimation3[index1]) {
          this.$set(this.showAnimation3, index1, []);
        }
        this.$set(this.showAnimation3[index1], index2, true);
      }else if (arrayNumber === 4) {
        if (!this.showAnimation4[index1]) {
          this.$set(this.showAnimation4, index1, []);
        }
        this.$set(this.showAnimation4[index1], index2, true);
      }
    },
    onMouseOut(arrayNumber, index1, index2) {
      if (arrayNumber === 1) {
        setTimeout( () => {
          this.$set(this.showAnimation1[index1], index2, false);
        }, 1000)
      }else if (arrayNumber === 2) {
        setTimeout( () => {
          this.$set(this.showAnimation2[index1], index2, false);
        }, 1000)
      }else if (arrayNumber === 3) {
        setTimeout( () => {
          this.$set(this.showAnimation3[index1], index2, false);
        }, 1000)
      }else if (arrayNumber === 4) {
        setTimeout( () => {
          this.$set(this.showAnimation4[index1], index2, false);
        }, 1000)
      }
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
        transition: .3s;

        &:hover {
          box-shadow: 4px 8px 20px 0px #222;
        }
      }
    }
    
    .content {
      flex: 1;
    }

    p {
      flex: 1;
      font-size: 1.5em;
      color: white;
      line-height: 1.2;
      text-align: left;
      margin: 5px 0;

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
