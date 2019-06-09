<template>
  <div class="intro">
    <div id="initials">SP.</div>
    <div class="title">
      <span v-for="(character, key) in generatedTitle" :key="key" class="animated" :class="{ rubberBand: isHoveringTitle[key], backgroundPrimary: character==='S'||character==='P' }"
        @mouseover="onMouseOver('title', key)" @mouseout="onMouseOut('title', key)">
        {{ character !== " " ? character : "&nbsp;" }}
      </span>
    </div>
    <div class="subtitle">
      <span
        v-for="(character, key) in generatedSecondTitle"
        :key="key"
        class="animated"
        :class="{ rubberBand: isHoveringSecondaryTitle[key] }"
        @mouseover="onMouseOver('secondaryTitle', key)"
        @mouseout="onMouseOut('secondaryTitle', key)"
        >{{ character !== " " ? character : "&nbsp;" }}
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
      isHoveringTitle: [],
      isHoveringSecondaryTitle: [],
      scrollDown: Translations.Intro.scrollDown
    };
  },
  computed: {
    generatedTitle() {
      return Array.from(this.title);
    },
    generatedSecondTitle() {
      return Array.from(this.subtitle);
    }
  },
  methods: {
    onMouseOver(array, key) {
      array === "title"
        ? this.$set(this.isHoveringTitle, key, true)
        : this.$set(this.isHoveringSecondaryTitle, key, true);
    },
    onMouseOut(array, key) {
      setTimeout(
        () =>
          array === "title"
            ? this.$set(this.isHoveringTitle, key, false)
            : this.$set(this.isHoveringSecondaryTitle, key, false),
        500
      );
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
      font-size: 3em;

      &.backgroundPrimary {
        color: #ff4040;
        font-size: 4.5em;
      }
    }
  }

  .subtitle {
    span {
      font-size: 2.5em;
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
