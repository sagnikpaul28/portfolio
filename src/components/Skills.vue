<template>
    <div class="skills">
      <p>
        <span>{{ title }}</span>
        {{ description }}
      </p>
      <div id="icons">
        <img v-for="(item, index) in skills" :key="index" :src="item.url" :title="item.name" :alt="item.name" />
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
      skills: Translations.Skills.list
    }
  }
}
</script>

<style lang="scss">
.skills {
  padding: 2em 4em;
  background: linear-gradient(#00000099, #000000ee, #000000ff, #111);
  display: flex;

  p {
    flex-basis: 350px;
    margin: 0;
    color: white;
    text-align: left;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    flex-direction: column;

    span {
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

    img {
      height: 90px;
      width: 90px;
      object-fit: contain;
      margin: 60px;
      transition: .3s;

      &:hover {
        transform: scale(1.5);
      }
    }
  }
}
</style>