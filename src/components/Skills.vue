<template>
    <div class="skills">
      <p>
        <span>Skills</span>
        Enthusiastic full stack developer with expertise in the following list of programming languages and their plugins and frameworks
      </p>
      <div id="icons">
        <img src="/html.png" alt="html" title="HTML" />
        <img src="/css.png" alt="css" title="CSS" />
        <img src="/sass.png" alt="sass" title="SASS" />
        <img src="/bootstrap.png" alt="bootstrap" title="Bootstrap" />
        <img src="/javascript.png" alt="javascript" title="JavaScript" />
        <img src="/angular.png" alt="angular" title="Angular" />
        <img src="/vue.png" alt="vue" title="Vue" />
        <img src="/react.png" alt="react" title="React" />
        <img src="/redux.png" alt="redux" title="Redux" />
        <img src="/nodejs.png" alt="node" title="Node" />
        <img src="/socket.png" alt="socket" title="Socket.io" />
        <img src="/java.png" alt="java" title="Java" />
        <img src="/php.png" alt="php" title="PHP" />
        <img src="/wordpress.png" alt="wordpress" title="WordPress" />
        <img src="/mongodb.png" alt="mongodb" title="MongpDB" />
        <img src="/mysql.png" alt="mysql" title="MySQL" />
      </div>
    </div>
</template>

<script>
export default {
  name: "Skills"
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