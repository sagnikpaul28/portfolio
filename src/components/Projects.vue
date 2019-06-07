<template>
  <div id="projects">
    <div id="container">
      <p>Projects</p>
      <div class="item">
        <img src="/dc.png" />
        <div class="layer" />
        <div class="layer2" />
        <p>DC Wikipedia</p>
        <p>A Wikipedia of DC Comics Characters using React and Redux in the frontend and Node.js alongwith Express and MongoDB as the backend</p>
        <span>01</span>
      </div>
      <div class="item">
        <img src="/pokedex.png" />
        <div class="layer" />
        <span>02</span>
        <div class="layer2" />
        <p>Pokedex</p>
        <p>A Simple React project using Redux to show all the pokemons from the 1st generation</p>
      </div>
      <div class="item">
        <img src="/elabs.png" />
        <div class="layer" />
        <span>03</span>
        <div class="layer2" />
        <p>KIIT Elabs</p>
        <p>E Labs is the brainchild of a bunch of college students who wanted to share their skills with their college mates at a better platform</p>
      </div>
      <div class="item">
        <img src="/quiz.png" />
        <div class="layer" />
        <span>04</span>
        <div class="layer2" />
        <p>Quiz</p>
        <p>Take a quiz on the following 4 topics: Game of Thrones, DC Comics, Marvel Comics or Football. And later check how you fared against others in the Leaderboard.</p>
      </div>
      <div class="item">
        <img src="/jethitech.png" />
        <div class="layer" />
        <span>05</span>
        <div class="layer2" />
        <p>JethiTech</p>
        <p>JethiTech is an organization that assists you in website designing, Online Marketing, SEO Optimization, Social Media Marketing and Website Hosting.</p>
      </div>
      <div class="item">
        <img src="/chat.png" />
        <div class="layer" />
        <span>06</span>
        <div class="layer2" />
        <p>DC Wikipedia</p>
        <p>A simple real time Chat Application made using Node.js as backend language, Socket.io as websocket plugin and MongoDB as database to store the messages.</p>
      </div>
      <div class="item">
        <img src="/sonic.png" />
        <div class="layer" />
        <span>07</span>
        <div class="layer2" />
        <p>Sonic Run</p>
        <p>A modified version of the famous Dino game from Chrome. Built using Javascript and HTML5 Canvas.</p>
      </div>
    </div>>
  </div>
</template>

<script>
export default {
  name: "Projects"
};
</script>

<style lang="scss">
#projects {
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

    .item {
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

        & ~ p {
          color: white;
          font-weight: bold;
          z-index: 3;
          margin: 0;
          position: absolute;
          text-align: left;
          transition: .4s;

          &:nth-of-type(1) {
            top: calc(50% - 20px);
            transform: translateY(-50%);
            font-size: 2em;
            width: calc(100% - 30px);
          }

          &:nth-of-type(2) {
            top: calc(100% - 30px);
            font-size: 1.2em;
            line-height: 1;
            opacity: 0;
            width: calc(100% - 60px);
          }
        }
      }

      img {
        width: 100%;
        object-fit: cover;
      }

      span {
        position: absolute;
        top: -40px;
        color: #bbbbbb;
        z-index: 2;
        font-size: 7em;
        font-weight: bold;
        transition: .3s ease;
      }

      &:nth-of-type(even) {
        transform: translateY(100px);
        margin-left: 30px;
        margin-right: 70px;

        .layer2 {
          right: 0;
          background: linear-gradient(to right, #55000088, #000000aa);
        }

        span {
          right: -30px;
        }

        p {
          right: 15px;
          text-align: right;
        }
      }

      &:nth-of-type(odd) {
        margin-left: 70px;
        margin-right: 30px;

        .layer2 {
          left: 0;
          background: linear-gradient(to right, #000000aa, #55000088);
        }

        span {
          left: -30px;
        }

        p {
          left: 15px;
          text-align: left;
        }
      }

      &:hover {
        .layer {
          background: rgba(0,0,0,.75);
        }

        .layer2 {
          height: 100%;
        }

        span {
          color: white;
          top: -65px;

          &:nth-of-type(even) {
            span {
              left: -40px;
            }
          }

          &:nth-of-type(odd) {
            span {
              right: -40px;
            }
          }
        }

        p {
          &:nth-of-type(1) {
            top: calc(50% - 65px);
          }

          &:nth-of-type(2) {
            top: calc(50% - 30px);
            transition-duration: .3s;
            transition-delay: .3s;
            opacity: 1;
          }
        }
      }
    }
  } 
}
</style>