<template>
  <div class="footer">
    <p>©Sagnik</p>
    <div class="footer-social-media">
    <a href="https://www.facebook.com/sagnikpaul10">
      <img src="/facebook.svg" alt="facebook" />
    </a>
    <a href="https://www.linkedin.com/in/sagnikpaul28/">
      <img src="/linkedin.svg" alt="linkedin" />
    </a>
    <a href="https://github.com/sagnikpaul28">
      <img src="/github.svg" alt="github" />
    </a>
  </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
.footer {
  padding: 40px;
  background: #050505;
  box-shadow: 0px -4px 20px 0px #111;
  position: relative;
  display: flex;
  justify-content: space-between;

  p {
    margin: 0;
    text-align: left;
    color: white;
    letter-spacing: 1px;
    font-size: 1.1em;
    font-weight: 600;
  }

  .footer-social-media {
    text-align: right;
    position: relative;

    img {
      height: 20px;
      width: 20px;
      margin: 0 20px;
      filter: brightness(0) invert(1);
      transition: 0.5s;

      &:hover {
        filter: none;
        transform: scale(1.1);
      }
    }
  }
}
</style>
