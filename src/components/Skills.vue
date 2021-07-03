<template>
  <div class="skills">
    <p>
      <span class="title">{{ title }}</span>
      <span class="description">
        <span v-for="(word, index1) in getWords" :key="index1">
          <span
            class="animated"
            v-for="(character, index2) in getCharacters(word)"
            :key="index2"
            @mouseover="onMouseOver(index1, index2)"
            @mouseout="onMouseOut(index1, index2)"
            :class="{
              jello: showAnimation[index1]
                ? showAnimation[index1][index2]
                : false
            }"
          >
            {{ character }}
          </span>
          <span>&nbsp;</span>
        </span>
      </span>
    </p>
    <div id="icons">
      <img
        v-for="(item, index) in skills"
        :key="index"
        :src="item.url"
        :title="item.name"
        :alt="item.name"
      />
    </div>
  </div>
</template>

<script>
import Translations from "../transations/default.json";

export default {
  name: "Skills",
  data() {
    return {
      title: Translations.Skills.title,
      description: Translations.Skills.description,
      skills: Translations.Skills.list,
      showAnimation: []
    };
  },
  computed: {
    getWords() {
      return this.description.split(" ");
    },
    getCharacters() {
      return function(word) {
        return word.split("");
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
      setTimeout(() => {
        this.$set(this.showAnimation[index1], index2, false);
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
.skills {
  padding: 2em 4em;
  background: linear-gradient(#00000099, #000000ee, #000000ff, #111);
  display: flex;
  position: relative;

  p {
    flex-basis: 350px;
    margin: 0;
    color: white;
    text-align: left;
    font-size: 1.5em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 350px;

    span {
      display: inline-block;

      &.jello {
        color: #ff4040;
      }
    }

    .title {
      display: block;
      font-size: 2.5em;
      color: #ff4040;
      font-weight: bold;
      position: relative;
      margin-bottom: 40px;

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 60%;
        height: 5px;
        background: #ff4040;
        left: 0;
      }
    }
  }

  #icons {
    flex: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 350px;

    img {
      height: 90px;
      width: 90px;
      object-fit: contain;
      margin: 60px;
      transition: 0.3s;

      &:hover {
        transform: scale(1.5);
      }
    }
  }
}

@media screen and (max-width: 1320px) {
  .skills {
    display: block;

    p {
      text-align: center;
      position: relative;
      transform: none;
      width: 100%;
      max-width: 750px;
      margin: 0 auto;

      .title {
        margin-bottom: 20px;

        &:after {
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
        }
      }
    }

    #icons {
      margin-left: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .skills {
    padding: 2em;

    p {
      .title {
        font-size: 2em;

        &:after {
          width: 60%;
        }
      }
    }

    #icons {
      img {
        margin: 40px;
      }
    }
  }
}
</style>
