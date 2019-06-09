<template>
  <div class="social-media">
    <a :href="facebookLink">
      <img src="/facebook.svg" alt="facebook" />
    </a>
    <a :href="linkedInLink">
      <img src="/linkedin.svg" alt="linkedin" />
    </a>
    <a :href="githubLink">
      <img src="/github.svg" alt="github" />
    </a>
  </div>
</template>

<script>
import Translations from "../transations/default.json";

export default {
  name: "SocialMediaIcons",
  data() {
    return {
      facebookLink: Translations.SocialMediaLinks.facebookLink,
      linkedInLink: Translations.SocialMediaLinks.linkedInLink,
      githubLink: Translations.SocialMediaLinks.githubLink
    }
  }
};
</script>

<style lang="scss">
.social-media {
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
