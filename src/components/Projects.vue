<template>
  <div class="projects">
    <div id="container">
      <p>Projects</p>
      <div class="project">
        <img src="/dc.png" class="image" />
        <div class="layer" />
        <div class="layer2" />
        <p class="title">DC Wikipedia</p>
        <p class="description">A Wikipedia of DC Comics Characters using React and Redux in the frontend and Node.js alongwith Express and MongoDB as the backend</p>
        <span class="index">01</span>
        <a href="" class="link"><img src="/github.svg" /></a>
      </div>
      <div class="project">
        <img src="/pokedex.png" class="image" />
        <div class="layer" />
        <span class="index">02</span>
        <div class="layer2" />
        <p class="title">Pokedex</p>
        <p class="description">A Simple React project using Redux to show all the pokemons from the 1st generation</p>
        <a href="" class="link"><img src="/github.svg" /></a>
      </div>
      <div class="project">
        <img src="/elabs.png" class="image" />
        <div class="layer" />
        <span class="index">03</span>
        <div class="layer2" />
        <p class="title">KIIT Elabs</p>
        <p class="description">E Labs is the brainchild of a bunch of college students who wanted to share their skills with their college mates at a better platform</p>
        <a href="" class="link"><img src="/link.png" /></a>
      </div>
      <div class="project">
        <img src="/quiz.png" class="image" />
        <div class="layer" />
        <span class="index">04</span>
        <div class="layer2" />
        <p class="title">Quiz</p>
        <p class="description">Take a quiz on the following 4 topics: Game of Thrones, DC Comics, Marvel Comics or Football. And later check how you fared against others in the Leaderboard.</p>
        <a href="" class="link"><img src="/link.png" /></a>
      </div>
      <div class="project">
        <img src="/jethitech.png" class="image" />
        <div class="layer" />
        <span class="index">05</span>
        <div class="layer2" />
        <p class="title">JethiTech</p>
        <p class="description">JethiTech is an organization that assists you in website designing, Online Marketing, SEO Optimization, Social Media Marketing and Website Hosting.</p>
        <a href="" class="link"><img src="/link.png" /></a>
      </div>
      <div class="project">
        <img src="/chat.png" class="image" />
        <div class="layer" />
        <span class="index">06</span>
        <div class="layer2" />
        <p class="title">DC Wikipedia</p>
        <p class="description">A simple real time Chat Application made using Node.js as backend language, Socket.io as websocket plugin and MongoDB as database to store the messages.</p>
        <a href="" class="link"><img src="/github.svg" /></a>
      </div>
      <div class="project">
        <img src="/sonic.png" class="image" />
        <div class="layer" />
        <span class="index">07</span>
        <div class="layer2" />
        <p class="title">Sonic Run</p>
        <p class="description">A modified version of the famous Dino game from Chrome. Built using Javascript and HTML5 Canvas.</p>
        <a href="" class="link"><img src="/github.svg" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects"
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
        background: rgba(0,0,0,.5);
        transition: .5s;
      }

      .layer2 {
        position: absolute;
        bottom: 0;
        height: 0;
        width: 100%;
        z-index: 1;
        transition: .5s;
        overflow: hidden;
        background: linear-gradient(to top, #55000088, #000000aa);

        & ~ p {
          color: white;
          font-weight: bold;
          z-index: 3;
          margin: 0;
          position: absolute;
          text-align: left;
          transition: .4s;

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
            width: calc(100% - 60px);
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
        transition: .3s ease;
      }

      .link {
        position: absolute;
        top: 90%;
        z-index: 1;
        opacity: 0;
        transition: .3s;
        cursor: pointer;

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
          background: rgba(0,0,0,.75);
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
            transition-duration: .3s;
            transition-delay: .3s;
            opacity: 1;
          }
        }

        .link {
          transition-delay: .2s;
          top: calc(50% - 85px);
          opacity: 1;
        }
      }
    }
  } 
}
</style>