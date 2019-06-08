<template>
    <div id="about">
      <div class="container">
        <div class="image-container">
          <img src="/sagnik.jpg" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="scss">
#about {
  background: #111;
  padding: 5em 0 10em;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    .image-container {
      flex-basis: 300px;
      position: relative;
      margin-right: 50px;
      
      img {
        height: auto;
        width: 100%;
        border-radius: 50%;
        border: 3px solid white;
      }

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    p {
      flex: 1;
      font-size: 1.5em;
      color: white;
      line-height: 1.2;
      text-align: left;

    }
  }
}
</style>
