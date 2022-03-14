<template>
  <header>
    <nav>
     
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
    .menu {
        display: flex;
        flex-direction: column;
        line-height: 3;
        height: 100%;
        a {
            font-size: $menu;
        }
        .nuxt-link-exact-active {
            color: $primary_text_hover_color;
        }
    }
</style>
