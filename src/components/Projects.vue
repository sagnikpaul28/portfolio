<template>
  <div class="projects">
    <div id="container">
      <p>{{title}}</p>
      <div class="project" v-for="(project, index) in projects" :key="index">
        <img :src="project.image" class="image" :alt="project.name" />
        <div class="layer" />
        <div class="layer2" />
        <p class="title">{{ project.name }}</p>
        <p class="description">{{ project.description }}</p>
        <span class="index">{{ index + 1 }}</span>
        <a :href="project.url" class="link" >
          <img src="/github.svg" alt="github" v-if="project.linkType === 'github'" />
          <img src="/link.png" alt="link" v-if="project.linkType === 'link'" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Translations from "../transations/default.json";

export default {
  name: "Projects",
  data() {
    return {
      title: Translations.Projects.title,
      projects: Translations.Projects.items
    };
  }
};
</script>

<style lang="scss">
.projects {
  background: #111;
  min-height: 100vh;
  padding: 200px 0;

  #container {
    width: 90%;
    margin: 0 auto;
    position: relative;
    background: #ff4040;
    padding: 3em 0;
    display: flex;
    flex-flow: wrap;
    cursor: url("/circle-white.svg") 18 18, auto;

    &:before {
      content: "";
      height: 0;
      width: 100%;
      position: absolute;
      border-top: 100px solid transparent;
      top: -100px;
      left: 0;
      border-left: 90vw solid #ff4040;
    }

    &:after {
      content: "";
      height: 0;
      width: 100%;
      position: absolute;
      border-bottom: 100px solid transparent;
      bottom: -100px;
      right: 0;
      border-right: 90vw solid #ff4040;
    }

    > p {
      position: absolute;
      top: -160px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 4em;
      color: white;
      font-weight: bold;
    }

    .project {
      position: relative;
      flex-basis: calc(50% - 100px);
      margin: 20px 0 40px;

      .layer {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, 0.5);
        transition: 0.5s;
      }

      .layer2 {
        position: absolute;
        bottom: 0;
        height: 0;
        width: 100%;
        z-index: 1;
        transition: 0.5s;
        overflow: hidden;
        background: linear-gradient(to top, #55000088, #000000aa);

        & ~ p {
          color: white;
          font-weight: bold;
          z-index: 3;
          margin: 0;
          position: absolute;
          text-align: left;
          transition: 0.4s;

          &.title {
            top: calc(50% - 20px);
            transform: translateY(-50%);
            font-size: 2em;
            width: calc(100% - 30px);
          }

          &.description {
            top: calc(100% - 30px);
            font-size: 1.2em;
            line-height: 1;
            opacity: 0;
            width: calc(100% - 120px);
          }
        }
      }

      .image {
        width: 100%;
        object-fit: cover;
      }

      .index {
        position: absolute;
        top: -40px;
        color: #bbbbbb;
        z-index: 2;
        font-size: 7em;
        font-weight: bold;
        transition: 0.3s ease;
      }

      .link {
        position: absolute;
        top: 90%;
        z-index: 1;
        opacity: 0;
        transition: 0.3s;
        cursor: pointer;
        z-index: 3;

        img {
          height: 40px;
          width: 40px;
          filter: brightness(0) invert(1);
        }
      }

      &:nth-of-type(even) {
        transform: translateY(100px);
        margin-left: 30px;
        margin-right: 70px;

        .index {
          right: -30px;
        }

        p {
          right: 15px;
          text-align: right;
        }

        .link {
          left: 20px;
        }
      }

      &:nth-of-type(odd) {
        margin-left: 70px;
        margin-right: 30px;

        .index {
          left: -30px;
        }

        p {
          left: 15px;
          text-align: left;
        }

        .link {
          right: 20px;
        }
      }

      &:hover {
        .layer {
          background: rgba(0, 0, 0, 0.75);
        }

        .layer2 {
          height: 100%;
        }

        .index {
          color: white;
          top: -65px;
        }

        p {
          &.title {
            top: calc(50% - 65px);
          }

          &.description {
            top: calc(50% - 30px);
            transition-duration: 0.3s;
            transition-delay: 0.3s;
            opacity: 1;
          }
        }

        .link {
          transition-delay: 0.2s;
          top: calc(50% - 85px);
          opacity: 1;
        }
      }
    }
  }
}
</style>
