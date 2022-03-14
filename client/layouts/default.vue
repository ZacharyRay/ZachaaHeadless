<template>
  <div class="main-container">
    <div class="nav-container">
      <Header />
      <Footer />
    </div>
    <div class="body-container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  layout: "homepage",
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: row;
}
.nav-container {
  background-color: $primary_background;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 200px;
  padding: 0px 50px;
  align-items: flex-start;
}
</style>
