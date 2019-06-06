<template>
  <div id="social-media">
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
</template>

<script>
export default {
  name: "SocialMediaIcons"
};
</script>

<style lang="scss">
#social-media {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;

  img {
    height: 30px;
    width: 30px;
    margin-top: 30px;
    filter: brightness(0) invert(1);
    transition: 0.5s;

    &:hover {
      filter: none;
      transform: scale(1.1);
    }
  }
}
</style>
