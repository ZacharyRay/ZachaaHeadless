<template>
    <section class="container">
        <div class="container__inner">
            <Header />
            <Nuxt />
        </div>
    </section>
</template>

<script>
import Header from "../components/Header.vue";
    export default {
    layout: "homepage",
    components: { Header }
}
</script>