<template>
  <header>
    <nav>
      <div class="logo">
        <img src="/Logo.svg" alt="Zachaa logo" />
      </div>
      <div class="menu">
        <nuxt-link to="/">HOME</nuxt-link>
        <nuxt-link to="/work">WORK</nuxt-link>
        <nuxt-link to="/blog">BLOG</nuxt-link>
        <nuxt-link to="/contact">CONTACT</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  img {
    width: 100%;
    max-height: 75px;
  }
}
</style>
