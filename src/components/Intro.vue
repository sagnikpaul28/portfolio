<template>
  <div id="intro">
    <div class="title">
      <span
        v-for="(character, key) in generatedTitle"
        :key="key"
        class="animated"
        :class="{ rubberBand: isHoveringTitle[key] }"
        @mouseover="onMouseOver('title', key)"
        @mouseout="onMouseOut('title', key)"
      >
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
      >
        {{ character !== " " ? character : "&nbsp;" }}
      </span>
    </div>
    <div class="scroll-down">
      <img src="/scrolldown.png" alt="scroll down"/>
      <p>Scroll down</p>
    </div>
    <SocialMediaIcons />
  </div>
</template>

<script>
import { setTimeout } from "timers";
import SocialMediaIcons from "./SocialMediaIcons";

export default {
  name: "Intro",
  components: {
    SocialMediaIcons
  },
  data() {
    return {
      title: "Hello I'm Sagnik Paul",
      subtitle: "And I'm not your average software engineer",
      isHoveringTitle: [],
      isHoveringSecondaryTitle: []
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
      setTimeout(() => array === "title"
        ? this.$set(this.isHoveringTitle, key, false)
        : this.$set(this.isHoveringSecondaryTitle, key, false), 500);
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#intro {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,.5);
  flex-direction: column;

  span {
    display: inline-block;
    color: white;
    transition: .5s;

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

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.rubberBand {
  animation-name: rubberBand;
}

.animated {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animated.delay-1s {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.animated.delay-2s {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

.animated.delay-3s {
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}

.animated.delay-4s {
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}

.animated.delay-5s {
  -webkit-animation-delay: 5s;
  animation-delay: 5s;
}

@media (print), (prefers-reduced-motion: reduce) {
  .animated {
    -webkit-animation-duration: 1ms !important;
    animation-duration: 1ms !important;
    -webkit-transition-duration: 1ms !important;
    transition-duration: 1ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
  }
}
</style>
