<template>
  <div class="intro">
    <div id="initials">SP.</div>
    <div class="title">
      <span v-for="(word, index1) in getWords(title)" :key="index1">
        <span v-for="(character, index2) in getCharacters(word)" :key="index2" class="animated" :class="{rubberBand: (showAnimationTitle[index1] ? showAnimationTitle[index1][index2] : false), backgroundPrimary: character==='S'||character==='P'}"
        @mouseover="onMouseOverTitle(index1, index2)" @mouseout="onMouseOutTitle(index1, index2)" >
          {{ character }}
        </span>
        <span>&nbsp;</span>
      </span>
    </div>
    <div class="subtitle">
      <span v-for="(word, index1) in getWords(subtitle)" :key="index1">
        <span v-for="(character, index2) in getCharacters(word)" :key="index2" class="animated" :class="{rubberBand: (showAnimationSubtitle[index1] ? showAnimationSubtitle[index1][index2] : false), backgroundPrimary: character==='S'||character==='P'}"
        @mouseover="onMouseOverSubtitle(index1, index2)" @mouseout="onMouseOutSubtitle(index1, index2)" >
          {{ character }}
        </span>
        <span>&nbsp;</span>
      </span>
    </div>
    <div class="scroll-down">
      <img src="/scrolldown.png" alt="scroll down" />
      <p>{{ scrollDown }}</p>
    </div>
    <SocialMediaIcons />
  </div>
</template>

<script>
import { setTimeout } from "timers";
import SocialMediaIcons from "./SocialMediaIcons";
import Translations from "../transations/default.json";

export default {
  name: "Intro",
  components: {
    SocialMediaIcons
  },
  data() {
    return {
      title: Translations.Intro.name,
      subtitle: Translations.Intro.subtitle,
      showAnimationTitle: [],
      showAnimationSubtitle: [],
      scrollDown: Translations.Intro.scrollDown
    };
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
    onMouseOverTitle(index1, index2) {
      if (!this.showAnimationTitle[index1]) {
        this.$set(this.showAnimationTitle, index1, []);
      }
      this.$set(this.showAnimationTitle[index1], index2, true);
    },
    onMouseOutTitle(index1, index2) {
      setTimeout( () => {
        this.$set(this.showAnimationTitle[index1], index2, false);
      }, 1000)
    },
    onMouseOverSubtitle(index1, index2) {
      if (!this.showAnimationSubtitle[index1]) {
        this.$set(this.showAnimationSubtitle, index1, []);
      }
      this.$set(this.showAnimationSubtitle[index1], index2, true);
    },
    onMouseOutSubtitle(index1, index2) {
      setTimeout( () => {
        this.$set(this.showAnimationSubtitle[index1], index2, false);
      }, 1000)
    }
  }
};
</script>

<style lang="scss">
.intro {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  flex-direction: column;

  #initials {
    font-size: 6em;
    color: #ff4040;
    font-weight: bold;
    top: 30px;
    position: absolute;
    left: 30px;
    letter-spacing: 2px;
    width: 160px;
    height: 160px;
    line-height: 165px;
    border: 5px solid #ff404055;
  }

  span {
    display: inline-block;
    color: white;
    transition: 0.5s;

    &.rubberBand {
      color: #ff4040;
      transform: scale(1.1);
    }
  }

  .title {
    margin-top: -4em;
    margin-bottom: 1em;

    span {
      span {
        font-size: 3em;

        &.backgroundPrimary {
          color: #ff4040;
          font-size: 4.5em;
        }
      }
    }
  }

  .subtitle {
    span {
      span {
        font-size: 2.5em;
      }
    }
  }

  .scroll-down {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    img {
      filter: invert(1);
      height: 60px;
      width: 60px;
    }

    p {
      margin-top: 0;
      color: white;
    }
  }
}
</style>
